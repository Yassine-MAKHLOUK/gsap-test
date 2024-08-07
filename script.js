$(document).ready(function(){
    gsap.set(".logo", {
        x: -500
    })
    gsap.to(".logo", {
        duration: 2,
        rotation: 360,
        x: 0
    })

    gsap.set(".slogan", {
        y: 500
    })
    gsap.to(".slogan", {
        delay: 2,
        duration: 1,
        y: 0
    })
})