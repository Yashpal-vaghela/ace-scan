import { useEffect, useState, React, useRef } from "react";
import "../public/css/about.css";
import Image from "next/image";

const About = () => {
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
  return (
    <>
      <section className="trusted-dental-lab">
        <div className="container">
          <div className="row about-container">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="images-home-section">
                <div className="image-top text-center">
                  <Image
                    src="/images/about-ace.jpg"
                    alt="about"
                    width={310}
                    height={200}
                    className="img-fluid"
                  />
                </div>
                <div className="image-bottom">
                  <Image
                    src="/images/dental-ace.jpg"
                    alt="about1"
                    width={300}
                    height={200}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="about-text">
                <h2 className="main-heading-with-double-color mt-0" style={{width:"69%"}}>
                  Your Trusted{" "}
                  <span className="highlight-text1"> Dental Lab </span> for All
                  Your Clinical Needs
                </h2>
                <p >
                  ADDL collaborates with a network of highly reputable,
                  certified laboratories across USA to deliver premium-quality
                  dental restorations. Our commitment to precision, innovation,
                  and excellence ensures that your practice receives superior
                  dental lab solutions tailored to meet your clinical
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="certification">
        <div className="certification-section">
          <div className="container d-flex">
            <div className="certification-overlay">
              <div className="certification-content text-start col-12">
                Our partnership exclusively involves FDA-verified dental labs
                that offer exceptional quality and value. This ensures that you
                receive restorations that meet the latest industry standards
                while maintaining superior precision and reliability.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-map">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-7">
              <div className="about-images">
                <Image
                  src="/images/USA-map.png"
                  alt="about"
                  width={550}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-5">
              <div className="about-text">
                <h2 className="main-heading-with-double-color">
                  Delivering Excellence In{" "}
                  <span className="highlight-text1"> Across The USA </span>
                </h2>
                {/* <h2>Premier Dental Solutions, Delivered Across the USA</h2> */}
                <p>
                  At ADDL, we provide dental professionals across the USA with
                  premium-quality products, ensuring precision, reliability, and
                  superior patient outcomes. Our efficient distribution network
                  guarantees timely delivery nationwide, while our dedicated
                  support team ensures a seamless experience from order to
                  delivery.
                </p>
              </div>
            </div>
            {/* <div className="about-content d-flex justify-content-center align-items-center">
              <div className="about-images">
                <Image
                  src="/images/USA-map.png"
                  alt="about"
                  width={550}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="about-text">
                <h2 className="main-heading-with-double-color">
                  Delivering Excellence In{" "}
                  <span className="highlight-text1"> Across The USA </span>
                </h2>
                <p>
                  At ADDL, we provide dental professionals across the USA with
                  premium-quality products, ensuring precision, reliability, and
                  superior patient outcomes. Our efficient distribution network
                  guarantees timely delivery nationwide, while our dedicated
                  support team ensures a seamless experience from order to
                  delivery.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="working-with-the-best">
        <div className="container about-section py-5">
          <div className="row">
            <div className="col-12 col-lg-6 about-left">
              <div className="about-text w-40 ps-0" >
                <h2 class="main-heading-with-double-color mt-0">
                  Working Only With{" "}
                  <span className="highlight-text1">The Best</span>
                </h2>
              </div>
              <Image
                src="/images/vector.png"
                alt="Dental Vector"
                width={300}
                height={200}
                className="about-vector-image"
              />
              <div className="about-content0">
                Our laboratories utilize a diverse range of modern dental
                materials, including Zirconia, Titanium, and high-quality
                non-precious metal alloys, ensuring optimal strength,
                aesthetics, and biocompatibility. Whether crafting single
                crowns, full-arch rehabilitations, or complex implant
                restorations, we deliver precision-engineered solutions with a
                perfect fit and exceptional quality.
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="about-content">
                <p >
                  At ADDL, we collaborate with a team of certified, highly
                  skilled, and experienced dental technicians who have undergone
                  extensive training in the design and fabrication of all types
                  of dental restorations.Our commitment to precision and
                  excellence is reflected in our fully digital workflow, which
                  integrates cutting-edge CAD/CAM technology, advanced milling,
                  and state-of-the-art sintering processes.
                </p>
              </div>

              <div className="about-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full background-video"
                  id="player"
                >
                  <source src="/videos/masterpiece.webm" type="video/webm" />
                  <source src="/videos/fmr.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="boss-work">
        <div className="container">
          <div className="about-section d-flex align-items-center">
            <div class="row" style={{ margin: "0px" }}>
              <div class="col-lg-7  col-12  card-wop text-end position-relative">
                <Image
                  src="/images/a-boos.jpg"
                  alt="Lab Technician Working"
                  width={800}
                  height={600}
                  className="img-fluid"
                />
                <div className=" top-0 start-0 w-100 h-100 overlays-img"></div>
              </div>

              <div class="col-lg-5  col-12 card-wop right-card">
                <div className="about-text">
                  <h2 className="main-heading-with-double-color" style={{width:"85%"}}>
                    <span className="highlight-text1">
                      Uncompromising Precision{" "}
                    </span>
                    and <span className="highlight-text2">Excellence </span>in
                    Dental Restorations
                  </h2>
                </div>
                {/* <h2 className="about-text">Uncompromising Precision and Excellence in Dental Restorations</h2> */}
                <p className="about-content my-5" style={{width:"85%"}}>
                  At ADDL, we blend precision, craftsmanship, and premium
                  materials to create restorations with exceptional aesthetics
                  and a perfect fit. Our expert clinicians conduct rigorous
                  evaluations and quality checks across partnered labs, ensuring
                  superior quality and reliability. This dedication to
                  excellence guarantees restorations that meet the highest
                  clinical and aesthetic standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="standard-work">
        <div className="container ">
          <div className="row align-items-stretch">
            <div className="col-lg-6  d-flex flex-column justify-content-center h-90 order-md-0 order-0">
              <div className="about-text" style={{width:"85%"}}>
                <h2 className="main-heading-with-double-color">
                  Committed to the Highest{" "}
                  <span className="highlight-text1">
                    Standards of Excellence
                  </span>
                </h2>
                <p className="mb-4">
                  At ADDL, we uphold the highest industry standards by offering
                  a comprehensive range of dental lab solutions, from single
                  crowns to complex restorations. Crafted in FDA-verified and
                  ISO-certified laboratories, our products ensure superior
                  precision, durability, and aesthetics while adhering to the
                  strictest global regulations. Each restoration comes with a
                  Quality Certificate and Guarantee, providing confidence and
                  peace of mind.
                </p>
              </div>
            </div>
            <div className="col-lg-6  align-items-stretch order-md-1 order-1">
              <Image
                src="/images/E1.jpg"
                alt="New Shared Image"
                width={550}
                height={600}
                className="img-fluid w-95 h-95 object-fit-cover custom-image-radius"
              />
            </div>
            <div className="col-lg-6 pe-0 align-items-stretch order-lg-2 order-3 mb-5">
              <Image
                src="/images/exellence.jpg"
                alt="New Shared Image"
                width={550}
                height={600}
                className="img-fluid w-95 h-95 object-fit-cover custom-image-radius-left"
              />
            </div>
            <div className="col-lg-6  d-flex flex-column justify-content-center h-90 order-lg-3 order-md-2 order-2">
              <div className="about-text">
                <p>
                  Beyond our commitment to exceptional craftsmanship, we
                  prioritize personalized customer service and transparent
                  communication. Our dedicated team works closely with dental
                  professionals to ensure seamless collaboration, accurate case
                  planning, and on-time delivery. By combining advanced
                  technology with meticulous attention to detail, we strive to
                  enhance patient outcomes, optimize practice efficiency, and
                  build long-term partnerships based on trust and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
