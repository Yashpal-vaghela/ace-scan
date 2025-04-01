import React, { useEffect, useRef } from "react";
import "../../public/css/product.css";
import "../../public/css/common.css";

const DigitalWorkflow = () => {
    const videoRefP = useRef(null);

    return (
        <>
            <section className="bradcrumb-product" style={{ marginTop: "80px" }}>
                <div className="container h-100">
                    <div className=" d-flex justify-content-end align-items-start flex-column inner-bread" >
                        <div className="breadcrumbTitle">
                            Digital Workflow
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb text-sm breadcrumbNav">
                                <li class="breadcrumb-item active"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Products</li>
                                <li class="breadcrumb-item ">Digital Workflow</li>
                            </ol>
                        </nav>
                    </div>

                </div>
            </section>
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
                                <video autoPlay loop muted playsInline id="player" className="video-crop-cad h-100">
                                    <source src="https://d1ytpjko2pk6h2.cloudfront.net/Digital-Dental.mp4" type="video/mp4" />
                                    <source src="https://d1ytpjko2pk6h2.cloudfront.net/Digital-Dental.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="steps mt-4" >
                <div className="container">
                    {/* <div className="order-process-content"> */}
                    <div className="row p-2 mt-4">
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="order-process-text">
                                <h2 className="double-heading">Free up your clinical time</h2>
                                <p>Submitting your orders to ADDL is hassle-free.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="order-process-details">
                                <p>
                                    Simply press on the “Place an Order” button located at the top right of our website,
                                    and fill in the necessary fields. We offer a complementary courier collection service
                                    for your convenience.
                                </p>
                            </div>
                        </div>


                    </div>

                    <div className="row" style={{ paddingTop: "20px" }}>
                        <div className="col-12 col-lg-3 col-md-6 p-1">
                            <div className="step c1 ">
                                <div className="fulloverlay"></div>
                                <div className="card-body-content card1">
                                    <h3>01</h3>
                                    <p className="card-hed">Incoming Orders</p>

                                    <div className="card-txt">We ensure that all incoming orders are carefully inspected to ensure that they meet our high standards before they enter the construction phase.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6 p-1 ">
                            <div className="step c2 " >
                                <div className="fulloverlay"></div>
                                <div className="card-body-content card2">
                                    <h3>02</h3>
                                    <p className="card-hed">Design and Construction</p>
                                    <div className="card-txt">Throughout the design and construction phases, our skilled technicians use only the finest materials and cutting-edge equipment to create custom lab work that is tailored to your specific requirements</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 p-1">
                            <div className="step c3 ">
                                <div className="fulloverlay"></div>
                                <div className="card-body-content card3">
                                    <h3>03</h3>
                                    <p className="card-hed">Quality Control</p>

                                    <div className="card-txt">Quality is at the heart of everything we do. Rest assured that you can rely on us to provide you with dependable and superior dental laboratory services.</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 p-1">
                            <div className="step c4 ">
                                <div className="fulloverlay"></div>
                                <div className="card-body-content card4">
                                    <h3>04</h3>
                                    <p className="card-hed">Returns</p>

                                    <div className="card-txt">At ADDL, we recognize the importance of timely deliveries and hassle-free returns. Rely on us for all your dental lab work requirements.
                                    </div>
                                </div>

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

export default DigitalWorkflow;






