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
                                <h2 className="double-heading">Seamless <span className="highlight-text">Digital Interaction</span></h2>
                                <p>
                                    The transition to a fully digital workflow in dentistry is rapidly advancing,
                                    with intraoral scanners revolutionizing modern dental practices. While traditionally
                                    catering to a conventional audience, ADDL is at the forefront of digital innovation,
                                    enhancing efficiency and precision in every restoration. Digital impressions ensure
                                    greater accuracy, speed, and patient comfort while optimizing workflow reliability.
                                    Our investment in cutting-edge technology guarantees superior results and exceptional
                                    client satisfaction.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="video-section">
                                <video autoPlay loop muted playsInline id="player" className="video-crop">
                                    <source src="/videos/ADVANCE-DENTAL-EXPORT.mp4" type="video/mp4" />
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

export default CrownsBridges;