import { useEffect, useState, React, useRef } from "react";
import "../public/css/support.css";
import Image from "next/image";

const counters = [
    { finalCount: 100, duration: 1000, suffix: "%", noteAbove: "", noteBelow: "Customer Satisfaction" },
    { finalCount: 1, duration: 1000, suffix: "%", noteAbove: "less Than", noteBelow: "Remake" },
    { finalCount: 100, duration: 1000, suffix: "%", noteAbove: "", noteBelow: "Digital Workflow" }
];

const support = () => {

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

    const [counts, setCounts] = useState(counters.map(() => 0));
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) startCounter(index);
            });
        }, { threshold: 0.5 });

        cardRefs.current.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    const startCounter = (index) => {
        let start = 0, { finalCount, duration } = counters[index];
        const step = finalCount / (duration / 50);

        const interval = setInterval(() => {
            start += step;
            setCounts(prev => prev.map((c, i) => (i === index ? Math.min(Math.round(start), finalCount) : c)));
            if (start >= finalCount) clearInterval(interval);
        }, 50);
    };

    return (
        <div>
            <section className="why_ACE py-4 " style={{ marginBottom: "3.4rem", marginTop: "80px" }}>
                <div className="container mt-4 ">

                    <h2 className="heading1 text-center">Why ACE Digital Dental Laboratry</h2>

                    <div className="row g-4">

                        <div className="col-12 col-lg-6 col-md-6 p-4">
                            <div className="card shadow-sm border-0 shadow-none">
                                <div className="accordion user-select-none" id="faqAccordion">

                                    <div class="accordion text-left" id="faqAccordion">
                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="headingOne">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Innovative materials and technology.
                                                    <i class="far fa-chevron-down ms-auto" style={{ color: "#7e7c78" }}></i>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                <div class="accordion-body ">
                                                    At ACE Advance Digital Lab, our goal is to remain at the forefront of dental technology.We constantly invest in the latest digital innovations, CAD/CAM design software, the latest milling and 3D printing machines and cutting-edge modern materials. This enables us to create restorations with exceptional precision and aesthetics.
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="m-0 custom-hr" />

                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="headingTwo">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Exceptional quality at advantageous prices.
                                                    <i class="far fa-chevron-down ms-auto" style={{ color: "#7e7c78" }}></i>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                <div class="accordion-body">
                                                    ACE Advance Digital Lab offers reliable and consistent service coupled with great value for money, thanks to its network of affiliated, long-established European dental labs.
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="m-0 custom-hr" />

                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="headingThree">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Dental lab work of the highest standards.
                                                    <i class="far fa-chevron-down ms-auto" style={{ color: "#7e7c78" }}></i>
                                                </button>
                                            </h2>
                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                <div class="accordion-body ">
                                                    To ensure that our dental restorations meet the latest EU standards, we partner only with labs which are certified under ISO 9001:2015. Our team of skilled technicians, with many years of experience, use their artistry to create lab work of exceptional quality. At our facilities, we exclusively use certified, high-quality materials from reputable manufacturers. To ensure a truly passive fit and high accuracy, all of our work is thoroughly inspected under a microscope.
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="m-0 custom-hr" />

                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="headingFour">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                    5 years guarantee on all work.
                                                    <i class="far fa-chevron-down ms-auto" style={{ color: "#7e7c78" }}></i>
                                                </button>
                                            </h2>
                                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                                <div class="accordion-body ">
                                                    We provide a full 5-year guarantee and a material and quality certificate with all of our work. This means that in the unlikely event that anything goes wrong, we will take full responsibility.
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="m-0 custom-hr" />

                                        <div class="accordion-item border-0">
                                            <h2 class="accordion-header" id="headingFive">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                                    Free professional clinical advice any time you may need it.
                                                    <i class="far fa-chevron-down ms-auto" style={{ color: "#7e7c78" }}></i>
                                                </button>
                                            </h2>
                                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                                <div class="accordion-body ">
                                                    We understand that some of your cases may present challenges in terms of planning and executing. To assist you with this, ACE Advance Digital Lab has assembled a board of highly experienced Clinical Dental Advisors with extensive expertise in both clinical and technological aspects of dentistry. They are always available to provide free, friendly and helpful guidance whenever you need it.
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-6 col-md-6 ">
                            <div class="card shadow-none border-0 d-flex justify-content-center align-items-center h-100">
                                <Image
                                    src="/images/whyi1.png"
                                    alt="Example Image"
                                    width={300}
                                    height={200}
                                    className=" custom-acc-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="submitting_order  " style={{ paddingBottom: "3.4rem", paddingTop: "3.4rem", }}>
                <div className="container mt-4 text-center">
                    <div className="gradientBG">
                        Truly easy sendings
                    </div>
                    <h2 className="heading1 text-center"> <b>Free up your clinical time</b> <br />
                        Submitting your orders to ACE Digital Dental Laboratry is hassle-free.</h2>
                    <p className="subHeading1 text-center">Simply press on the “Place an Order” button located at the top of right of our website, and fill in the necessary fields. We offer a complementary courier collection service for your convenience.</p>
                    <div className="row g-4">
                        <div className="col-12 col-lg-6 col-md-6 p-4 text-start">
                            <ul className="timeline list-unstyled">
                                {[
                                    {
                                        number: "1",
                                        title: "Incoming Orders",
                                        description:
                                            "We ensure that all incoming orders are carefully inspected to ensure that they meet our high standards before they enter the construction phase.",
                                    },
                                    {
                                        number: "2",
                                        title: "Design and Construction",
                                        description:
                                            "Throughout the design and construction phases, our skilled technicians use only the finest materials and cutting-edge equipment to create custom lab work that is tailored to your specific requirements.",
                                    },
                                    {
                                        number: "3",
                                        title: "Quality Control",
                                        description:
                                            "Quality is at the heart of everything we do. Rest assured that you can rely on us to provide you with dependable and superior dental laboratory services.",
                                    },
                                    {
                                        number: "4",
                                        title: "Returns",
                                        description:
                                            "At ACE Advance Digital Lab, we recognize the importance of timely deliveries and hassle-free returns. Rely on us for all your dental lab work requirements.",
                                    },
                                ].map((step, index) => (
                                    <li key={index} className="d-flex align-items-start position-relative mb-4">
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

                            <div class="card shadow-none border-0 d-flex justify-content-center align-items-center h-100 bg-transparent">
                                <Image
                                    src="/images/timeline1.png"
                                    alt="Example Image"
                                    width={400}
                                    height={550}
                                    className=" custom-acc-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lets-walk-togeather  " >
                <video autoPlay loop muted playsInline className="h-full w-full background-video" id="player">
                    <source src="/images/masterpiece.webm" type="video/webm" />
                    <source src="/images/masterpiece.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="video-overlay"></div>
                <div className="container mt-4 text-center">
                    <div className="gradientBG mb-4">
                        Let's work together
                    </div>
                    <h2 className="heading2 text-center text-white"> <b>making every effort <br />a masterpiece of happiness</b> </h2>
                    <p className="subHeading1 text-center mb-4 px-4 text-white"> Your passion turns care into comfort, making every effort a work of heart.. Choosing a dental lab with exceptional artistry enhances patient satisfaction even further.</p>
                    <div className="simplebtn">Start New Project</div>
                </div>
            </section>

            <section className="testmonial" style={{ paddingBottom: "3.4rem", paddingTop: "3.4rem", }}>
                <div className="container mt-4 mb-4 text-center">
                    <div className="gradientBG">
                        Testimoial
                    </div>
                    <h2 className="heading1 text-center">Smiling Words from Satisfied Customers</h2>
                    <div className="col-12 col-md-6 col-lg-4  testimonial_card" style={{ marginTop: "2.4rem" }}>
                        <Image
                            src="/images/quotegrey.svg"
                            alt="Example Image"
                            width={70}
                            height={70}
                            className="custom_quote"
                        />
                        <h6 className="testnomial_text">“One of the best dental labs...!! The advanced lab provides excellent aesthetic, well contoured, precise fitting for all work whether its metal/pfm/all ceramic ya implant work!!“ </h6>
                        <hr className="custom_hr" />
                        <p className="drname"> Dr. Hardik Prajapati</p>
                        <p className="star-rating">★ ★ ★ ★ ★</p>

                    </div>

                </div>
            </section>

            <section className="ADDL-numbers " style={{ paddingBottom: "3.4rem", paddingTop: "3.4rem", }}>
                <div className="container text-center addl_numbers" style={{ paddingBottom: "3.4rem", paddingTop: "3.4rem", }}>
                    <h2 className="heading2 text-center text-white"> ADDL in numbers </h2>
                    <div className="row innere_adl_numbers g-4 ">

                        {counters.map(({ suffix, noteAbove, noteBelow }, index) => (
                            <div key={index} className="col-sm-12 col-md-12 col-lg-4">
                                <div ref={(el) => (cardRefs.current[index] = el)} className="counter-card">
                                    <div className="Abovetext">{noteAbove}</div> {/* Added noteAbove here */}
                                    <div className="social-proof__value">
                                        <div className="social-proof__count">{counts[index]}</div>
                                        <span className="suffixcounter">{suffix}</span>
                                    </div>
                                    <div className="belowtext">{noteBelow}</div> {/* Added noteBelow here */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    )
}

export default support;