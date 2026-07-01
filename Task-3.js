const input = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const messageContainer = document.getElementById("messageContainer");
const status = document.getElementById("status");
const count = document.getElementById("count");
let messages = [];
input.addEventListener("input", function () {
    count.textContent = "Character Count: " + input.value.length;
});
function displayMessages() {
    messageContainer.innerHTML = "";
    messages.forEach((msg, index) => {
        const div = document.createElement("div");
        div.textContent = msg;
        messageContainer.appendChild(div);
        setTimeout(() => {
            if(messages.includes(msg)){
                messages.splice(messages.indexOf(msg),1);
                displayMessages();
                status.textContent = "Message Expired";
            }

        },10000);

    });

}
addBtn.addEventListener("click", function () {
    const message = input.value.trim();
    const promise = new Promise((resolve,reject)=>{
        if(message.length>=3){
            resolve(message);
        }
        else{
            reject("Message must contain at least 3 characters");
        }

    });
    promise
    .then((msg)=>{
        status.textContent="Message Added Successfully";
        messages.push(msg);
        displayMessages();
        input.value="";
        count.textContent="Character Count: 0";
    })
    .catch((err)=>{
        status.textContent=err;
    });

});
clearBtn.addEventListener("click",function(){
    messages=[];
    messageContainer.innerHTML="";
    status.textContent="All Messages Cleared";
});