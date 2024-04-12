// DOM operations script.

// Popup the number of users.
function listUsers() {
    document.getElementById("users").classList.toggle("hidden");
}

// Check for the username and gender.
const loginForm = document.forms[0];
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("username");
    let gender = document.getElementById("gender").value;

    let chatBox = document.getElementById("chat-box");

    if(username && gender) {
        loginForm.style.display = "none";
        chatBox.style.display = "block";
    }
});