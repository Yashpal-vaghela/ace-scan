import React, { useEffect, useRef,useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProductQuality = () => {
 
  const sectionRef = useRef(null);
  const text1Ref = useRef(null);
  const implant1Ref = useRef(null);
  const implant2Ref = useRef(null);
  const implant3Ref = useRef(null);

  const [scaleValues, setScaleValues] = useState({
    scaleValue: 1,
    scaleValue1: 0.72,
    scaleValue2: 1.3,
  });

  useEffect(() => {
    function updateScaleValues() {
      let scaleValue = 1;
      let scaleValue1 = 0.72;
      let scaleValue2 = 1.3;

      const w = window.innerWidth;
      if (w >= 0 && w <= 576) {
        scaleValue1 = 0.7;
        scaleValue = 1.1;
        scaleValue2 = 1.47;
      } else if (w >= 480 && w <= 576) {
        scaleValue1 = 0.85;
        scaleValue = 1.23;
        scaleValue2 = 1.65;
      } else if (w >= 576 && w <= 768) {
        scaleValue1 = 0.8;
        scaleValue = 1.3;
        scaleValue2 = 1.78;
      } else if (w >= 768 && w <= 991) {
        scaleValue1 = 0.7;
        scaleValue = 1.15;
        scaleValue2 = 1.6;
      } else if (w >= 992 && w <= 1200) {
        scaleValue1 = 0.7;
        scaleValue = 1.1;
        scaleValue2 = 1.6;
      } else if (w >= 1200 && w <= 1300) {
        scaleValue1 = 0.72;
        scaleValue = 1.2;
        scaleValue2 = 1.7;
      } else if (w >= 1300 && w <= 1440) {
        scaleValue1 = 0.65;
        scaleValue = 1.05;
        scaleValue2 = 1.45;
      } else if (w >= 1439 && w <= 1649) {
        scaleValue1 = 0.7;
        scaleValue = 1.05;
        scaleValue2 = 1.4;
      } else if (w >= 1650 && w <= 1800) {
        scaleValue1 = 0.68;
        scaleValue = 1.02;
        scaleValue2 = 1.35;
      } else if (w >= 1800 && w <= 2000) {
        scaleValue1 = 0.68;
        scaleValue = 0.98;
        scaleValue2 = 1.28;
      } else {
        scaleValue1 = 0.72;
        scaleValue = 1;
        scaleValue2 = 1.3;
      }

      setScaleValues({ scaleValue, scaleValue1, scaleValue2 });
    }
    updateScaleValues();
    window.addEventListener("resize", () => {
      updateScaleValues();
      ScrollTrigger.refresh();
    });
    return () => window.removeEventListener("resize", updateScaleValues);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: false,
        onLeave: () => {
          sectionRef.current.classList.add("unpinned");
        },
        onLeaveBack: () => {
          sectionRef.current.classList.remove("unpinned");
        },
        onEnterBack: () => {
          sectionRef.current.classList.remove("unpinned");
        },
      },
    });

    tl.to(
      text1Ref.current,
      {
        scale: 2,
        ease: "power2.out",
        duration: 1,
      },
      0.5
    );

    tl.fromTo(
      implant1Ref.current,
      {
        y: 0,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: -(window.innerHeight * scaleValues.scaleValue1),
        opacity: 1,
        scale: 1,
        rotation: -5,
        ease: "power2.out",
        duration: 1,
      },
      1
    );

    tl.fromTo(
      implant2Ref.current,
      {
        y: 0,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: -(window.innerHeight * scaleValues.scaleValue),
        opacity: 1,
        scale: 1,
        rotation: 5,
        ease: "power2.out",
        duration: 1,
      },
      ">"
    );

    tl.fromTo(
      implant3Ref.current,
      {
        y: -400,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: -(window.innerHeight * scaleValues.scaleValue2),
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: "power2.out",
        duration: 1,
      },
      ">"
    );
  }, [scaleValues]);
  return (
   <div
        ref={sectionRef}
        className="why-implant-section"
        style={{ height: "300vh", background: "#f0f0f0" }}
      >
        <div
          id="text1"
          ref={text1Ref}
          style={{ textAlign: "center", fontSize: "48px" }}
        >
          Title Text
        </div>
        <div
          id="Implant1"
          ref={implant1Ref}
          style={{ marginTop: "200px", fontSize: "32px" }}
        >
          Implant 1
        </div>
        <div
          id="Implant2"
          ref={implant2Ref}
          style={{ marginTop: "200px", fontSize: "32px" }}
        >
          Implant 2
        </div>
        <div
          id="Implant3"
          ref={implant3Ref}
          style={{ marginTop: "200px", fontSize: "32px" }}
        >
          Implant 3
        </div>
      </div>
  );
};
