function breakText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    var splitText = h1Text.split("");

    var clutter = "";

    var halfValue = splitText.length / 2;

    splitText.forEach((letter, index) => {
        if (index < halfValue){
            clutter += `<span class="first">${letter}</span>`;
        }else{
            clutter += `<span class="last">${letter}</span>`;
        }
    })
    h1.innerHTML = clutter;
}

function animate(){

    gsap.from("h1 .first", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.2,
        ease: "circ.out",
    })

    gsap.from("h1 .last", {
        y: 80,
        opacity: 0,
        duration: 1.1,
        delay: 0.5,
        stagger: -0.2,
        ease: "circ.out",
    })
}

breakText();

animate();

