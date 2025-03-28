import React, { useEffect, useRef } from "react";
import "../../public/css/product.css";

const CadCamMilling = () => {
    const videoRefP = useRef(null);
    useEffect(() => {
        if (typeof window !== "undefined") {
            // Handle Video Player Setup
            if (videoRefP.current) {
                const player = new Plyr(videoRefP.current, {
                    autoplay: true,
                    muted: true,
                    loop: { active: true },
                });

                videoRefP.current.play().catch((error) => console.log("Autoplay blocked:", error));

                document.addEventListener("click", () => {
                    videoRefP.current.play();
                });

                return () => {
                    player.destroy();
                };
            }

            // Handle Step Background Change and Content Toggle
            const steps = document.querySelectorAll(".step");
            steps.forEach((step) => {
                const title = step.querySelector("h3");
                const subtitle = step.querySelector("p");

                step.addEventListener("mouseenter", () => {
                    const bgImage = step.getAttribute("data-bg");
                    step.style.backgroundImage = `url(${bgImage})`;
                    step.style.backgroundSize = "cover";
                    step.style.backgroundPosition = "center";
                    step.style.backgroundRepeat = "no-repeat";

                    // Hide Title and Subtitle
                    if (title) title.style.opacity = "0";
                    if (subtitle) subtitle.style.opacity = "0";
                });

                step.addEventListener("mouseleave", () => {
                    step.style.backgroundImage = "";
                    step.style.backgroundColor = "#00478a";

                    // Show Title and Subtitle
                    if (title) title.style.opacity = "1";
                    if (subtitle) subtitle.style.opacity = "1";
                });
            });
        }
    }, []);

    return (
        <>
            <section className="DW-home" >
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="product-text p-3">
                                <h2 className="double-heading">Revolutionizing Restorations with <span className="highlight-text">CAD/CAM Precision.</span></h2>
                                <p>
                                    We are passionate about digital dentistry, continually investing in the latest CAD/CAM and scanning systems to stay at the .
                                    forefront of innovation. By incorporating cutting-edge technology into our practice, we enhance precision, improve patient outcomes,
                                    and streamline workflows. Our commitment to excellence ensures that our patients receive the highest quality care, and we continue to embrace 
                                    advancements in digital tools that make dental procedures more efficient and effective.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="video-section">
                                <video autoPlay loop muted playsInline id="player" className="video-crop-cad">
                                    <source src="/videos/cad-cam.mp4" type="video/mp4" />
                                    <source src="/videos/ADVANCE-DENTAL-EXPORT.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="quality-section">
                <video autoPlay loop muted playsInline id="player" className="background-video" >
                    <source src="/videos/veneer.mp4" type="video/mp4" />
                    <source src="/videos/veneer.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="container d-flex justify-content-center align-items-center " >
                    <div className="quality-content ">

                        To ensure exceptional results, ADDL provides premium dental lab solutions that prioritize precision, craftsmanship, and advanced technology for superior dental restorations. <br />

                        <a href="#" class="btn">Get In Touch</a>
                    </div>
                </div>

            </section>
        </>


    )
}

export default CadCamMilling;