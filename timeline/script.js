var tl = gsap.timeline();

var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

cross.addEventListener('click', function(){
    tl.reverse();
});

menu.addEventListener('click', function(){
    tl.play();
})

tl.to("#full", {
    right: 0,
    duration: 0.6,
})

tl.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
})

tl.pause();

