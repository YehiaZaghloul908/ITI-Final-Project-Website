document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#login").addEventListener("click", (login) => {
        login.preventDefault();
    });
    document.querySelector("#login").addEventListener("click", () => {
        let username = document.querySelector("#username").value.trim();
        let emptyUsername = document.querySelector("#emptyUsername");
        let password = document.querySelector("#password").value.trim();
        let emptyPassword = document.querySelector("#emptyPassword");
        if(username == ""){
            emptyUsername.textContent = "Please Enter Your Username";
            emptyUsername.style.color = "red";
        }else{
            emptyUsername.textContent = "";
        }
        if(password == ""){
            emptyPassword.textContent = "Please Enter Your Password";
            emptyPassword.style.color = "red";
        }else{
            emptyPassword.textContent = "";
        }
        if(username != "" && password != ""){
            window.location.href = "./Home.html";
        }
    });
});