$(document).ready(function(){
    gsap.set(".logo", {
        x: -500
    })
    gsap.to(".logo", {
        duration: 2,
        rotation: 360,
        x: 0
    })
})