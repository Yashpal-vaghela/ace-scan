import { useEffect, React, useRef } from "react";
// import "../public/css/about.css";
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';

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
  const aboutSchema ={
     "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Us | Ace Digital Dental Laboratory",
      "url": "https://acedigitaldentallaboratory.com/about-us/",
      "description": "Discover the story behind ADDL. With a commitment to innovation, precision, and quality, we partner with dental professionals to deliver exceptional digital dental restorations.."
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
          "name": "About Us",
          "item": "https://acedigitaldentallaboratory.com/about-us/"
        }
      ]
  }  
  return (
    <>
      <Head>
        <title>About Us | Ace Digital Dental Laboratory</title>
        <meta name="description" content="Discover the story behind ADDL. With a commitment to innovation, precision, and quality, we partner with dental professionals to deliver exceptional digital dental restorations."/>
        <link rel="canonical" href="https://acedigitaldentallaboratory.com/about-us/" /> 
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="About Us | Ace Digital Dental Laboratory" />
        <meta property="og:description" content="Discover the story behind ADDL. With a commitment to innovation, precision, and quality, we partner with dental professionals to deliver exceptional digital dental restorations."/>
        <meta property="og:url" content="https://acedigitaldentallaboratory.com/about-us/" />
        <meta property="og:site_name" content="Ace Digital Dental Lab" />
        <meta name="og:image" content="/images/feature-ADDL.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumsSchema) }}
        />
      </Head>
      <section className="p-0 parallax overlap-height">
        <div className="lqd-vbg-wrap">
          <div className="lqd-vbg-inner">
            <span className="lqd-vbg-loader"></span>
            <div
              className="inline-YTPlayer"
              style={{ position: "relative", maxWidth: "100%" }}
            >
              <div
                id="wrapper_YTP_1742270005228"
                className="mbYTP_wrapper"
                style={{
                  position: "absolute",
                  zIndex: 0,
                  minWidth: "100%",
                  minHeight: "100%",
                  left: "0px",
                  top: "0px",
                  overflow: "hidden",
                  opacity: 1,
                  backgroundImage: "none",
                  transitionDuration: "1000ms",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full background-video background-video1"
                  id="player"
                >
                  <source src="https://d1ytpjko2pk6h2.cloudfront.net/DMLS+Printing.webm" type="video/webm" />
                  <source src="https://d1ytpjko2pk6h2.cloudfront.net/DMLS+Printing.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div
                  className="YTPOverlay"
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-full bg-gradient-fast-blue-purple"></div>
        <div className="container position-relative">
          <div
            className="row full-screen md-landscape-h-600px"
            style={{ height: "600px" }}
          >
            <div className="col-12 col-xl-5 col-lg-6 col-md-7 col-sm-10 d-flex flex-column justify-content-center">
            <h1 className="video-title">
                {/* <span className="text-gradient-light-purple-light-orange font-weight-900 d-inline-block"> */}
                About Us
                {/* </span> */}
              </h1>
              <div className="alt-font text-large font-weight-500 text-uppercase letter-spacing-2px d-flex">
                <span className="flex-shrink-0 w-40px h-1px bg-white opacity-6 align-self-center margin-25px-right"></span>
                <span className="flex-grow-1 video-desc opacity-6">
                  What we are? know more about us.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trusted-dental-lab space-section">
        <div className="container">
          <div className="row about-container">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="images-home-section">
                <div className="image-top text-center">
                  <Image
                    src="/images/about-ace.webp"
                    alt="about"
                    width={310}
                    height={200}
                    className="img-fluid"
                  />
                </div>
                <div className="image-bottom">
                  <Image
                    src="/images/dental-ace.webp"
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
                <h2 className="main-heading-with-double-color mt-0 mb-2 heading1" style={{ width: "69%" }}>
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
              <Link href="/contact-us/">
                <button className="btn btn-getInTouch">Get In Touch</button>
              </Link>

            </div>
          </div>
        </div>
      </section>
      <section className="about-map">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-12">
              <div className="about-images">
                <Image
                  src="/images/map.webp"
                  alt="about"
                  width={550}
                  height={400}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-5 col-12 mt-1 mt-sm-0">
              <div className="about-text">
                <h2 className="main-heading-with-double-color heading1 mb-2">
                  Delivering Excellence {" "}
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
            </div>
          </div>
        </div>
      </section>

      <section className="working-with-the-best">
        <div className="container about-section">
          <div className="row">
            <div className="col-12 col-lg-6 about-left">
              <div className="about-text w-40 ps-0" >
                <h2 class="main-heading-with-double-color mt-0 mb-0 heading1">
                  Working Only With{" "}
                  <span className="highlight-text1">The Best</span>
                </h2>
              </div>
              <Image
                src="/images/vector.webp"
                alt="Dental Vector"
                width={300}
                height={200}
                className="about-vector-image"
              />
              <div className="about-text about-content0">
                <p>Our laboratories utilize a diverse range of modern dental
                  materials, including Zirconia, Titanium, and high-quality
                  non-precious metal alloys, ensuring optimal strength,
                  aesthetics, and biocompatibility. Whether crafting single
                  crowns, full-arch rehabilitations, or complex implant
                  restorations, we deliver precision-engineered solutions with a
                  perfect fit and exceptional quality.</p>
              </div>
              {/* <div className="about-content0">
                Our laboratories utilize a diverse range of modern dental
                materials, including Zirconia, Titanium, and high-quality
                non-precious metal alloys, ensuring optimal strength,
                aesthetics, and biocompatibility. Whether crafting single
                crowns, full-arch rehabilitations, or complex implant
                restorations, we deliver precision-engineered solutions with a
                perfect fit and exceptional quality.
              </div> */}
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column">
              <div className="about-content col-12 order-2 order-sm-2 order-lg-0">
                <p style={{ marginTop: '10px' }}>
                  At ADDL, we collaborate with a team of certified, highly
                  skilled, and experienced dental technicians who have undergone
                  extensive training in the design and fabrication of all types
                  of dental restorations.Our commitment to precision and
                  excellence is reflected in our fully digital workflow, which
                  integrates cutting-edge CAD/CAM technology, advanced milling,
                  and state-of-the-art sintering processes.
                </p>
              </div>

              <div className="about-video col-12 order-0 order-lg-2 order-sm-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full background-video"
                  id="player"
                >
                  <source src="https://d1ytpjko2pk6h2.cloudfront.net/Fmr.mp4" type="video/webm" />
                  <source src="https://d1ytpjko2pk6h2.cloudfront.net/Fmr.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="boss-work">
        <Image
          src="/images/bosswithtxt.webp"
          alt="Lab Technician Working"
          width={800}
          height={600}
          className="img-fluid bossimagestxt"
        />
        <div className="container">
          <div className="about-section d-flex align-items-center">
            <div class="row" style={{ margin: "0px" }}>
              <div class="col-lg-7  col-12  card-wop  position-relative d-flex justify-content-center text-aligns-center pt-2 pb-3">
                <Image
                  src="/images/Boss.JPG"
                  alt="Lab Technician Working"
                  width={800}
                  height={600}
                  className="img-fluid bossimage"
                />
                <div className=" top-0 start-0 w-100 h-100 overlays-img"></div>
              </div>

              <div class="col-lg-5  col-12 card-wop right-card">
                <div className="about-text">
                  <h2 className="main-heading-with-double-color heading1 mb-0 bosstxt" style={{ width: "85%" }}>
                    <span className="highlight-text1">
                      Uncompromising Precision{" "}
                    </span>
                    and <span className="highlight-text2">Excellence </span>in
                    Dental Restorations
                  </h2>
                </div>
                {/* <h2 className="about-text">Uncompromising Precision and Excellence in Dental Restorations</h2> */}
                <div class="about-text">
                  <p className="about-content my-5" style={{ width: "85%" }}>
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
        </div>
      </section>



      <section className="standard-work pt-2 pt-sm-5">
        <Image src="/images/linevec.svg" className="d-none d-md-block ab-vector1 img-fluid" width={1772} height={827}></Image>
        <div className="container text-center">

          <h2 className="main-heading-with-double-color heading1 mb-0  text-start ps-2 text-sm-center w-100" style={{ marginTop: '30px' }}>
            Committed to the Highest{" "}
            <span className="highlight-text1">
              Standards of Excellence
            </span>
          </h2>
          <div className="row align-items-stretch position-relative">
            <div className="col-lg-6  d-flex flex-column justify-content-center h-90 order-md-0 order-0 pb-3">
              <div className="about-text" style={{ width: "100%" }}>
                {/* <div className="about-text p-0">
                  <p> At ADDL, we uphold the highest industry standards by offering
                  a comprehensive range of dental lab solutions, from single
                  crowns to complex restorations. Crafted in FDA-verified and
                  ISO-certified laboratories, our products ensure superior
                  precision, durability, and aesthetics while adhering to the
                  strictest global regulations. Each restoration comes with a
                  Quality Certificate and Guarantee, providing confidence and
                  peace of mind.</p>
                </div> */}
                <p className="about-text-p mb-0" >
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
            <div className="col-lg-6  align-items-stretch order-md-1 order-1 mb-4">
              <Image
                src="/images/abBefore.webp"
                alt="New Shared Image"
                width={550}
                height={600}
                className="img-fluid w-95 h-95 object-fit-cover custom-image-radius"
              />
            </div>
            <div className="col-lg-6 pe-sm-0 align-items-stretch order-lg-2 order-md-2 order-0 mb-lg-5 mb-md-3 mb-2 mt-4">
              <Image
                src="/images/abAfter.webp"
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
