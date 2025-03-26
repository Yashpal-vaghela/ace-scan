import React, { useEffect, useRef } from "react";
import "../../public/css/product.css";
import Image from "next/image";

const Implants = () => {
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
                                <h2 className="double-heading">We Weave <span className="highlight-text">Precision</span> and Craftsmanship into Perfect <span className="highlight-text">Implant Restorations.</span></h2>
                                <p>
                                    We combine skilled craftsmanship with digital artistry to create dental restorations that are not only functional but also natural in appearance and feel, ensuring a seamless blend with your smile. For crowns and bridges, we use advanced digital tools and premium materials to craft durable, aesthetically pleasing solutions. These restorations restore both form and function, providing patients with a beautiful, comfortable smile that lasts for years.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="video-section">
                                <video autoPlay loop muted playsInline id="player" className="video-crop">
                                    <source src="/videos/Implant.mp4" type="video/mp4" />
                                    <source src="/videos/ADVANCE-DENTAL-EXPORT.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-before-after">
                <div className="container">
                    <div className="row for-rlative">
                       
                    <div className="product-before-after-heading">
                        <h2 className="heading_outer ">Renew Your Teeth, Renew Your Confidence Transforming Lives with the Benefits of Dental Implants.</h2>
                        </div>
                        <div className="col-12 col-lg-8 ">
                            <div className="product-before-after-images">
                                <Image
                                    src="/images/cmb.png"
                                    alt="about"
                                    width={550}
                                    height={400}
                                    className="img-fluid round-images"
                                />
                            </div>
                           
                        </div>

                        <div className="col-12 col-lg-4 ">
                            
                            <div className="product-before-after-content ">

                            <div className="product-before-after-heading">
                        <h2 className="before-after-contains">Renew Your Teeth, Renew Your Confidence Transforming Lives with the Benefits of Dental Implants.</h2>
                        </div>
                            We prioritize your comfort and satisfaction, offering tailored solutions that meet your unique needs. With our use of the latest technology and premium materials, we provide restorations that look and feel natural, ensuring a perfect fit and long-lasting results. Our experienced team is dedicated to guiding you through every step of the process, helping you enjoy the full benefits of dental implants—restored functionality, a beautiful smile, and renewed confidence. 
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

                    We embrace even the most challenging implant cases with personalized care and advanced technology, ensuring the best results for each patient. Throughout the process, we keep our patients informed and comfortable, helping them regain function and confidence with natural-looking implants. We believe in providing not just lasting solutions, but a positive experience that enhances well-being. In the end, our expertise and commitment to care deliver a life-changing outcome for every patient. <br />

                        <a href="#" class="btn">Get In Touch</a>
                    </div>
                </div>

            </section>
        </>


    )
}

export default Implants;