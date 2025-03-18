import React from "react";
import "../public/css/about.css";
import Image from "next/image";

const About = () => {
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
            <div className="about-left">
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
            </div>
            <div className="about-right">
                <div className="about-content">
                <p>
                    At ADDL, we collaborate with a team of certified, highly skilled, and experienced 
                    dental technicians who have undergone extensive training in the design and fabrication of 
                    all types of dental restorations.Our commitment to precision and excellence is reflected in our fully digital workflow, 
                    which integrates cutting-edge CAD/CAM technology, advanced milling, and state-of-the-art sintering processes.
                </p>
                </div>

                {/* Video Section */}
                <div className="about-video">
                <video width="100%" height="auto" autoPlay loop muted>
                    <source src="/videos/dental-tech.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
        </div>
    </>
 );
};
export default About;