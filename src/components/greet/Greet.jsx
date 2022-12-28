import React, { useRef, useEffect } from "react";
import "./Greet.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "components/Title";
import { animateBigTitle } from "modules/header";
gsap.registerPlugin(ScrollTrigger);

const ContactSections = () => {
  const ref = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 576px)')
    if (mediaQuery.matches) {
      animateBigTitle()
    }
    
  }, []);

  return (
    <div ref={ref} className="content" id="contactSections">
      <div className='contactSection'>
      <Title> Hi, I'm Shizan Vasim</Title>
    </div>
    </div>
  );
};

export default ContactSections;
