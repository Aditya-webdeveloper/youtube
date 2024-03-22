(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
function homeAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 3
        },
    })

    tl.to(".video", {
        "--clip": "0%",
        ease: Power2,
        duration: 2,
    }, 'a')
    tl.to(".marquee-text", {
        scale: 1,
        ease: Power2,
        duration: 2,
    }, 'a')
    tl.to(".lft", {
        xPercent: -10,
        ease: Power2,
        stagger: .2,
        ease: Power4,
        duration: 2,
    }, 'b')

    tl.to(".rgt", {
        xPercent: 10,
        ease: Power2,
        stagger: .2,
        ease: Power4,
        duration: 2,
    }, 'b')

}

function page3Animation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".page-3",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    })
}

function page4Animation() {

    let list = document.querySelectorAll(".list-elem")
    // let photo = document.querySelectorAll(".picture")
    list.forEach(function (e) {
        e.addEventListener("mouseenter", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -500, 500, dets.clientX),
                ease: Power4,
                duration: .5
            })
        })
        e.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: .5
            })
        })
    })
}

document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: function () {
            document.body.setAttribute("theme", e.dataset.color)
        },
        onEnterBack: function () {
            document.body.setAttribute("theme", e.dataset.color)
        }
    })
})


homeAnimation()
page3Animation()
page4Animation()