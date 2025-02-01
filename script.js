const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm-password");
const hidden = document.querySelector(".hidden");

form.addEventListener("input", () => {
    if (confirm.value != password.value) {
        hidden.textContent = "Password does not match!";
    } else {
        hidden.textContent = "";
    }
});