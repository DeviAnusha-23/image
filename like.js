let likeBtn = document.querySelector(".like");
let popUp = document.querySelector(".heart")

likeBtn.addEventListener("click",function(){
    popUp.classList.add("show");
    likeBtn.innerHTML='<i class="fa-solid fa-heart"></i>';
    likeBtn.style.color = "red";
    setTimeout(function (){
        popUp.classList.remove("show");
    },1000);
});
