let btns = document.querySelectorAll(".nav-btn");
let slide = document.querySelectorAll(".vedio-slide");
let contents = document.querySelectorAll(".info");
let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");

var slidernav = function(manual){

    btns.forEach((btn)=>{
        btn.classList.remove("active");
    })

    slide.forEach((vedio)=>{
        vedio.classList.remove("active");
    });

    contents.forEach((play)=>{
        play.classList.remove("active");
    });

    btns.forEach((btn)=>{
        btns[manual].classList.add("active");
        slide[manual].classList.add("active");
        contents[manual].classList.add("active");

    });

}


btns.forEach((btn , i)=>{
    btn.addEventListener("click",()=>{
        slidernav(i);

    })
});


menu.onclick = function(){
    menu.classList.toggle("active")
    navbar.classList.toggle("bx-x")
}

navbar.onclick = function(){
    navbar.classList.remove("bx-x")
    menu.classList.remove("active")

}