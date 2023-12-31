const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation(){
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    tl.to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        stagger: .2,
        delay: -1
    })

    tl.from("#page1footer", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1
    })
}   

function mobilecursor(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

mobilecursor();
firstPageAnimation();