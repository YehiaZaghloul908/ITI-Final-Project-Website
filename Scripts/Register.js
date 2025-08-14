document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#form").addEventListener("submit", (register) => {
        register.preventDefault();
    });
    document.querySelector("#register").addEventListener("click", () => {
        let password = document.querySelector("#password").value.trim();
        let emptyPassword = document.querySelector("#emptyPassword");
        let confirmPassword = document.querySelector("#confirmPassword").value.trim();
        let incorrectConfirmPassword = document.querySelector("#incorrectConfirmPassword");
        let email = document.querySelector("#email").value.trim();
        let emptyEmail = document.querySelector("#emptyEmail");
        let username = document.querySelector("#username").value.trim();
        let emptyUsername = document.querySelector("#emptyUsername");
        let maleOption = document.querySelector("#maleOption").checked;
        let femaleOption = document.querySelector("#femaleOption").checked;
        let emptyGenderOption = document.querySelector("#emptyGenderOption");
        if(email == ""){
            emptyEmail.textContent = "Please Enter an Email";
            emptyEmail.style.color = "red";
        }else{
            emptyEmail.textContent = "";
        }
        if(username == ""){
            emptyUsername.textContent = "Please Enter a Username";
            emptyUsername.style.color = "red";
        }else{
            emptyUsername.textContent = "";
        }
        if(password == ""){
            emptyPassword.textContent = "Please Enter a Password";
            emptyPassword.style.color = "red";
        }else{
            emptyPassword.textContent = "";
        }
        if(password != confirmPassword){
            incorrectConfirmPassword.textContent = "Incorrect Password";
            incorrectConfirmPassword.style.color = "red";
        }else{
            incorrectConfirmPassword.textContent = "";
        }
        if(!maleOption && !femaleOption){
            emptyGenderOption.textContent = "Please Select Your Gender";
            emptyGenderOption.style.color = "red";
        }else{
            emptyGenderOption.textContent = "";
        }

        if(email != "" && username != "" && password != "" && password == confirmPassword && (maleOption || femaleOption)){
            window.location.href = "./home.html";
        }
    });
});