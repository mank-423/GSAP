window.addEventListener("wheel", function(e){
    if (e.deltaY > 0){
        // down scroll
        gsap.to("#marque", {
            transform: "translateX(-200%)",
            ease: "none",
            duration: 2,
            repeat: -1,
        })

        gsap.to("#marque img", {
            rotate: 180,
        })
    }else{
        // up scroll
        gsap.to("#marque", {
            transform: "translateX(0%)",
            ease: "none",
            duration: 2,
            repeat: -1,
        })

        gsap.to("#marque img", {
            rotate: 0,
        })
    }
})