import React, { useEffect, useRef,useState } from "react";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import Head from "next/head";
import { ProductQuality } from "@/component/ProductQuality";

// const isClient = typeof window !== undefined;

const CrownsBridges = () => {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Premium Dental Crowns & Bridges | Ace Digital Dental Lab",
    url: "https://acedigitaldentallaboratory.com/product/crowns-bridges/",
    description:
      "Get high-quality, custom-made dental crowns and bridges from ADDl. Crafted with precision, designed for durability, and trusted by dental professionals.",
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
        name: "Crowns & Bridges",
        item: "https://acedigitaldentallaboratory.com/product/crowns-bridges/",
      },
    ],
  };
  const videoRefP = useRef(null);
  const [isClient,setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
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
    }
  }, []);
  const swiperRef = useRef(null);

  const productCard = [
      {
          id: 1,
          title: "Aesthetic porcelain",
          img: "/images/PFM-POST.webp",
          discription: "Our PFM (Porcelain-Fused-to-Metal) crowns and bridges combine strength and aesthetics, enhanced by cutting-edge digital technology. Using advanced CAD/CAM software and precision milling techniques, we create restorations with exceptional fit and natural appearance. This fusion of digital design and traditional materials ensures long-lasting, functional, and highly aesthetic results."
      },
      {
          id: 2,
          title: "Zirconia crowns",
          img: "/images/zir-conia.webp",
          discription: "At ADDL, we specialize in high-quality zirconia crowns and bridges, providing exceptional strength and aesthetics. Our advanced digital CAD/CAM workflow and precision milling guarantee a perfect fit and natural look. Using state-of-the-art digital sintering techniques, we create durable, lifelike restorations with unmatched accuracy, longevity, and reliability."
      },
      {
          id: 3,
          title: "Layered zirconia crowns",
          img: "/images/lzc.webp",
          discription: "Our layered zirconia crowns and bridges combine strength with natural aesthetics, thanks to advanced digital workflows and CAD/CAM technology. Precision layering ensures lifelike shading and a perfect fit, creating durable, biocompatible restorations ideal for single crowns, bridges, and implants."
      },
      {
          id: 4,
          title: "PMMA Temporaries",
          img: "/images/PMMA.webp",
          discription: "PMMA temporary crowns and bridges are crafted using advanced digital design for a precise fit and natural look. They offer strength, comfort, and esthetics, allowing patients to confidently preview their final smile. Ideal for both short-term and long-term use."
      }
  ]

  return (
    <>
      <Head>
        <title>Premium Dental Crowns & Bridges | Ace Digital Dental Lab</title>
        <meta
          name="description"
          content="Get high-quality, custom-made dental crowns and bridges from ADDl. Crafted with precision, designed for durability, and trusted by dental professionals."
        />
        <link
          rel="canonical"
          href="https://acedigitaldentallaboratory.com/product/crowns-bridges/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Premium Dental Crowns & Bridges | Ace Digital Dental Lab"
        />
        <meta
          name="og:description"
          content="Get high-quality, custom-made dental crowns and bridges from ADDl. Crafted with precision, designed for durability, and trusted by dental professionals."
        />
        <meta
          property="og:url"
          content="https://acedigitaldentallaboratory.com/product/crowns-bridges/"
        />
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
            <h1 className="breadcrumbTitle">Crowns & Bridges</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-sm breadcrumbNav">
                <li className="breadcrumb-item active">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Products
                </li>
                <li className="breadcrumb-item ">Crowns & Bridges</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="DW-home product-section1 crown-bridges position-relative">
        {/* <Image src="/images/product-vector.png" className="product-vector img-fluid" alt="product-vector" width={1920} height={568}></Image> */}
        <img
          src="/images/product-vector.png"
          className="product-vector img-fluid"
        ></img>
        <div
          className="container mt-4 mt-lg-5 mb-sm-4 mb-xl-5 z-1 mb-4 pt-xl-3 position-relative">
          <img
            src="/images/product-vector.png"
            className="product-vector1 d-none img-fluid"
          ></img>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 p-md-0 px-xl-3 col-xl-5 order-lg-1 order-md-1 order-2">
              <h2 className="product-title mb-lg-3 mb-2 mb-sm-1 ">
                Reliable <span>Dental Crown Bridge</span> For Precision
                Restorations
              </h2>
              <p className="product-sub-title">
                Experience restorations that redefine excellence with Ace dental
                crown & bridge solutions, engineered to deliver superior
                strength in every dental crown and dental bridge restoration.
                Whether you’re restoring a single dental crown tooth or
                fabricating a multi-unit dental bridge teeth, our reliable
                solution delivers lifelike esthetics, faster turnaround, and
                long-lasting durability.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 order-lg-2 order-md-2 order-1">
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
                  src="https://d1ytpjko2pk6h2.cloudfront.net/Crown.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://d1ytpjko2pk6h2.cloudfront.net/Crown.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section2 crown-bridges-solution mt-md-5 pt-xl-3 mb-xl-5">
        <div className="container">
          <h2 className="product-title mb-sm-1">
            Why <span>Ace Crown & Bridge</span> Solutions Stand Apart?
          </h2>
          <p className="product-sub-title">
            Ace crown & bridge solutions are designed to deliver superior
            quality and reliability that dental professionals can trust. Here’s
            why our crown and bridge restorations consistently stand out:
          </p>
          <div className="row justify-content-between align-items-center mb-4 mb-sm-4 mb-md-4 mb-xl-4">
            <div className="col-lg-6 col-md-12 mt-1 mt-sm-1 mt-lg-0 mt-xl-0">
              <Image
                src="/images/crown-bridges-new.png"
                className="crown-bridges-solution-img img-fluid"
                width={642}
                height={642}
                alt="crown-bridges-solution-img"
              ></Image>
              {/* <img
                src="/images/crown-bridges-new.png"
                className="crown-bridges-solution-img img-fluid"
              ></img> */}
            </div>
            <div className="col-lg-6 col-md-12 mt-3 mt-sm-3 mt-lg-0 mt-xl-0">
              <ul className="crown-bridges-solution-ul product-section2-ul">
                <li>
                  <h3>
                    Premium Dental-Grade Materials:&nbsp;
                    <span>
                      We source only premium dental-grade zirconia and ceramics,
                      biocompatible, ultra-strong, and built to last. Each
                      material is chosen to deliver long-term durability and
                      natural-looking esthetics.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Multi-Stage Quality Control:
                    <span>
                      {" "}
                      Every restoration goes through multi-step quality control
                      process, with precision checks at every stage. We inspect
                      margins, contacts, and surfaces to ensure each restoration
                      is flawless and ready for delivery.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Expert Technician Oversight:
                    <span>
                      {" "}
                      Our veteran lab technicians bring years of hands-on
                      expertise to personally manage every case, catching even
                      the tiniest details. You get restorations crafted with
                      expert attention to detail and consistency.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Fit and Function Verification:
                    <span>
                      {" "}
                      We simulate real-world biting and marginal seating to
                      ensure your crowns and bridges seat right the first time.
                      That means fewer adjustments chairside and more confidence
                      in every placement.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    ISO-Compliant Processes:
                    <span>
                      {" "}
                      Operating under ISO-compliant procedures from start to
                      finish. We deliver consistent, dependable results, trusted
                      by dentists nationwide for accuracy, quality, and on-time
                      delivery.{" "}
                    </span>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section3 pt-md-1 pt-xl-3 crown-bridge-premier ">
        <div className="container">
          <h2 className="product-title mb-sm-1 mb-md-1">
            Our Premier <span>Crown & Bridge</span> Solutions
          </h2>
          <p className="product-sub-title">
            Discover our all-in-one portfolio of dental crown & bridge
            solutions, expertly crafted for today’s fixed-prosthodontic needs
          </p>
          <div className="row justify-content-center mx-auto gap-5 mt-4 mt-sm-3 mt-lg-4 mb-5 pb-xl-3 mt-xl-4">
            <div className="col-lg-5 col-md-10 p-md-0">
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
                  <h2 className="mb-0">Zirconia Crown & Bridge</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/zirconia-crown-img.png"
                    width={553}
                    height={325}
                    alt="zirconia-crown-img"
                    className="zirconia-crown-img z-1 position-relative img-fluid"
                  ></Image>
                  {/* <img
                    src="/images/zirconia-crown-img.png"
                    className="ziconia-crown-img img-fluid"
                  ></img> */}
                </div>
                <div className="product-card-description position-relative mb-2">
                  <p className="text-center mb-0">
                    Discover our premium zirconia crowns and bridges offering
                    precise, esthetic dental restoration with natural
                    translucency, exceptional strength, and excellent chip
                    resistance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-10 p-md-0">
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
                  <h2 className="mb-0">PMMA Temporaries Crown & Bridge</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/pmma-crown-img.png"
                    width={553}
                    height={325}
                    className="zirconia-crown-img z-1 position-relative img-fluid"
                    alt="zirconia-crown-img"
                  ></Image>
                  {/* <img
                    src="/images/pmma-crown-img.png"
                    className="ziconia-crown-img img-fluid"
                  ></img> */}
                </div>
                <div className="product-card-description position-relative mb-2">
                  <p className="text-center mb-0">
                    Explore our exclusive PMMA temporary crowns and
                    bridges—engineered for durability, strength, and natural
                    esthetics during the crucial interim stage of dental
                    restoration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ProductQuality/> */}
      <section className="crown-bridge-contact product-contact my-5">
        <video
          autoPlay
          loop
          muted
          playsInline
          id="player"
          className="background-video product"
        >
          <source src="/videos/crown-bg.mp4" type="video/mp4" />
          <source src="/videos/crown-bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="container">
          <div className="crown-bridge-contact-content product-contact-content">
            <h2 className="product-title">
              Choose The Ace Crown Bridge For A Perfect Smile
            </h2>
            <p>
              Give your patients restorations that deliver on every level,
              flawless fit, natural esthetics, and lasting strength. With Ace,
              your next crown or bridge case is in expert hands.
            </p>
            <button className="btn btn-contact">Connect with Us</button>
          </div>
        </div>
      </section>
      {/* <section className="quality-section">
                <video autoPlay loop muted playsInline id="player" className="background-video product" >
                    <source src="/videos/crown-bg.mp4" type="video/mp4" />
                    <source src ="/videos/crown-bg.webm" type="video/webm" />
                    Your browser does not support the video tag.
                </video>
                <div className="container d-flex justify-content-center align-items-center " >
                    <div className="quality-content ">

                        To ensure exceptional results, ADDL provides premium dental lab solutions that prioritize precision, craftsmanship, and advanced technology for superior dental restorations. <br />

                        <a href="/contact-us/" className="btn ">Get In Touch</a>
                    </div>
                </div>
            </section> */}
    </>
  );
};

export default CrownsBridges;
