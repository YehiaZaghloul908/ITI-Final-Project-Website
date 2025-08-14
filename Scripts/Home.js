document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#home").addEventListener("click", () => {
        window.location.href="./Home.html";
    })
    document.querySelector("#aboutUs").addEventListener("click", () => {
        document.querySelector("#footer").scrollIntoView();
    })
    document.querySelector("#contact").addEventListener("click", () => {
        document.querySelector("#footer").scrollIntoView();
    })
})