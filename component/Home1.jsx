import { useEffect, useState, React, useRef } from "react";
import Testimonial from "./Testimonial";
import Image from "next/image";
import Link from "next/link";

const  Home1 = () => {
  const counters = [
    {
      finalCount: 100,
      duration: 5000,
      suffix: "%",
      noteAbove: "",
      noteBelow: "Customer Satisfaction",
    },
    {
      finalCount: 1,
      duration: 5000,
      suffix: "%",
      noteAbove: "less Than",
      noteBelow: "Remake",
    },
    {
      finalCount: 100,
      duration: 5000,
      suffix: "%",
      noteAbove: "",
      noteBelow: "Digital Workflow",
    },
  ];
  const [counts, setCounts] = useState(counters.map(() => 0));
  const cardRefs = useRef([]);
  const faqData = [
    {
      number: "1",
      title: "Incoming Case Review",
      description:
        "Every incoming case is thoroughly reviewed for completeness and accuracy before proceeding to the design and fabrication stage.",
    },
    {
      number: "2",
      title: "CAD/CAM Design Fabrication",
      description:
        "Using advanced CAD/CAM systems, we craft precise restorations tailored to clinical specifications with exceptional materials and expert craftsmanship.",
    },
    {
      number: "3",
      title: "Precision Quality Check",
      description:
        "Each restoration undergoes a multi-step quality assurance process to ensure optimal fit, function, and aesthetics before final approval.",
    },
    {
      number: "4",
      title: "Reliable Case Delivery",
      description:
        "Completed cases are securely packaged and dispatched on time, ensuring dependable delivery and consistent turnaround for your dental practice.",
    },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            startCounter(index);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const startCounter = (index) => {
    let start = 0;
    const { finalCount, duration } = counters[index];
    const step = finalCount / (duration / 30);

    const animate = () => {
      start += step;
      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = Math.min(Math.round(start), finalCount);
        return newCounts;
      });

      if (start < finalCount) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const [cardImage, setcardImage] = useState([]);
  const handleChangeImage = (e, cardName) => {
    if (cardName === "card1") {
      setcardImage({ imgUrl: "/images/f1111.webp" });
    } else if (cardName === "card2") {
      setcardImage({ imgUrl: "/images/f2.webp" });
    } else if (cardName === "card3") {
      setcardImage({ imgUrl: "/images/f4.webp" });
    } else if (cardName === "card4") {
      setcardImage({ imgUrl: "/images/f5.webp" });
    } else {
      setcardImage({ imgUrl: "/images/f3.webp" });
    }
  };

  return (
    <>
      <section
        className="why_ACE position-relative space-section"
      >
        <div className="container">
          <h2 className="heading1 mt-1  text-center">
            Need Assistance? Start Here
          </h2>

          <div className="row g-4">
            <Image src="/images/e.svg" alt="earth-vec" className="earth-vec" width={100} height={100}></Image>
            <div className="col-12 col-lg-6  p-4">
              <div className="card shadow-sm border-0" >
                <div
                  className="accordion user-select-none bg-transparent"
                  id="faqAccordion"
                >
                  <div className="accordion text-left " id="faqAccordion">
                    <div className="accordion-item border-0 ">
                      <h3 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                          onClick={(e) => handleChangeImage(e, "card1")}
                        >
                          What sets Ace as the best digital dental lab in the USA?
                        </button>
                      </h3>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body ">
                          Ace combines an end-to-end digital workflow—powered by CAD/CAM milling and 3D 
                          printing—with expert clinical advisors, ultra-fast turnaround, and cost-efficient 
                          processes, all under a commitment to precision, innovation, and reliability.
                        </div>
                      </div>
                    </div>

                    <hr className="m-0 custom-hr" />

                    <div className="accordion-item border-0">
                      <h3 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          onClick={(e) => handleChangeImage(e, "card2")}
                        >
                          What types of dental restorations does Ace Digital Dental Laboratory specialize in?
                        </button>
                      </h3>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Ace focuses on CAD / CAM restorations, implant restorations and crowns & bridges, 
                          offering full-service digital design and fabrication for fixed prosthetics.
                        </div>
                      </div>
                    </div>

                    <hr className="m-0 custom-hr" />

                    <div className="accordion-item border-0">
                      <h3 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          onClick={(e) => handleChangeImage(e, "card3")}
                        >
                          Which digital dental technologies does Ace use for dental restorations?
                        </button>
                      </h3>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body ">
                          Ace leverages advanced CAD/CAM systems, 3D printing, and seamless digital 
                          impression workflows to design and mill restorations with micron-level accuracy.
                        </div>
                      </div>
                    </div>

                    <hr className="m-0 custom-hr" />

                    <div className="accordion-item border-0">
                      <h3 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                          onClick={(e) => handleChangeImage(e, "card4")}
                        >
                          What makes Ace a trusted partner for U.S. dentists?
                        </button>
                      </h3>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body ">
                          With ISO/FDA-certified processes, dedicated clinical advisors, 
                          a user-friendly online ordering portal, and consistently fast, reliable turnaround times, 
                          Ace ensures predictable, high-quality results that dentists can depend on.
                        </div>
                      </div>
                    </div>

                    <hr className="m-0 custom-hr" />

                    <div className="accordion-item border-0">
                      <h3 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                          onClick={(e) => handleChangeImage(e, "card5")}
                        >
                          What certifications or standards does Ace comply with?
                        </button>
                      </h3>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          All lab work is designed and finished in Europe according to ISO and FDA regulations, 
                          and materials are CE-marked to guarantee top-tier safety and performance.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6  ">
              <div className="card shadow-none m-auto border-0 d-flex justify-content-center align-items-center h-100 w-50 bg-transparent">
                {cardImage.length === 0 ? (
                  <>
                    {/* <img src="/images/f1.png" className="custom-acc-image timelineimg img-fluid" alt="Example Image"></img> */}
                    <Image
                      src="/images/f1111.webp"
                      alt="Example Image"
                      width={295}
                      // width={300}
                      // height={364}
                      height={393}
                      data-aos="fade-up"
                      data-aos-delay="10"
                      data-aos-duration="2000"
                      id="myExample"
                      className="aos-init aos-animate custom-acc-image timelineimg img-fluid"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={cardImage?.imgUrl}
                      alt="Example Image"
                      width={273}
                      height={364}
                      data-aos="fade-up"
                      data-aos-delay="10"
                      data-aos-duration="2000"
                      id="myExample"
                      className="aos-init aos-animate custom-acc-image timelineimg img-fluid"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="submitting_order space-section"
      >
        <Image
          src="/images/linevec.svg"
          alt="Example Image"
          width={300}
          height={200}
          className="line-vec"
        />
        <div className="container mt-lg-5 mt-md-5 text-center">
          <div className="hero-subheading">Streamlined Digital Workflow</div>
          <h2 className="heading1 text-center">
            {" "}
            <strong>Hassle-Free Order Submission with Ace Dental Lab</strong> <br />
            {/* <span className="subheadingTxt">Submitting your orders to ACE Digital Dental Laboratry is
              hassle-free.</span> */}
          </h2>
          <p className="subHeading1 text-center">
            Get started in seconds. Click the “Place Order” button to experience a seamless, professional, 
            and fully digital workflow for your dental restoration needs.
          </p>
          <div className="row g-4">
            <div className="col-12 col-lg-6 col-md-6 p-4 pb-0 pb-sm-4 text-start">
              <ul className="timeline list-unstyled">
                {faqData.map((step, index) => (
                  <li
                    key={index}
                    className="d-flex align-items-start position-relative mb-4"
                  >
                    {/* Numbered Icon */}
                    <div className="timeline-icon d-flex align-items-center justify-content-center">
                      <span>{step.number}</span>
                    </div>

                    {/* Timeline Content */}
                    <div className="timeline-content ms-3">
                      <h3 className="timeline-heading fw-bold">{step.title}</h3>
                      <p className="timeline-subheading">{step.description}</p>
                    </div>

                    {/* Timeline Line */}
                    {index !== 3 && <hr className="timeline-line" />}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-lg-6 col-md-6 d-none d-sm-block">
              <div className="card shadow-none border-0 d-flex justify-content-center align-items-center h-100 bg-transparent">
                <Image
                  src="/images/computer_mockup.webp"
                  alt="Example Image"
                  width={400}
                  height={550}
                  className=" custom-acc-image timelineimg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lets-walk-togeather" style={{ margin: "40px 0px 0px" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full background-video"
          id="player"
        >
          <source src="https://d1ytpjko2pk6h2.cloudfront.net/new-masterpiece.webm" type="video/webm" />
          <source src="https://d1ytpjko2pk6h2.cloudfront.netm/new-masterpiece.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-overlay"></div>
        <div className="container mt-5 text-center">
          <div className="gradientBG mb-2 mb-sm-4">Let's Work Together</div>
          <h2 className="heading1 mb-2 mb-sm-3 text-center text-white">
            {" "}
            <b>
              Reach Out Us for Custom Dental Lab Solutions
            </b>{" "}
          </h2>
          <h3 className="heading1 mb-2 mb-sm-3 text-center text-white">
              <strong>For Exceptional Patient Care</strong>
          </h3>
          <p className="subHeading1 text-center mb-0 mb-sm-4 px-4 text-white">
            {" "}
            Partner with us for precise, reliable dental lab solutions designed to meet your unique clinical needs and enhance patient outcomes.
          </p>
          <div className="simplebtn">
            <a href="/contact-us/">Get In Touch</a>
          </div>
        </div>
      </section>
      <Testimonial></Testimonial>
      <section
        className="ADDL-numbers space-section"
      // style={{ paddingBottom: "3.4rem", paddingTop: "3.4rem" }}
      >
        <div className="container text-center ">
          <div
            className="addl_numbers space-section"
          // style={{ paddingBottom: "3.4rem", paddingTop: "3.4rem" }}
          >
            <h2 className="heading2 text-center text-white">
              {" "}
              Excellence in Dental Lab Metrics{" "}
            </h2>
            <div className="row innere_adl_numbers g-4 ">
              {counters.map(({ suffix, noteAbove, noteBelow }, index) => (
                <div key={index} className="col-sm-12 col-md-12 col-lg-4">
                  <div
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="counter-card"
                  >
                    <div className="Abovetext text-white" data-aos="fade-up"
                      data-aos-duration="2000">{noteAbove}</div>{" "}
                    {/* Added noteAbove here */}
                    <div className="social-proof__value" data-aos="fade-up"
                      data-aos-duration="2000">
                      <div className="social-proof__count text-white">
                        {counts[index]}
                      </div>
                      <span className="suffixcounter text-white">{suffix}</span>
                    </div>
                    <div className="belowtext">{noteBelow}</div>{" "}
                    {/* Added noteBelow here */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="pricing-plans space-section"
      >
        <div className="container text-center position-relative">
          <h2 className="heading1 mb-4 text-center"> Our Most <span className="highlight-text1">Premium Product</span></h2>
          <div className="row g-4 ">
            <Link href="/product/digital-workflow/" className="text-decoration-none col-12 col-lg-4 col-md-6">
              <div className=" product-row position-relative">
                <Image
                  src="/images/E-max-hm.webp"
                  alt="Example Image"
                  width={306}
                  height={190}
                  className=""
                />
                <span className="product-row-label">E-max CAD</span>
              </div>
            </Link>
            <Link href="/product/crowns-bridges/" className="text-decoration-none col-12 col-lg-4 col-md-6">
              <div className="img-middil product-row position-relative">
                <Image
                  src="/images/crown-hm.webp"
                  alt="Example Image"
                  width={306}
                  height={190}
                  className=""
                />
                <span className="product-row-label">Crown & Bridges</span>
              </div>
            </Link>
            <Link href="/product/implants/" className="text-decoration-none col-12 col-lg-4 col-md-6">
              <div className="product-row">
                <Image
                  src="/images/implant-hm1.webp"
                  alt="Example Image"
                  width={306}
                  height={190}
                  className=""
                />
                <span className="product-row-label">Implant</span>
              </div>
            </Link>
          </div>
          <Image
            src="/images/dot.webp"
            alt="Example Image"
            width={300}
            height={450}
            className="pvector1"
          />
          <Image
            src="/images/dot.webp"
            alt="Example Image"
            width={300}
            height={450}
            className="pvector2"
          />
        </div>
      </section>
    </>
  );
};

export default Home1;
