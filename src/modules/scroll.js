import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const footerEntry = ()=>{
    gsap.fromTo("ul.socialIcons tr", {
        opacity: 0,
        y: 25
    }, {
        duration: 0.1,
        opacity: 1,
        y: 0,
        stagger: 0.6,
        scrollTrigger: {
            trigger: "#contactMe",
            start: "-50% top",
            // markers: true,
        }
    })
}