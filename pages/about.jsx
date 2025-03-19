import { useEffect, useState, React, useRef } from "react";
import "../public/css/about.css";
import Image from "next/image";

const About = () => {
    
    const videoRef = useRef(null);

    useEffect(() => {
      if (typeof window !== "undefined" && videoRef.current) {
        const player = new Plyr(videoRef.current, {
          autoplay: true, // Ensures autoplay
          muted: true, // Required for autoplay to work in modern browsers
          loop: { active: true },
        });
  
        // Handle autoplay restrictions
        videoRef.current
          .play()
          .catch((error) => console.log("Autoplay blocked:", error));
  
        document.addEventListener("click", () => {
          videoRef.current.play();
        });
  
        return () => {
          player.destroy();
        };
      }
    }, []);
    return (
        <>
            <div className="about-container d-flex align-items-center">
                <div className="about-content d-flex">
                    <div className="about-images">
                        <div className="image-top">
                            <Image
                                src="/images/about-ace.jpg"
                                alt="about"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                        <div className="image-bottom">
                            <Image
                                src="/images/dental-ace.jpg"
                                alt="about1"
                                width={300}
                                height={200}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                    <div className="about-text">
                        <h2>
                            Your Trusted <span className="highlight"> Dental Lab </span> for All Your Clinical Needs
                        </h2>
                        <p>
                            ADDL collaborates with a network of highly reputable, certified laboratories across USA to
                            deliver premium-quality dental restorations. Our commitment to precision, innovation, and
                            excellence ensures that your practice receives superior dental lab solutions tailored to meet your clinical requirements.
                        </p>
                    </div>
                </div>
            </div>
            <div className="certification-section">
                <div className="certification-overlay">
                    <div className="certification-content text-start">
                        <p>
                            Our partnership exclusively involves FDA-verified dental labs that offer exceptional quality and value.
                            This ensures that you receive restorations that meet the latest industry standards while maintaining superior precision and reliability.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-container d-flex align-items-center">
                <div className="about-content d-flex">
                    <div className="about-images">
                        <Image
                            src="/images/USA-map.png"
                            alt="about"
                            width={550}
                            height={400}
                            className="img-fluid"
                        />
                    </div>
                    <div className="about-text">
                        <h2>
                            Delivering Excellence In <span className="highlight"> Across The USA </span>
                        </h2>
                        {/* <h2>Premier Dental Solutions, Delivered Across the USA</h2> */}
                        <p>
                            At ADDL, we provide dental professionals across the USA with premium-quality products,
                            ensuring precision, reliability, and superior patient outcomes. Our efficient distribution network guarantees
                            timely delivery nationwide, while our dedicated support team ensures a seamless experience from order to delivery.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-section d-flex align-items-center">
                <div className="row g-4">
                    <div className="col-12 col-lg-6 col-md-6 about-left">
                        <div className="about-text w-40">
                            <h2>Working Only With The Best</h2>
                        </div>
                        <Image
                            src="/images/vector.png"
                            alt="Dental Vector"
                            width={300}
                            height={200}
                            className="about-vector-image"
                        />
                        <div className="" style={{ width: '70%' }} >
                            Our laboratories utilize a diverse range of modern dental materials, including Zirconia, Titanium, and high-quality non-precious metal alloys, ensuring optimal strength, aesthetics, and biocompatibility. Whether crafting single crowns, full-arch rehabilitations, or complex implant restorations, we deliver precision-engineered solutions with a perfect fit and exceptional quality.
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-md-6 ">
                        <div className="about-content">
                            <p>
                                At ADDL, we collaborate with a team of certified, highly skilled, and experienced
                                dental technicians who have undergone extensive training in the design and fabrication of
                                all types of dental restorations.Our commitment to precision and excellence is reflected in our fully digital workflow,
                                which integrates cutting-edge CAD/CAM technology, advanced milling, and state-of-the-art sintering processes.
                            </p>
                        </div>


                        <div className="about-video">
                            {/* <video width="100%" height="auto" autoPlay loop muted>
                                <source src="/videos/dental-tech.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video> */}
                            <video autoPlay loop muted playsInline className="h-full w-full background-video" id="player">
                                <source src="/videos/masterpiece.webm" type="video/webm" />
                                <source src="/videos/fmr.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="video-overlay"></div>
                        </div>
                    </div>
                </div>
                {/* <div className="about-left">
                <div className="about-text">
                   <h2>Working Only With The Best</h2> 
                </div>
                <Image 
                src="/images/vector.png" 
                alt="Dental Vector" 
                width={400} 
                height={300} 
                className="about-vector-image"
                />
                <p>
                Our laboratories utilize a diverse range of modern dental materials, 
                including Zirconia, Titanium, and high-quality non-precious metal alloys, 
                ensuring optimal strength, aesthetics, and biocompatibility.
                </p>
            </div> */}
                {/* <div className="about-right">
                <div className="about-content">
                <p>
                    At ADDL, we collaborate with a team of certified, highly skilled, and experienced 
                    dental technicians who have undergone extensive training in the design and fabrication of 
                    all types of dental restorations.Our commitment to precision and excellence is reflected in our fully digital workflow, 
                    which integrates cutting-edge CAD/CAM technology, advanced milling, and state-of-the-art sintering processes.
                </p>
                </div>

              
                <div className="about-video">
                <video width="100%" height="auto" autoPlay loop muted>
                    <source src="/videos/dental-tech.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div> */}
            </div>
        </>
    );
};
export default About;