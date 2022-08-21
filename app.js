const hamBtn = document.getElementById("hamburger");
const hamMenu = document.getElementById("hamburger-menu");
const bodya = document.querySelector("body");
const hamItem = document.querySelectorAll(".ham-list-item")
hamBtn.addEventListener("click",()=> {
    if(hamMenu.style.display === "none"){
        hamMenu.style.display ="block";
    }
    else{
        hamMenu.style.display="none"
    }
})


    

