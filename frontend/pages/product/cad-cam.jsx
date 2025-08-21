import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";

// const isClient = typeof widnow !== undefined;

const CadCamMilling = () => {
  const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "High-Precision CAD/CAM Dental Solutions | ADDL",
        "url": "https://acedigitaldentallaboratory.com/product/cad-cam/",
        "description": "Discover cutting-edge CAD/CAM dental restorations from ADDl. Achieve superior accuracy, durability, and esthetics with our advanced digital dentistry solutions.",
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
          "name": "CAD/CAM Milling",
          "item": "https://acedigitaldentallaboratory.com/product/cad-cam/"
        }
      ]
  }
  const videoRefP = useRef(null);
  const [isClient,setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (isClient) {
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
        <title>High-Precision CAD/CAM Dental Solutions | ADDL</title>
        <meta name="description" content="Discover cutting-edge CAD/CAM dental restorations from ADDl. Achieve superior accuracy, durability, and esthetics with our advanced digital dentistry solutions."/>
        <link rel="canonical" href="https://acedigitaldentallaboratory.com/product/cad-cam/" /> 
        <meta property="og:locale" content="en_US"/>  
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="High-Precision CAD/CAM Dental Solutions | ADDL" />
        <meta name="og:description" content="Discover cutting-edge CAD/CAM dental restorations from ADDl. Achieve superior accuracy, durability, and esthetics with our advanced digital dentistry solutions."/>
        <meta property="og:url" content="https://acedigitaldentallaboratory.com/product/cad-cam/" />
        <meta property="og:site_name" content="Ace Digital Dental Lab" />
        <meta name="og:image" content="/images/feature-ADDL.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumsSchema) }}
        />
      </Head>
      <section className="bradcrumb-product" style={{ marginTop: "80px" }}>
        <div className="container h-100">
          <div className=" d-flex justify-content-end align-items-start flex-column inner-bread">
            <h1 className="breadcrumbTitle">CAD/CAM Milling</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-sm breadcrumbNav">
                <li className="breadcrumb-item active">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Products
                </li>
                <li className="breadcrumb-item ">CAD/CAM Milling</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="DW-home">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6 col-md-6 order-1 order-lg-0 order-md-0">
              <div className="product-text p-3">
                <h2 className="double-heading">
                  Revolutionizing Restorations with{" "}
                  <span className="highlight-text">CAD/CAM Precision.</span>
                </h2>
                <p>
                  We are passionate about digital dentistry, continually
                  investing in the latest CAD/CAM and scanning systems to stay
                  at the . forefront of innovation. By incorporating
                  cutting-edge technology into our practice, we enhance
                  precision, improve patient outcomes, and streamline workflows.
                  Our commitment to excellence ensures that our patients receive
                  the highest quality care, and we continue to embrace
                  advancements in digital tools that make dental procedures more
                  efficient and effective.
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
                  src="https://d1ytpjko2pk6h2.cloudfront.net/Cad+Cam.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://d1ytpjko2pk6h2.cloudfront.net/Cad+Cam.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
              {/* <div className="video-section">
                                <video autoPlay loop muted playsInline id="player" className="video-crop-cad h-100">
                                <source src="https://d1ytpjko2pk6h2.cloudfront.net/Cad+Cam.mp4" type="video/mp4" />
                                <source src="https://d1ytpjko2pk6h2.cloudfront.net/Cad+Cam.webm" type="video/webm" />
                                    Your browser does not support the video tag.
                                </video>
                            </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="cadcamintro">
        <div className="container">
          <div className="row g-2">
            <div className="col-12 col-md-6 d-flex justify-content-center  flex-column order-md-1 order-lg-1 order-1 p-4">
              <h2 className="cadcam-head mb-4">
                Seamless, natural-looking restorations designed for precision
                and beauty.
              </h2>

              <p className="subtxtofabout">
                We’re constantly investing in advanced CAD/CAM technology to
                improve the precision and efficiency of our dental restorations.
                This not only allows professionals to achieve faster, more
                accurate results with a perfect fit, but also benefits patients
                by providing durable, natural-looking, and comfortable
                restorations that last longer and require fewer adjustments.
              </p>
            </div>
            <div className="col-12 col-md-6 p-4 order-lg-0  order-md-0 order-0">
              <Image
                src="/images/cad-cam.webp"
                className="img-fluid"
                alt="cad-cam-image"
                width={546}
                height={399}
              ></Image>
              {/* <img src="/images/cad-cam.png" className="img-fluid"></img> */}
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
          <source src="/videos/cad-cam-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="container d-flex justify-content-center align-items-center ">
          <div className="quality-content ">
            To ensure exceptional results, ADDL provides premium dental lab
            solutions that prioritize precision, craftsmanship, and advanced
            technology for superior dental restorations. <br />
            <a href="/contact-us/" className="btn">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CadCamMilling;
