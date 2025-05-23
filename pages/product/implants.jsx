import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";

const Implants = () => {
  const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Premium Dental Implants | Ace Digital Dental Laboratory",
        "url": "https://acedigitaldentallaboratory.com/implants/",
        "description": "Discover high-quality, precision-crafted dental implants made by Ace Digital Dental Laboratory. Engineered for durability, comfort, and natural esthetics.",
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
          "name": "Implants",
          "item": "https://acedigitaldentallaboratory.com/implants/"
        }
      ]
  }
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

        videoRefP.current
          .play()
          .catch((error) => console.log("Autoplay blocked:", error));

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
          step.style.backgroundColor = "#00478a";

          // Show Title and Subtitle
          if (title) title.style.opacity = "1";
          if (subtitle) subtitle.style.opacity = "1";
        });
      });
    }
  }, []);

  return (  
    <>
      <Head>
        <title>Premium Dental Implants | Ace Digital Dental Laboratory</title>
        <meta name="description" content="Discover high-quality, precision-crafted dental implants made by Ace Digital Dental Laboratory. Engineered for durability, comfort, and natural esthetics."/>
        <link rel="canonical" href="https://acedigitaldentallaboratory.com/implants/" /> 
        <meta property="og:locale" content="en_US"/>  
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Premium Dental Implants | Ace Digital Dental Laboratory" />
        <meta name="og:description" content="Discover high-quality, precision-crafted dental implants made by Ace Digital Dental Laboratory. Engineered for durability, comfort, and natural esthetics."/>
        <meta property="og:url" content="https://acedigitaldentallaboratory.com/implants/" />
        <meta property="og:site_name" content="Ace Digital Dental Lab" />
        <meta name="og:image" content="/images/feature-ADDL.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className="bradcrumb-product" style={{ marginTop: "80px" }}>
        <div className="container h-100">
          <div className=" d-flex justify-content-end align-items-start flex-column inner-bread">
            <h1 className="breadcrumbTitle">Implants</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb text-sm breadcrumbNav">
                <li class="breadcrumb-item active">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Products
                </li>
                <li class="breadcrumb-item ">Implants</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="DW-home">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-12 col-lg-6 col-md-6 order-1 order-lg-0 order-md-0">
              <div className="product-text p-3">
                <h2 className="double-heading">
                  We Weave <span className="highlight-text">Precision</span> and
                  Craftsmanship into Perfect{" "}
                  <span className="highlight-text">Implant Restorations.</span>
                </h2>
                <p>
                  We combine skilled craftsmanship with digital artistry to
                  create dental restorations that are not only functional but
                  also natural in appearance and feel, ensuring a seamless blend
                  with your smile. For crowns and bridges, we use advanced
                  digital tools and premium materials to craft durable,
                  aesthetically pleasing solutions. These restorations restore
                  both form and function, providing patients with a beautiful,
                  comfortable smile that lasts for years.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 order-0 order-lg-1 order-md-1 d-flex justify-content-center align-items-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                id="player"
                className="w-100 h-auto"
                style={{
                  maxWidth: "100%",
                  maxHeight: "400px",
                  borderRadius: "10px",
                }}
              >
                <source
                  src="https://d1ytpjko2pk6h2.cloudfront.net/Implant.mp4"
                  type="video/mp4"
                />
                <source src="https://d1ytpjko2pk6h2.cloudfront.net/Implant.webm" />
                Your browser does not support the video tag.
              </video>
              {/* <div className="video-section">
                                <video autoPlay loop muted playsInline id="player" className="video-crop-cad">
                                    <source src="https://d1ytpjko2pk6h2.cloudfront.net/Implant.mp4" type="video/mp4" />
                                    <source src="https://d1ytpjko2pk6h2.cloudfront.net/Implant.webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="product-before-after">
        <div className="container">
          <div className="row for-rlative">
            {/* <div className="product-before-after-heading">
                            <h2 className="heading_outer color-white">Renew Your Teeth, Renew Your Confidence.</h2>
                            <h3 className="heading_outer color-white">Transforming Lives with the Benefits of Dental Implants.</h3>
                        </div> */}
            <div className="col-12 col-lg-6 ">
              <div className="product-before-after-images ">
                <Image
                  src="/images/imgallery.webp"
                  alt="about"
                  width={550}
                  height={400}
                  className="img-fluid round-images"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6  d-flex flex-column align-items-center justify-content-center text-center">
              <div className="product-before-after-content  d-flex flex-column  justify-content-center ">
                <div className="product-before-after-heading1">
                  <p className="before-after-contains subhead ">
                    Renew Your Teeth, Renew Your Confidence
                  </p>
                  <h2 className="before-after-contains mb-lg-5 mb-2">
                    Transforming Lives with the Benefits of Dental Implants
                  </h2>
                </div>
                We prioritize your comfort and satisfaction, offering tailored
                solutions that meet your unique needs. With our use of the
                latest technology and premium materials, we provide restorations
                that look and feel natural, ensuring a perfect fit and
                long-lasting results. Our experienced team is dedicated to
                guiding you through every step of the process, helping you enjoy
                the full benefits of dental implants—restored functionality, a
                beautiful smile, and renewed confidence.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="implant-card-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="implant-card imcards">
                <Image
                  src="/images/card-bg.webp"
                  className="card-bg"
                  alt="card-bg"
                  width={449}
                  height={599}
                ></Image>
                {/* <img src="/images/card-bg.webp" className="card-bg" /> */}
                <div className="implant-card-header">
                  <h2> Implant full arch </h2>
                </div>
                <div className="implant-image-container">
                  <Image
                    src="/images/fullarch-implant.webp"
                    alt="Implant Full Mouth"
                    width={409}
                    height={173}
                  ></Image>
                  {/* <img src="/images/fullarch-implant.webp" alt="Implant Full Mouth" /> */}
                </div>
                <div className="implant-card-body p-2 text-justify">
                  <p>
                    Our expertly crafted implant full arch solutions provide a
                    stable, permanent restoration for patients with extensive
                    tooth loss. Digitally designed for precision and comfort,
                    they offer a natural look and feel. At ADDL, we tailor each
                    restoration to meet individual needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="implant-card imcards">
                <Image
                  src="/images/card-bg.webp"
                  className="card-bg"
                  alt="card-bg"
                  width={449}
                  height={599}
                ></Image>
                {/* <img src="/images/card-bg.webp" className="card-bg" /> */}
                <div className="implant-card-header">
                  <h2>Implant screw retained </h2>
                </div>
                <div className="implant-image-container">
                  <Image
                    src="/images/screw-retained-implant.webp"
                    alt="Advanced CAD/CAM"
                    width={409}
                    height={173}
                  ></Image>
                  {/* <img src="/images/screw-retained-implant.webp" alt="Advanced CAD/CAM" /> */}
                </div>
                <div className="implant-card-body p-2 text-justify">
                  <p>
                    Our precisely crafted implant screw-retained restorations
                    provide stability and aesthetics. Designed for a secure fit,
                    they ensure patient comfort and long-term performance. At
                    ADDL, we offer tailored solutions to meet each patient's
                    unique dental needs with precision and care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          id="player"
          className="background-video product"
        >
          <source src="/videos/ADE12.mp4" type="video/mp4" />
          <source src="/videos/ADE12.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-overlay"></div>
        <div className="container d-flex justify-content-center align-items-center ">
          <div className="quality-content ">
            We embrace even the most challenging implant cases with personalized
            care and advanced technology, ensuring the best results for each
            patient. Throughout the process, we keep our patients informed and
            comfortable, helping them regain function and confidence with
            natural-looking implants. We believe in providing not just lasting
            solutions, but a positive experience that enhances well-being. In
            the end, our expertise and commitment to care deliver a
            life-changing outcome for every patient. <br />
            <a href="/contact-us" class="btn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Implants;
