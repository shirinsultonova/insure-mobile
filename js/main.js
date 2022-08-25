
var elModalOpenButton = document.querySelector(".site-header__hamburger");
var elModalOpenlink = document.querySelector(".site-header__finish");

elModalOpenButton.addEventListener("click", function(){
    elModalOpenlink.classList.toggle("site-header__finish--active");
});