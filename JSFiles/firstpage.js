const hamburger = document.querySelector("#ham")
const mnu = document.querySelector(".links")

hamburger.addEventListener("click", ()=>{
    mnu.classList.toggle("left")
    hamburger.classList.toggle("bi-x")
})



