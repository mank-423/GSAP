var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");


main.addEventListener("mousemove", function(event){
    gsap.to(cursor, {
        x: event.x,
        y: event.y,
        duration: 1,
        ease: "back.out"
    })
})

image.addEventListener("mouseenter", function(){
    cursor.innerHTML = "View more"
    gsap.to(cursor, {
        scale: 2,
    })
})

image.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
    })
})