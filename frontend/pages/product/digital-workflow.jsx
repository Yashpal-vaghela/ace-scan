import Head from "next/head";
import React from "react";

const DigitalWorkflow = () => {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Digital Workflow Solutions | Ace Digital Dental Lab",
        "url": "https://acedigitaldentallaboratory.com/product/digital-workflow/",
        "description": "Streamline your dentistry with Ace Digital Dental Lab’s cutting-edge digital workflow—precision, speed, and reliability from scan to final restoration.",
        "inLanguage": "en"
    }
      const breadcrumsSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://acedigitaldentallaboratory.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Digital Workflow",
          "item": "https://acedigitaldentallaboratory.com/product/digital-workflow/"
        }
      ]
  }
    return (
        <>
            <Head>
                <title>Digital Workflow Solutions | Ace Digital Dental Lab</title>
                <meta name="description" content="Streamline your dentistry with Ace Digital Dental Lab’s cutting-edge digital workflow—precision, speed, and reliability from scan to final restoration."/>
                <link rel="canonical" href="https://acedigitaldentallaboratory.com/product/digital-workflow/" /> 
                <meta property="og:locale" content="en_US"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Digital Workflow Solutions | Ace Digital Dental Lab" />
                <meta name="og:description" content="Streamline your dentistry with Ace Digital Dental Lab’s cutting-edge digital workflow—precision, speed, and reliability from scan to final restoration."/>
                <meta property="og:url" content="https://acedigitaldentallaboratory.com/product/digital-workflow/" />
                <meta property="og:site_name" content="Ace Digital Dental Lab" />
                <meta name="og:image" content="/images/feature-ADDL.webp" />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumsSchema) }} />
            </Head>
            <section className="bradcrumb-product" style={{ marginTop: "80px" }}>
                <div className="container  px-sm-3 h-100">
                    <div className=" d-flex justify-content-end align-items-start flex-column inner-bread" >
                        <h1 className="breadcrumbTitle">
                            Digital Workflow
                        </h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb text-sm breadcrumbNav">
                                <li className="breadcrumb-item active"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Products</li>
                                <li className="breadcrumb-item ">Digital Workflow</li>
                            </ol>
                        </nav>
                    </div>

                </div>
            </section>
            <section className="DW-home" >
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 col-md-6 order-1 order-lg-0 order-md-0">
                            <div className="product-text  p-sm-3">
                                <h2 className="double-heading heading1 mt-3 mb-2 ">Seamless <span className="highlight-text">Digital Interaction</span></h2>
                                
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
                        <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-center order-0 order-lg-1 order-md-1 align-items-center">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                id="player"
                                className="w-100 h-auto"
                                style={{ maxWidth: "100%", maxHeight: "400px", borderRadius: "10px" }}
                            >
                                <source src="https://d1ytpjko2pk6h2.cloudfront.net/Digital-Dental.mp4" type="video/mp4" />
                                <source src="https://d1ytpjko2pk6h2.cloudfront.net/Digital-Dental.webm" type="video/webm" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                    </div>
                </div>
            </section>

            <section className="steps mt-3 mt-sm-4">
                <div className="container">
                    {/* <div className="order-process-content"> */}
                    <div className="row  p-sm-2 mt-4">
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="order-process-text">
                                <h2 className="double-heading heading1 mt-0 mb-1">Free up your clinical time</h2>
                                <p className="mb-sm-2">Submitting your orders to ADDL is hassle-free.</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 col-md-6">
                            <div className="order-process-details">
                                <p className="mb-sm-0">
                                    Simply press on the “Place an Order” button located at the top right of our website,
                                    and fill in the necessary fields. We offer a complementary courier collection service
                                    for your convenience.
                                </p>
                            </div>
                        </div>


                    </div>

                    <div className="row gap-3 gap-sm-0  pb-4 " style={{ paddingTop: "20px" }}>
                        <div className="col-12 col-lg-3 col-md-6 px-4 p-sm-2  ">
                            <div className="step c1 ">
                                <div className="fulloverlay"></div>
                                <div className="card-body-content card1">
                                    <p>01</p>
                                    <h3 className="card-hed">Incoming Orders</h3>

                                    <div className="card-txt">We ensure that all incoming orders are carefully inspected to ensure that they meet our high standards before they enter the construction phase.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-3 col-md-6 px-4 p-sm-2">
                            <div className="step c2 " >
                                <div className="fulloverlay"></div>
                                <div className="card-body-content card2">
                                    <p>02</p>
                                    <h3 className="card-hed">Design and Construction</h3>

                                    <div className="card-txt">Throughout the design and construction phases, our skilled technicians use only the finest materials and cutting-edge equipment to create custom lab work that is tailored to your specific requirements</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 px-4 p-sm-2">
                            <div className="step c3 ">
                                <div className="fulloverlay"></div>
                                <div className="card-body-content card3">
                                    <p>03</p>
                                    <h3 className="card-hed">Quality Control</h3>

                                    <div className="card-txt">Quality is at the heart of everything we do. Rest assured that you can rely on us to provide you with dependable and superior dental laboratory services.</div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-lg-3 col-md-6 px-4 p-sm-2">
                            <div className="step c4 ">
                                <div className="fulloverlay"></div>
                                <div className="card-body-content card4">
                                    <p>04</p>
                                    <h3 className="card-hed">Delivery</h3>
                                    
                                    <div className="card-txt">At ACE Advance Digital Lab, we ensure timely and secure deliveries. Rely on us for consistent turnaround and dependable dental lab logistics.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="quality-section mb-0 mb-sm-4">
                <video autoPlay loop muted playsInline id="player" className="background-video product" >
                    <source src="/videos/veneer.mp4" type="video/mp4" />
                    <source src="/videos/veneer.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="container d-flex justify-content-center align-items-center " >
                    <div className="quality-content ">

                        To ensure exceptional results, ADDL provides premium dental lab solutions that prioritize precision, craftsmanship, and advanced technology for superior dental restorations. <br />

                        <a href="/contact-us/" className="btn">Get In Touch</a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default DigitalWorkflow;






