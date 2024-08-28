function page1Animation() {
    var tl = gsap.timeline();

    tl.from("nav h1,nav h4, nav button", {
        y: -10,
        opacity: 0,
        delay: 1,
        duration: 0.6,
        stagger: 0.2,
    })

    tl.from(".center-part-1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    })

    tl.from(".center-part-1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part-1 button", {
        opacity: 0,
        duration: 0.4,
    })

    tl.from(".center-part-2 img", {
        opacity: 0,
        duration: 0.3,
    }, "-=0.3")

    gsap.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
            trigger: '.section1bottom',
            scroller: "body",
            start: "top 90%",
        }
    });
}

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            end: "top 0",
            scrub: 2,
        }
    });
    
    tl2.from(".services", {
        y: 30,
        duration: 0.6,
        opacity: 0,
        delay: 0.2, 
    })
    
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 0.5,
        delay: 1,
    }, "anim1")
    
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 0.5,
        delay: 1,
    }, "anim1")
    
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 0.5,
        delay: 1,
    }, "anim2")
    
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 0.5,
        delay: 1,
    }, "anim2")
    
}

page1Animation();
page2Animation();
