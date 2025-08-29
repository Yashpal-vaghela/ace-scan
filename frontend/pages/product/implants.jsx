import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";

// const isClient = typeof window !== undefined;

const Implants = () => {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Premium Dental Implants | Ace Digital Dental Laboratory",
    url: "https://acedigitaldentallaboratory.com/product/implants/",
    description:
      "Discover high-quality, precision-crafted dental implants made by Ace Digital Dental Laboratory. Engineered for durability, comfort, and natural esthetics.",
    inLanguage: "en",
  };
  const breadcrumsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://acedigitaldentallaboratory.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Implants",
        item: "https://acedigitaldentallaboratory.com/product/implants/",
      },
    ],
  };
  const videoRefP = useRef(null);
  const [isClient, setIsClient] = useState(false);
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
        <title>Premium Dental Implants | Ace Digital Dental Laboratory</title>
        <meta
          name="description"
          content="Discover high-quality, precision-crafted dental implants made by Ace Digital Dental Laboratory. Engineered for durability, comfort, and natural esthetics."
        />
        <link
          rel="canonical"
          href="https://acedigitaldentallaboratory.com/product/implants/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Premium Dental Implants | Ace Digital Dental Laboratory"
        />
        <meta
          name="og:description"
          content="Discover high-quality, precision-crafted dental implants made by Ace Digital Dental Laboratory. Engineered for durability, comfort, and natural esthetics."
        />
        <meta
          property="og:url"
          content="https://acedigitaldentallaboratory.com/product/implants/"
        />
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
              <ol className="breadcrumb text-sm breadcrumbNav">
                <li className="breadcrumb-item active">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Products
                </li>
                <li className="breadcrumb-item ">Implants</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="DW-home product-section1 Implant position-relative">
        <Image
          src="/images/product-vector.webp"
          className="product-vector img-fluid"
          width="1920"
          height="568"
          alt="Product-vector"
        ></Image>
        {/* <img
          src="/images/product-vector.webp"
          className="product-vector img-fluid"
        ></img> */}
        <div
          className="container mt-4 mt-lg-5 mb-sm-4 mb-xl-5  mb-4 position-relative"
          style={{ zIndex: 1 }}
        >
          <Image
            src="/images/product-vector.webp"
            className="product-vector1 d-none img-fluid"
            width="1920"
            height="568"
            alt="Product-vector"
          ></Image>
          {/* <img
            src="/images/product-vector.webp"
            className="product-vector1 d-none img-fluid"
          ></img> */}
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 p-md-0 col-xl-6 order-lg-1 order-md-1 order-2">
              <h2 className="product-title mb-lg-3 mb-2 mb-sm-2 mb-xl-4">
                <span>Ace Dental Implant For Teeth:</span> Precision, Speed, And
                Stunning Esthetics Restorations
              </h2>
              <p className="product-sub-title mb-md-0">
                Our implant for teeth restorations combines advanced digital
                design with USA precision milling to deliver custom abutments
                and crowns that fit perfectly and support ideal biomechanics,
                cutting chairside tweaks and speeding turnaround. Crafted from
                FDA-approved materials, they offer lasting strength and natural
                translucency to restore function and confidence. Fully
                compatible with all major implant systems,{" "}
                <b>Ace Dental Implants</b> make every case predictable and
                beautiful.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 p-md-0 order-lg-2 order-md-2 order-1">
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
            </div>
          </div>
        </div>
      </section>
      <section className="product-section2 why-implant-section pt-xl-4   mt-md-5">
        <div className="container">
          <h2 className="product-title mb-sm-2">
            Why <span>Ace Implants</span> Are The Best Choice?
          </h2>
          <p className="product-sub-title ">
            When precision, predictability, and patient satisfaction are
            non-negotiable, our dental implants deliver. We bring more than just
            implant restorations, we bring peace of mind to every case. It’s the
            kind of reliability that lets you focus on your patients, not
            follow-ups with the lab.
          </p>
          <div className="row justify-content-between align-items-center mt-4 mb-4 mb-sm-4 mb-md-4 mb-xl-5">
            <div className="col-lg-6 col-md-12 mt-1 mt-sm-0 mt-md-0  mt-lg-0 mt-xl-0">
              <Image
                src="/images/Implant-img.webp"
                className="Implant-img img-fluid"
                alt="Implant-img"
                width={651}
                height={652}
              ></Image>
              {/* <img
                src="/images/Implant-img.png"
                className="Implant-img img-fluid"
                alt="Implant-img"
              ></img> */}
            </div>
            <div className="col-lg-6 col-md-12 mt-4 mt-sm-3 mt-lg-0 mt-xl-0">
              <ul className="product-section2-ul Implant-ul">
                <li>
                  <h3>
                    Accurate Precision Every Time:&nbsp;
                    <span>
                      Digitally crafted for seamless integration and optimal
                      biomechanics. Using advanced CAD/CAM design and milling,
                      we achieve a level of fit and accuracy that minimizes
                      adjustments and remakes.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Exceptional Material Quality:&nbsp;
                    <span>
                      We use premium FDA-approved zirconia and titanium for
                      implant restoration, combining strength and esthetics to
                      create durable, natural-looking restorations built to last
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Natural-Looking Implant Esthetics:&nbsp;
                    <span>
                      Stunning, lifelike implant restorations that look and feel
                      natural, with translucent zirconia and expert finishing
                      for beautiful implant crowns and bridges.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Fast & Reliable Turnaround:&nbsp;
                    <span>
                      Designed to keep your practice moving with fast,
                      dependable delivery and efficient workflows that get your
                      implant cases done quickly.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Dedicated Implant Expertise & Support:&nbsp;
                    <span>
                      Our specialized technicians provide personalized support &
                      thorough quality checks, ensuring your implant cases meet
                      the highest standards from start to finish.
                    </span>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="product-section4 product-quality-section"
        id="product-quality-section"
      >
        {/* <Image src="/images/qty-sec-vector.png" className="qty-sec-vector img-fluid"></Image> */}
        <Image src="/images/qty-sec-vector.webp" className="qty-sec-vector img-fluid" width="1920" height="568" alt="Product-vector"></Image>
        <div className="container pt-md-0 pt-lg-3 pt-xl-4 pb-xl-3">
          <div
            className="text-section pt-md-5 pt-0 pb-md-4 pb-4 pb-sm-4"
            id="text1"
          >
            <h2 className="product-title quality-section-title">
              Commitment to Perfection in <span>Implant Restorations</span>
            </h2>
            <p className="quality-section-description">
              At Ace Digital Dental Laboratory, perfection isn’t just a goal,
              it’s our standard. Every implant restoration we produce undergoes
              strict quality checks and is crafted with precision technology and
              premium materials.
            </p>
          </div>
          <div className="row justify-content-md-between justify-content-center cards-container">
            <div
              className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card"
              id="card1"
            >
              <div className="card">
                <div className="card-header">
                  <Image
                    src="/images/01.svg"
                    className="img-fluid"
                    width="63"
                    height="30"
                    alt="number-01"
                  ></Image>
                  {/* <img src="/images/01.svg" className="img-fluid"></img> */}
                </div>
                <div className="card-body">
                  At Ace, every implant case is carefully reviewed to ensure
                  ideal fit, long-term function, and seamless clinical
                  integration.
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card"
              id="card2"
            >
              <div className="card">
                <div className="card-header">
                  <Image
                    src="/images/02.svg"
                    className="img-fluid"
                    width="63"
                    height="30"
                    alt="number-02"
                  ></Image>
                  {/* <img src="/images/02.svg" className="img-fluid"></img> */}
                </div>
                <div className="card-body">
                  Our precision-driven CAD/CAM workflows deliver consistent,
                  custom-fit restorations with speed, accuracy, and digital
                  reliability.
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card"
              id="card3"
            >
              <div className="card">
                <div className="card-header">
                  <Image
                    src="/images/03.svg"
                    className="img-fluid"
                    width="63"
                    height="30"
                    alt="number-03"
                  ></Image>
                  {/* <img src="/images/03.svg" className="img-fluid"></img> */}
                </div>
                <div className="card-body">
                  We use only FDA-approved, biocompatible materials—trusted for
                  safety, durability, and natural integration with oral tissues.
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card"
              id="card4"
            >
              <div className="card">
                <div className="card-header">
                  <Image
                    src="/images/04.svg"
                    className="img-fluid"
                    width="63"
                    height="30"
                    alt="number-04"
                  ></Image>
                  {/* <img src="/images/04.svg" className="img-fluid"></img> */}
                </div>
                <div className="card-body">
                  Each implant restoration undergoes micron-level margin checks
                  to ensure flawless fit and eliminate chairside adjustments.
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card"
              id="card5"
            >
              <div className="card">
                <div className="card-header">
                  <Image
                    src="/images/05.svg"
                    className="img-fluid"
                    width="63"
                    height="30"
                    alt="number-05"
                  ></Image>
                  {/* <img src="/images/05.svg" className="img-fluid"></img> */}
                </div>
                <div className="card-body">
                  Ace technicians personally inspect every case to guarantee
                  precision, function, and esthetics meet our perfection
                  standards.
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card"
              id="card6"
            >
              <div className="card">
                <div className="card-header">
                  <Image
                    src="/images/06.svg"
                    className="img-fluid"
                    width="63"
                    height="30"
                    alt="number-06"
                  ></Image>
                  {/* <img src="/images/06.svg" className="img-fluid"></img> */}
                </div>
                <div className="card-body">
                  All restorations are crafted under ISO-certified systems,
                  reflecting our commitment to global-quality benchmarks and
                  clinical reliability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section3 Implant-solution-section  pt-lg-2 pt-xl-0 mt-4">
        <div className="container pt-xl-3">
          <h2 className="product-title mb-sm-1 mb-md-1">
            Precision Smart Dental Implant Solutions By
            <span> Ace Dental Lab</span>
          </h2>
          <p className="product-sub-title mb-lg-0 pb-xl-2">
            At Ace Digital Dental Laboratory, our implant product line is built
            to deliver consistency, precision, and clinical success across
            various cases. We currently offer:
          </p>
          <div className="row justify-content-center gap-5 mt-4 mt-sm-3 mt-xl-4">
            <div className="col-lg-5 col-md-10 p-sm-0">
              <div className="product-card">
                <Image
                  src="/images/product-card-img.webp"
                  alt="product-card-bg-img"
                  width={613}
                  height={765}
                  className="product-card-bg-img img-fluid"
                ></Image>
                <div className="product-card-header">
                  <h2 className="mb-0">Full-Arch Implant Solutions</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/full-arch-img.webp"
                    width={553}
                    height={325}
                    className="full-arch-img z-1 position-relative img-fluid"
                    alt="full-arch-img"
                  ></Image>
                </div>
                <div className="product-card-description position-relative mb-2">
                  <p className="text-center mb-0">
                    Designed for All-on-4 and All-on-6 implant cases, our
                    full-arch solutions feature milled titanium or zirconia
                    frameworks for long-term strength, accuracy, and patient
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-10 p-sm-0">
              <div className="product-card">
                <Image
                  src="/images/product-card-img.webp"
                  alt="product-card-bg-img"
                  width={613}
                  height={765}
                  className="product-card-bg-img img-fluid"
                ></Image>
                <div className="product-card-header">
                  <h2 className="mb-0">Screw-Retained Crowns & Bridges</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/crown-bridges2.webp"
                    width={553}
                    height={325}
                    className="ziconia-crown-img2 z-1 position-relative img-fluid"
                    alt="zirconia-crown-img2"
                  ></Image>
                </div>
                <div className="product-card-description d-flex align-items-center  m-auto position-relative mb-2">
                  <p className="text-center mb-0 ">
                    Precision-milled zirconia crowns and bridges with a
                    screw-retained implant design offer easy retrievability,
                    exceptional marginal accuracy, and lifelike esthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-contact my-5">
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
        <div className="container">
          <div className="product-contact-content">
            <h2 className="product-title">
              Let’s Make Your Next Implant Case Effortless
            </h2>
            <p>
              Forget the remakes, delays, and guesswork. Ace teeth implants are
              crafted for seamless fit, fast delivery, and flawless results.
              Choose Ace Implants and experience the difference.
            </p>
            <button className="btn btn-contact">Talk to Our Team</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Implants;