var card = document.getElementById("card");
var card_content = document.getElementById("card_content");
var show_img = document.getElementById("show_img");
var circle_bg=document.querySelector(".circle-bg");

card.addEventListener('mouseenter',(e)=>{
    card_content.style.transform = "translateZ(150px)";
    circle_bg.style.transform = "translateZ(-50px)";
    show_img.style.transitionDuration="0.5s"
    show_img.style.transform="rotateZ(-30deg)"
    
})
card.addEventListener('mousemove',(e)=>{
    card.style.transition = "none";
    x = (window.innerWidth/2 - e.pageX)/25;
    y = (window.innerHeight/2 - e.pageY)/25;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    
    
})
card.addEventListener('mouseleave',()=>{
    card.style.transition = "all 0.3s ease";
    card_content.style.transition = "all 0.5s ease";
    card.style.transform = `rotateX( 0deg) rotateY( 0deg)`;
    card_content.style.transform = "translateZ(0px)";
    show_img.style.transform="rotateZ(0deg)"
})