import gsap from "gsap"

const navTl = gsap.timeline({
    duration: { default: 0.2 }
})


// Open Nav
export const openNav = () => {
    gsap.fromTo('.navBox', {
        duration: 0.2,
        opacity: 0,
        display: "none",
        delay: 0.1
    }, {
        duration: 0.2,
        opacity: 1,
        display: "grid",
        delay: 0.1
    })
    gsap.to(".burger.burger-one", {

        transform: 'rotate(45deg) translate(25%, 10%)'
    })
    gsap.to(".burger.burger-two", {
        transform: 'rotate(-45deg) translateX(25%)'
    })
    gsap.fromTo(".navBox li", {
        duration: 0.3,
        x: "10%",
        opacity: 0,
        transform: 'skewX(10deg)',
        delay: 0.2
    }, {
        duration: 0.3,
        x: "0%",
        opacity: 1,
        transform: 'skewX(0deg)',
        stagger: 0.1,
        delay: 0.2
    })
}


// Close Nav
export const closeNav = () => {
    navTl.to(".navBox li", {
        x: "10%",
        opacity: 0,
        transform: 'skewX(10deg)',
        stagger: 0.1,
        delay: 0.1
    })
        .to('.navBox', {
            duration: 0.2,
            opacity: 0,
            display: "none",
            delay: 0.2
        })
    gsap.to(".burger.burger-one", {
        transform: 'rotate(0) translate(0%, 0%)',
        delay: 0.2
    })
    gsap.to(".burger.burger-two", {
        // rotate: '0deg',
        transform: 'rotate(0) translateX(25%) translateX(-25%)',
        delay: 0.2
    })
}