import React, { useEffect, useRef } from "react";
import "../public/css/product.css";

const Product = () =>{
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
                    step.style.backgroundColor = "#5aa5a5";
    
                    // Show Title and Subtitle
                    if (title) title.style.opacity = "1";
                    if (subtitle) subtitle.style.opacity = "1";
                });
            });
        }
    }, []);
    
    return(
        <>
            <div className="product-container">
                <div className="product-text">
                    <h2>Seamless <span className="highlight-text">Digital Interaction</span></h2> 
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
                <div className="video-section">
                    <video autoPlay loop muted playsInline id="player" className="">
                    <source src="/videos/ADVANCE-DENTAL-EXPORT.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="order-process-container">
                <div className="order-process-content">
                    <div className="order-process-text">
                        <h2>Free up your clinical time</h2>
                        <p>Submitting your orders to ADDL is hassle-free.</p>
                    </div>    
                    <div className="order-process-details">
                        <p>
                            Simply press on the “Place an Order” button located at the top right of our website, 
                            and fill in the necessary fields. We offer a complementary courier collection service 
                            for your convenience.
                        </p>
                    </div>
                </div>
                
                <div className="order-steps">
                    <div className="step" data-bg="/images/cardbg.jpg">
                        <h3>01</h3>
                        <p>Incoming Orders</p>
                        <div className="overlay">
                            <span>We ensure that all incoming orders are carefully inspected to ensure that they meet our high standards before they enter the construction phase.</span>
                        </div>
                    </div>
                    <div className="step">
                        <h3>02</h3>
                        <p>Design and Construction</p>
                        <div className="overlay">
                        <span>Throughout the design and construction phases, our skilled technicians use only the finest materials and cutting-edge equipment to create custom lab work that is tailored to your specific requirements.</span>
                        </div>
                    </div>
                    <div className="step">
                        <h3>03</h3>
                        <p>Quality Control</p>
                        <div className="overlay">
                        <span>Quality is at the heart of everything we do. Rest assured that you can rely on us to provide you with dependable and superior dental laboratory services.</span>
                        </div>
                    </div>
                    <div className="step">
                        <h3>04</h3>
                        <p>Returns</p>
                        <div className="overlay">
                        <span>At ADDL, we recognize the importance of timely deliveries and hassle-free returns. Rely on us for all your dental lab work requirements.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="quality-section">
                <video autoPlay loop muted playsInline id="player" className="background-video" >
                    <source src="/videos/veneer.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div class="quality-content">
                    <p>
                        To ensure exceptional results, ADDL provides premium dental lab solutions that prioritize precision, craftsmanship, and advanced technology for superior dental restorations.
                    </p>
                    <a href="#" class="btn">Get In Touch</a>
                </div>
            </div>
        </>
        
        
    )
}
export default Product;
