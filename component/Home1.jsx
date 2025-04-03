import { useEffect, useState, React, useRef } from "react";
import Testimonial from "./Testimonial";
import Image from "next/image";
import Link from "next/link";

const Home1 = () => {
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
      title: "Incoming Orders",
      description:
        "Each incoming order is carefully inspected to guarantee it meets our high standards before moving into the construction phase.",
    },
    {
      number: "2",
      title: "Design and Construction",
      description:
        "Throughout the design and construction phases, our skilled technicians utilize top-quality materials and advanced equipment to create custom lab solutions designed to meet your unique needs.",
    },
    {
      number: "3",
      title: "Quality Control",
      description:
        "Quality is central to everything we do. You can trust us to deliver reliable and exceptional dental laboratory services.",
    },
    {
      number: "4",
      title: "Returns",
      description:
        "At ACE Advance Digital Lab, we understand the importance of on-time deliveries and easy returns. Count on us for all your dental lab work needs.",
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
    const step = finalCount / (duration / 50);

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
      setcardImage({ imgUrl: "/images/f1111.png" });
    } else if (cardName === "card2") {
      setcardImage({ imgUrl: "/images/f2.png" });
    } else if (cardName === "card3") {
      setcardImage({ imgUrl: "/images/f3.png" });
    } else if (cardName === "card4") {
      setcardImage({ imgUrl: "/images/f4.png" });
    } else {
      setcardImage({ imgUrl: "/images/f5.png" });
    }
  };

  return (
    <>
      <section
        className="why_ACE position-relative space-section"
      >
        <div className="container">
          <h2 className="heading1 mt-1  text-center">
            Why <b className="highlight-text1">ACE</b> Digital Dental Laboratry
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
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                          onClick={(e) => handleChangeImage(e, "card1")}
                        >
                          ADDL’s Fast and Reliable Turnaround Times: What Sets
                          Us Apart
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body ">
                          ADDL (Advanced Dental Design Laboratories) is
                          dedicated to fast, reliable turnaround times without
                          compromising quality. Using advanced technology and
                          efficient workflows, we deliver products quickly.. Our
                          skilled team ensures high-quality craftsmanship while
                          meeting tight deadlines, making us a trusted partner
                          for dental professionals.
                        </div>
                      </div>
                    </div>

                    <hr className="m-0 custom-hr" />

                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                          onClick={(e) => handleChangeImage(e, "card2")}
                        >
                          ADDL is the Future
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Switching to a digital lab like ADDL offers faster
                          turnaround, higher accuracy, and cost savings compared
                          to traditional labs. Digital technologies like CAD/CAM
                          and 3D printing reduce errors, improve precision, and
                          shorten production times, leading to better patient
                          satisfaction and fewer adjustments. Digital labs also
                          lower costs by minimizing material waste and labor,
                          making them more efficient for dental practices and
                          patients alike.
                        </div>
                      </div>
                    </div>

                    <hr className="m-0 custom-hr" />

                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                          onClick={(e) => handleChangeImage(e, "card3")}
                        >
                          Sustainability and Eco-Friendliness at ADDL
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body ">
                          ADDL is committed to sustainability by using
                          sustainable materials and reducing waste through
                          digital technologies like CAD/CAM and 3D printing.
                          These methods minimize material waste and improve
                          efficiency, while we also prioritize biodegradable and
                          recyclable materials. ADDL’s eco-friendly practices
                          reflect our dedication to a greener future for the
                          dental industry.
                        </div>
                      </div>
                    </div>

                    <hr className="m-0 custom-hr" />

                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                          onClick={(e) => handleChangeImage(e, "card4")}
                        >
                          ADDL: Precision & Excellence in Dental Lab Solutions
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body ">
                          ADDL is committed to delivering dental lab work of the
                          highest standards. Utilizing advanced digital
                          technology and expert craftsmanship, we ensure that
                          each product is precisely engineered and manufactured
                          to meet the strictest quality requirements. Whether
                          crowns, bridges, dentures, or other restorations, our
                          focus on accuracy and consistency guarantees reliable,
                          top-quality results trusted by dental professionals.
                        </div>
                      </div>
                    </div>

                    <hr className="m-0 custom-hr" />

                    <div className="accordion-item border-0">
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                          onClick={(e) => handleChangeImage(e, "card5")}
                        >
                          Easy online ordering and seamless communication with
                          your lab.
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">
                          Addl offers an effortless online ordering system that
                          ensures a smooth and efficient process for all your
                          dental needs. With our user-friendly website, you can
                          place orders quickly and easily, saving your time and
                          effort. Additionally, our seamless communication
                          system allows you to stay connected with our lab at
                          all times, ensuring that you receive timely updates,
                          support, and high-quality service. Whether you're a
                          dental professional or a patient, Addl makes your
                          experience simple and hassle-free.
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
                      src="/images/f1111.png"
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
          <div className="hero-subheading">Truly easy sendings</div>
          <h2 className="heading1 text-center">
            {" "}
            <b>Free up your clinical time</b> <br />
            <span className="subheadingTxt">Submitting your orders to ACE Digital Dental Laboratry is
            hassle-free.</span>
          </h2>
          <p className="subHeading1 text-center">
            Simply press on the “Place an Order” button located at the top of
            right of our website, and fill in the necessary fields. We offer a
            complementary courier collection service for your convenience.
          </p>
          <div className="row g-4">
            <div className="col-12 col-lg-6 col-md-6 p-4 text-start">
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
                      <p className="timeline-heading fw-bold">{step.title}</p>
                      <p className="timeline-subheading">{step.description}</p>
                    </div>

                    {/* Timeline Line */}
                    {index !== 3 && <hr className="timeline-line" />}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-12 col-lg-6 col-md-6 ">
              <div className="card shadow-none border-0 d-flex justify-content-center align-items-center h-100 bg-transparent">
                <Image
                  src="/images/computer_mockup.png"
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
      <section className="lets-walk-togeather" style={{margin:"40px 0px 0px"}}>
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
        <div className="container mt-4 text-center">
          <div className="gradientBG mb-4">Let's work together</div>
          <h2 className="heading1 mb-3  text-center text-white">
            {" "}
            <b>
              making every effort <br />a masterpiece of happiness
            </b>{" "}
          </h2>
          <p className="subHeading1 text-center mb-4 px-4 text-white">
            {" "}
            Your passion turns care into comfort, making every effort a work of
            heart.. Choosing a dental lab with exceptional artistry enhances
            patient satisfaction even further.
          </p>
          <div className="simplebtn">
          <a href="/contactUs">Start New Project</a>
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
              ADDL in numbers{" "}
            </h2>
            <div className="row innere_adl_numbers g-4 ">
              {counters.map(({ suffix, noteAbove, noteBelow }, index) => (
                <div key={index} className="col-sm-12 col-md-12 col-lg-4">
                  <div
                    ref={(el) => (cardRefs.current[index] = el)}
                    className="counter-card"
                  >
                    <div className="Abovetext text-white">{noteAbove}</div>{" "}
                    {/* Added noteAbove here */}
                    <div className="social-proof__value">
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
          <h2 className="heading1 mb-4 text-center"> Our Most Premium Product</h2>
          <div className="row g-4 ">
            <Link href="/product/digital-workflow/" className="text-decoration-none col-12 col-lg-4 col-md-6">
              <div className=" product-row position-relative">
                <Image
                  src="/images/E-max-hm.png"
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
                src="/images/crown-hm.png"
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
                src="/images/implant-hm.png"
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
            src="/images/dot.png"
            alt="Example Image"
            width={300}
            height={450}
            className="pvector1"
          />
          <Image
            src="/images/dot.png"
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
