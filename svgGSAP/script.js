var initalPath = `M 0 100 Q 250 100 490 100`;

var finalPath = `M 0 100 Q 250 100 490 100`;

var string = document.querySelector('#string');

string.addEventListener('mouseenter', function (e) {
})

string.addEventListener('mouseleave', function () {
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 0.4,
        ease: "power3.out",
    })
})

string.addEventListener('mousemove', function (dets) {
    initalPath = `M 0 100 Q 250 ${dets.y} 490 100`;
    gsap.to("svg path", {
        attr: { d: initalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
    })
})
