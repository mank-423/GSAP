// GSAP to from

// gsap.to('#box1', {
//     x: 100,
//     duration: 2,
//     delay:2,
//     rotate: 180,
//     backgroundColor: 'green',
//     borderRadius: "50%",
//     scale: 0.5,
//     repeat: -1,
//     yoyo: true,
// })

// gsap.from("h1", {
//     opacity: 0,
//     y: 20,
//     duration: 5,
//     delay: 2,
//     stagger: 1,
// })

// // to -> move initial to final
// // from -> move final to initial

// // gsap.to('.box2', {
// //     x: 200,
// //     backgroundColor: 'black',
// //     duration: 1.5,
// //     delay: 1,
// // })

// // gsap.to('.box3', {
// //     x: 200,
// //     backgroundColor: 'red',
// //     duration: 1.5,
// //     delay: 2.5,
// // })

// // gsap.to('.box4', {
// //     x: 200,
// //     backgroundColor: 'yellow',
// //     duration: 1.5,
// //     delay: 4,
// // })

// // var tl = gsap.timeline();

// // tl.to('.box2', {
// //     x: 500, 
// //     rotate: 360, 
// //     duration: 1.5
// // })

// // tl.to('.box3', {
// //     x: 500, 
// //     rotate: 360, 
// //     duration: 1.5
// // })

// // tl.to('.box4', {
// //     x: 500, 
// //     rotate: 360, 
// //     duration: 1.5
// // })


// var tl = gsap.timeline();

// tl.from("h2", {
//     y:-30,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5
// })

// tl.from("h4", {
//     y:-30,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3,
// })

// gsap.from("#page1 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
// })

// gsap.from("#page2 #box", {
//     scale: 0,
//     delay: 1,
//     duration: 2,
//     rotate: 360,
//     // scrollTrigger: "#page2 #box"
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers:true,
//         start: "top 60%",
//         // scrub: true,
//         scrub: 2,
//         pin: true,
//     }
// })

// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 500,
//     scrollTrigger:{
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })

// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     x: -500,
//     scrollTrigger:{
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })

// When we use pin property then we trigger parent
gsap.to("#page2 h1", {
    transform: "translateX(-150%)",
    duration: 3,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        marker: true,
        start: "top 0%",
        end: "top -100%",
        pin: true,
        scrub: true,
    }
})