import React, { useEffect, useRef,useState } from "react";
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
        <img
          src="/images/product-vector.png"
          className="product-vector img-fluid"
        ></img>
        <div
          className="container mt-4 mt-lg-5 mb-sm-4 mb-xl-5  mb-4 position-relative"
          style={{ zIndex: 1 }}
        >
          <img
            src="/images/product-vector.png"
            className="product-vector1 d-none img-fluid"
          ></img>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 p-md-0 col-xl-6 order-lg-1 order-md-1 order-2">
              <h2 className="product-title mb-lg-3 mb-2 mb-sm-2">
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
                src="/images/Implant-img.png"
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
      <section className="product-section3 Implant-solution-section  pt-lg-2 pt-xl-0">
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
                  src="/images/product-card-img.png"
                  alt="product-card-bg-img"
                  width={613}
                  height={765}
                  className="product-card-bg-img img-fluid"
                ></Image>
                {/* <img
                  src="/images/product-card-img.png"
                  className="product-card-bg-img img-fluid"
                ></img> */}
                <div className="product-card-header">
                  <h2 className="mb-0">Full-Arch Implant Solutions</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/full-arch-img.png"
                    width={553}
                    height={325}
                    className="full-arch-img z-1 position-relative img-fluid"
                    alt="full-arch-img"
                  ></Image>
                  {/* <img
                    src="/images/full-arch-img.png"
                    className="full-arch-img z-1 position-relative img-fluid"
                  ></img> */}
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
                  src="/images/product-card-img.png"
                  alt="product-card-bg-img"
                  width={613}
                  height={765}
                  className="product-card-bg-img img-fluid"
                ></Image>
                {/* <img
                  src="/images/product-card-img.png"
                  className="product-card-bg-img img-fluid"
                ></img> */}
                <div className="product-card-header">
                  <h2 className="mb-0">Screw-Retained Crowns & Bridges</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/crown-bridges2.png"
                    width={553}
                    height={325}
                    className="ziconia-crown-img2 z-1 position-relative img-fluid"
                    alt="zirconia-crown-img2"
                  ></Image>
                  {/* <img
                    src="/images/crown-bridges2.png"
                    className="ziconia-crown-img2 z-1 position-relative img-fluid"
                  ></img> */}
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

// <section className="product-before-after">
//   <div className="container">
//     <div className="row for-rlative">
//       {/* <div className="product-before-after-heading">
//                       <h2 className="heading_outer color-white">Renew Your Teeth, Renew Your Confidence.</h2>
//                       <h3 className="heading_outer color-white">Transforming Lives with the Benefits of Dental Implants.</h3>
//                   </div> */}
//       <div className="col-12 col-lg-6 ">
//         <div className="product-before-after-images ">
//           <Image
//             src="/images/imgallery.webp"
//             alt="about"
//             width={550}
//             height={400}
//             className="img-fluid round-images"
//           />
//         </div>
//       </div>
//       <div className="col-12 col-lg-6  d-flex flex-column align-items-center justify-content-center text-center">
//         <div className="product-before-after-content  d-flex flex-column  justify-content-center ">
//           <div className="product-before-after-heading1">
//             <p className="before-after-contains subhead ">
//               Renew Your Teeth, Renew Your Confidence
//             </p>
//             <h2 className="before-after-contains mb-lg-5 mb-2">
//               Transforming Lives with the Benefits of Dental Implants
//             </h2>
//           </div>
//           We prioritize your comfort and satisfaction, offering tailored
//           solutions that meet your unique needs. With our use of the
//           latest technology and premium materials, we provide restorations
//           that look and feel natural, ensuring a perfect fit and
//           long-lasting results. Our experienced team is dedicated to
//           guiding you through every step of the process, helping you enjoy
//           the full benefits of dental implants—restored functionality, a
//           beautiful smile, and renewed confidence.
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//   <section className="implant-card-section">
//   <div className="container">
//     <div className="row">
//       <div className="col-12 col-md-6 d-flex justify-content-center">
//         <div className="implant-card imcards">
//           <Image
//             src="/images/card-bg.webp"
//             className="card-bg"
//             alt="card-bg"
//             width={449}
//             height={599}
//           ></Image>
//           {/* <img src="/images/card-bg.webp" className="card-bg" /> */}
//           <div className="implant-card-header">
//             <h2> Implant full arch </h2>
//           </div>
//           <div className="implant-image-container">
//             <Image
//               src="/images/fullarch-implant.webp"
//               alt="Implant Full Mouth"
//               width={409}
//               height={173}
//             ></Image>
//             {/* <img src="/images/fullarch-implant.webp" alt="Implant Full Mouth" /> */}
//           </div>
//           <div className="implant-card-body p-2 text-justify">
//             <p>
//               Our expertly crafted implant full arch solutions provide a
//               stable, permanent restoration for patients with extensive
//               tooth loss. Digitally designed for precision and comfort,
//               they offer a natural look and feel. At ADDL, we tailor each
//               restoration to meet individual needs.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="col-12 col-md-6 d-flex justify-content-center">
//         <div className="implant-card imcards">
//           <Image
//             src="/images/card-bg.webp"
//             className="card-bg"
//             alt="card-bg"
//             width={449}
//             height={599}
//           ></Image>
//           {/* <img src="/images/card-bg.webp" className="card-bg" /> */}
//           <div className="implant-card-header">
//             <h2>Implant screw retained </h2>
//           </div>
//           <div className="implant-image-container">
//             <Image
//               src="/images/screw-retained-implant.webp"
//               alt="Advanced CAD/CAM"
//               width={409}
//               height={173}
//             ></Image>
//             {/* <img src="/images/screw-retained-implant.webp" alt="Advanced CAD/CAM" /> */}
//           </div>
//           <div className="implant-card-body p-2 text-justify">
//             <p>
//               Our precisely crafted implant screw-retained restorations
//               provide stability and aesthetics. Designed for a secure fit,
//               they ensure patient comfort and long-term performance. At
//               ADDL, we offer tailored solutions to meet each patient's
//               unique dental needs with precision and care.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <section className="quality-section">
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     id="player"
//     className="background-video product"
//   >
//     <source src="/videos/ADE12.mp4" type="video/mp4" />
//     <source src="/videos/ADE12.webm" type="video/webm" />
//     Your browser does not support the video tag.
//   </video>
//   <div className="bg-overlay"></div>
//   <div className="container d-flex justify-content-center align-items-center ">
//     <div className="quality-content ">
//       We embrace even the most challenging implant cases with personalized
//       care and advanced technology, ensuring the best results for each
//       patient. Throughout the process, we keep our patients informed and
//       comfortable, helping them regain function and confidence with
//       natural-looking implants. We believe in providing not just lasting
//       solutions, but a positive experience that enhances well-being. In
//       the end, our expertise and commitment to care deliver a
//       life-changing outcome for every patient. <br />
//       <a href="/contact-us" className="btn">
//         Get In Touch
//       </a>
//     </div>
//   </div>
// </section>
