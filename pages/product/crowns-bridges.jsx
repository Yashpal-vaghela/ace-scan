import React, { useEffect, useRef } from "react";
import "../../public/css/product.css";

const CrownsBridges = () => {
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
        }
    }, []);

    return (
        <>
            <section className="DW-home" >
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="product-text p-3">
                                <h2 className="double-heading">We Blend <span className="highlight-text">Craftsmanship </span>with <span className="highlight-text">Artistic Precision </span>in Restorations.
                                </h2>
                                <p>
                                     We combine skilled craftsmanship with digital artistry to create dental restorations 
                                     that are not only functional but also natural in appearance and feel, ensuring a seamless 
                                     blend with your smile. For crowns and bridges, we use advanced digital tools and premium materials
                                     to craft durable, aesthetically pleasing solutions. These restorations restore both form and function, providing patients with a beautiful, 
                                     comfortable smile that lasts for years.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="video-section-crown">
                                <video autoPlay loop muted playsInline id="player" className="video-crop-crowm">
                                    <source src="/videos/crown.mp4" type="video/mp4" />
                                    <source src="/videos/ADVANCE-DENTAL-EXPORT.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                                {/* <div className="video-overlay"></div> */}
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
            <section className="implant-card-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div className="implant-card">
                            <img src="/images/card-bg.png" className="card-bg"/>
                                <div className="implant-card-header">
                                    <h2> Aesthetic porcelain </h2>
                                </div>
                                <div className="implant-image-container">
                                    <img src="/images/PFM-POST.png" alt="Implant Full Mouth" />
                                </div>
                                <div className="implant-card-body p-2 text-justify">
                                    <p>
                                        Our PFM (Porcelain-Fused-to-Metal) crowns and bridges combine strength and aesthetics, enhanced by cutting-edge digital technology. Using advanced CAD/CAM software and precision milling techniques, we create restorations with exceptional fit and natural appearance. This fusion of digital design and traditional materials ensures long-lasting, functional, and highly aesthetic results.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="implant-card">
                                <img src="/images/card-bg.png" className="card-bg"/>
                                <div className="implant-card-header">
                                    <h2>Zirconia crowns</h2>
                                </div>
                                <div className="implant-image-container">
                                    <img src="/images/zir-conia.jpg" alt="Advanced CAD/CAM" />
                                </div>
                                <div className="implant-card-body p-2 text-justify">
                                    <p>
                                        At ADDL, we specialize in high-quality zirconia crowns and bridges, providing exceptional strength and aesthetics. Our advanced digital CAD/CAM workflow and precision milling guarantee a perfect fit and natural look. Using state-of-the-art digital sintering techniques, we create durable, lifelike restorations with unmatched accuracy, longevity, and reliability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="implant-card">
                                <img src="/images/card-bg.png" className="card-bg"/>
                                <div className="implant-card-header">
                                    <h2>Layered zirconia crowns</h2>
                                </div>
                                <div className="implant-image-container">
                                    <img src="/images/lzc.png" alt="Natural Aesthetics" />
                                </div>
                                <div className="implant-card-body p-2 text-justify">
                                <p>
                                    Our layered zirconia crowns and bridges combine strength with natural aesthetics, thanks to advanced digital workflows and CAD/CAM technology. Precision layering ensures lifelike shading and a perfect fit, creating durable, biocompatible restorations ideal for single crowns, bridges, and implants.
                                </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="implant-card">
                                <img src="/images/card-bg.png" className="card-bg"/>
                            <div className="implant-card-header">
                                <h2>PMMA Temporaries</h2>
                            </div>
                            <div className="implant-image-container">
                                <img src="/images/PMMA.png" alt="Natural Aesthetics" />
                            </div>
                            <div className="implant-card-body p-2 text-justify">
                            <p>
                                     PMMA temporary crowns and bridges are crafted using advanced digital design for a precise fit and natural look. They offer strength, comfort, and esthetics, allowing patients to confidently preview their final smile. Ideal for both short-term and long-term use.
                                </p>
                            </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CrownsBridges;