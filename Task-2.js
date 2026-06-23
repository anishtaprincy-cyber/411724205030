const fetchBtn = document.getElementById("fetchBtn");
const statusText = document.getElementById("status");
const userData = document.getElementById("userData");
fetchBtn.addEventListener("click", () => {
    statusText.textContent = "Loading...";
    userData.innerHTML = "";
    setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    const userCard = document.createElement("div");
                    userCard.classList.add("user-card");
                    userCard.innerHTML = `
                        <h3>${user.name}</h3>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                    `;
                    userData.appendChild(userCard);
                });
                statusText.textContent = "Loaded successfully";
            })
            .catch(error => {
                statusText.textContent = "Error loading data";
                console.log(error);
            });
    }, 2000);
});