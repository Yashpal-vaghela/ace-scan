import Image from "next/image";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import { useRouter } from "next/router";

const Emax = () => {
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.matchMedia({
  //     "(max-width:768px)": function () {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: ".product-quality-section",
  //           // endTrigger: ".emax-solution-section",
  //           start: "top 18%",
  //           end: "bottom top",
  //           scrub: true,
  //           pin: true,
  //           markers: false,
  //           anticipatePin: 1,
  //           onLeave: () => {
  //             document
  //               .getElementById("product-quality-section")
  //               ?.classList.add("unpinned");
  //           },
  //           onLeaveBack: () => {
  //             document
  //               .getElementById("product-quality-section")
  //               ?.classList.remove("unpinned");
  //           },
  //           onEnterBack: () => {
  //             document
  //               .getElementById("product-quality-section")
  //               ?.classList.remove("unpinned");
  //           },
  //         },
  //       });
  //       tl.fromTo(
  //         "#text1",
  //         {
  //           y: "150%",
  //           opacity: 0,
  //           scale: 0.9,
  //           rotate: "15deg",
  //         },
  //         {
  //           y: "25px",
  //           opacity: 1,
  //           scale: 1,
  //           rotate: 0,
  //           ease: "power2.out",
  //           duration: 1,
  //         },
  //         0.5
  //       );
  //       tl.fromTo(
  //         "#card1",
  //         {
  //           y: 0,
  //           opacity: 0,
  //           scale: 1.5,
  //         },
  //         {
  //           y: -(window.innerHeight * 0.2),
  //           opacity: 1,
  //           scale: 1,
  //           ease: "power2.out",
  //           duration: 1,
  //         },
  //       );
  //       tl.fromTo(
  //         "#card2",
  //         {
  //           y: "-200px",
  //           opacity: 0,
  //           scale: 1.5,
  //         },
  //         {
  //           y: -(window.innerHeight * 0.65),
  //           opacity: 1,
  //           scale: 1,
  //           ease: "power2.out",
  //           duration: 1,
  //         },
  //         ">"
  //       );
  //       tl.fromTo(
  //         "#card3",
  //         {
  //           y: "-500px",
  //           opacity: 0,
  //           scale: 1.5,
  //         },
  //         {
  //           y: -(window.innerHeight * 1.1),
  //           opacity: 1,
  //           scale: 1,
  //           rotation: 0,
  //           ease: "power2.out",
  //           duration: 1,
  //         },
  //         ">"
  //       );
  //       tl.fromTo(
  //         "#card4",
  //         {
  //           y: "-700px",
  //           opacity: 0,
  //           scale: 1.5,
  //         },
  //         {
  //           y: -(window.innerHeight * 1.545),
  //           opacity: 1,
  //           scale: 1,
  //           rotation: 0,
  //           ease: "power2.out",
  //           duration: 1,
  //         },
  //         ">"
  //       );
  //       tl.fromTo(
  //         "#card5",
  //         {
  //           y: "-900px",
  //           opacity: 0,
  //           scale: 1.5,
  //         },
  //         {
  //           y: -(window.innerHeight * 1.99),
  //           opacity: 1,
  //           scale: 1,
  //           rotation: 0,
  //           ease: "power2.out",
  //           duration: 1,
  //         },
  //         ">"
  //       );
  //       tl.fromTo(
  //         "#card6",
  //         {
  //           y: "-1200px",
  //           opacity: 0,
  //           scale: 1.5,
  //         },
  //         {
  //           y: -(window.innerHeight * 2.43),
  //           opacity: 1,
  //           scale: 1,
  //           rotation: 0,
  //           ease: "power2.out",
  //           duration: 1,
  //         },
  //         ">"
  //       );
  //     },
  //   });
  // }, []);

  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".product-quality-section",
        start: "top 15%",
        end: "bottom top",
      },
    });
    // if(router.pathname === "/product/emax"){
    //   const a = document.getElementById("__next");
    //   console.log("a",a);
    //   a.className("overflow-visible");
    // }
    console.log("implant",router);
  }, []);
  return (
    <React.Fragment>
      <section className="bradcrumb-product" style={{ marginTop: "80px" }}>
        <div className="container h-100">
          <div className=" d-flex justify-content-end align-items-start flex-column inner-bread">
            <h1 className="breadcrumbTitle">Emax</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-sm breadcrumbNav">
                <li className="breadcrumb-item active">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Products
                </li>
                <li className="breadcrumb-item ">Emax</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <section className="DW-home product-section1 Implant position-relative">
        <Image src="/images/product-vector.webp" className="product-vector img-fluid" width="1920" height="568" alt="Product-vector"></Image>
        <div
          className="container mt-4 mt-lg-4 mb-sm-4 mb-xl-5  mb-4 position-relative"
          style={{ zIndex: 1 }}
        >
          <Image src="/images/product-vector.webp" className="product-vector1 d-none img-fluid" width="1920" height="568" alt="Product-vector"></Image>
          {/* <img
            src="/images/product-vector.png"
            className="product-vector1 d-none img-fluid"
          ></img> */}
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6 p-md-0 col-xl-6 order-lg-1 order-md-1 order-2">
              <h2 className="product-title mb-lg-3 mb-2 mb-sm-2">
                <span>Emax Dental Veneers</span> For Natural Smile Restorations
                By Ace
              </h2>
              <p className="product-sub-title mb-sm-2 mb-md-3 mb-lg-0">
                Transform your smile with Ace Emax dental veneers, the ultimate
                in esthetic dental solutions that combine cutting-edge materials
                and expert craftsmanship to deliver remarkable results. All
                procedures are tailored to your unique smile goals. We
                specialize in crafting premium Emax teeth veneers in-house,
                using genuine IPS E.max lithium disilicate for superior
                durability and lifelike translucency, a trusted solution for
                patients seeking a natural-looking, long-lasting smile makeover.
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
      <section className="product-section2 why-emax-veneers-section why-implant-section  pt-sm-3 mt-sm-4 mt-md-4 mt-lg-5">
        <div className="container">
          <h2 className="product-title pe-0 pe-lg-0 w-100 mb-sm-2">
            Why <span>Ace Emax Veneers</span> Are Top Choice Of USA's Dentists?
          </h2>
          <p className="product-sub-title">
            Ace Emax veneers blend state-of-the-art digital milling with expert
            hand finishing to deliver ultra-precise, lifelike restorations that
            America’s leading dentists trust. Here are some reasons:
          </p>
          <div className="row justify-content-between align-items-center mt-4 mb-4 mb-sm-4 mb-md-4 mb-xl-4">
            <div className="col-lg-6 col-md-12 mt-1 mt-sm-0 mt-md-0  mt-lg-0 mt-xl-0">
              <Image
                src="/images/emax-img.webp"
                className="Implant-img emax-img img-fluid"
                width={642}
                height={642}
                alt="emax-img"
              ></Image>
            </div>
            <div className="col-lg-6 col-md-12 mt-4 mt-sm-3 mt-lg-0 mt-xl-0">
              <ul className="product-section2-ul emax-ul">
                <li>
                  <h3>
                    Enamel-Like Translucency:&nbsp;
                    <span>
                      Designed for natural esthetics, E.max provides a superior
                      chameleon effect that blends beautifully with neighboring
                      teeth. The enamel-like translucency ensures a seamless,
                      lifelike appearance every time.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Minimal Tooth Reduction:&nbsp;
                    <span>
                      Ultra-thin veneer designs, starting at just 0.3 mm,
                      require minimal tooth reduction. This allows for
                      conservative prep and helps preserve healthy enamel, ideal
                      for patients who value minimally invasive treatment
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Precision Margins:&nbsp;
                    <span>
                      CAD/CAM–milled or pressed with micro-etched margins to
                      promote excellent marginal integrity. The result is
                      optimal bonding, improved seal, & long-lasting performance
                      in the mouth.
                    </span>
                  </h3>
                </li>
                <li>
                  <h3>
                    Hand-Layered Customization:&nbsp;
                    <span>
                      Expert ceramists add bespoke characterizations and
                      layering for individualized esthetics. This creates
                      personalized esthetics that reflect the texture, color
                      depth, and vitality of natural teeth.
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
        <Image src="/images/qty-sec-vector.webp" className="qty-sec-vector img-fluid" width="1920" height="568" alt="qty-sec-vector"></Image>
        <div className="container pt-md-0 pt-lg-5 pt-xl-4 pb-xl-3">
          <div
            className="text-section pt-md-5 pt-0 pb-md-4 pb-4 pb-sm-4"
            id="text1"
          >
            <h2 className="product-title quality-section-title">
              <span>Uncompromised Quality</span> in Every Ace Emax Veneer
            </h2>
            <p className="quality-section-description">
              At Ace, quality isn’t an afterthought, it’s our foundation. Our
              Emax teeth veneers undergo a rigorous quality journey from genuine
              IPS E.max lithium disilicate sourcing to final hand-polish,
              ensuring each restoration boasts flawless fit, natural
              translucency, and lasting strength.
            </p>
          </div>
          <div className="row justify-content-md-between  justify-content-center  cards-container">
            <div className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card" id="card1"> 
              <div className="card">
                <div className="card-header">
                  <Image src="/images/01.svg" className="img-fluid" width="63" height="30" alt="number-01"></Image>
                </div>
                <div className="card-body">
                  Ace veneers are crafted exclusively from genuine IPS E.max
                  lithium disilicate material for unmatched strength &
                  durability.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card" id="card2">
              <div className="card">
                <div className="card-header">
                  <Image src="/images/02.svg" className="img-fluid" width="63" height="30" alt="number-02"></Image>
                </div>
                <div className="card-body">
                  Each veneer maintains precise thickness and impeccably smooth
                  margins, ensuring ideal bonding and long-term stability!
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card" id="card3">
              <div className="card">
                <div className="card-header">
                  <Image src="/images/03.svg" className="img-fluid" width="63" height="30" alt="number-03"></Image>
                </div>
                <div className="card-body">
                  Featuring remarkable translucency that mirrors natural enamel,
                  our Emax veneers blend seamlessly for a lifelike smile.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card" id="card4">
              <div className="card">
                <div className="card-header">
                  <Image src="/images/04.svg" className="img-fluid" width="63" height="30" alt="number-04"></Image>
                </div>
                <div className="card-body">
                  Engineered to resist chipping and everyday wear, our veneers
                  uphold their integrity, promising enduring aesthetic results.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card" id="card5">
              <div className="card">
                <div className="card-header">
                 <Image src="/images/05.svg" className="img-fluid" width="63" height="30" alt="number-05"></Image>
                </div>
                <div className="card-body">
                  Formulated for exceptional color stability, our veneers retain
                  their authentic hue over years, maintaining natural look.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 col-10 sticky-card" id="card6">
              <div className="card">
                <div className="card-header">
                  <Image src="/images/06.svg" className="img-fluid" width="63" height="30" alt="number-06"></Image>
                </div>
                <div className="card-body">
                  Handcrafted to perfection by skilled technicians, each veneer
                  delivers precision fit and a polished finish every time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section3 emax-solution-section">
        <div className="container">
          <h2 className="product-title mb-sm-1 mb-md-1 w-100">
            Precision Smart Dental Implant Solutions By
            <span> Ace Dental Lab</span>
          </h2>
          <p className="product-sub-title mb-lg-0 pb-xl-2">
            At Ace Digital Dental Laboratory, our implant product line is built
            to deliver consistency, precision, and clinical success across
            various cases. We currently offer:
          </p>
          <div className="row justify-content-center gap-5 mt-4 mt-sm-3 mt-md-4 mt-xl-4">
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
                  <h2 className="mb-0">Emax CAD Veneers</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/emax-product1.webp"
                    width={553}
                    height={325}
                    className="full-arch-img z-1 position-relative img-fluid"
                    alt="emax-product1-img"
                    loading="eager"
                  ></Image>
                </div>
                <div className="product-card-description position-relative mb-2">
                  <p className="text-center mb-0">
                    Precision-milled from premium IPS E.max lithium disilicate
                    blocks using our proprietary CAD/CAM workflows, our Emax CAD
                    veneers ensure an exacting fit and uniform thickness.
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
                  <h2 className="mb-0">Emax Press Veneers</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/emax-product2.webp"
                    className="zirconia-crown-img2 z-1 position-relative img-fluid"
                    width={553}
                    height={325}
                    alt="emax-product2-img"
                    loading="eager"
                  ></Image>
                </div>
                <div className="product-card-description d-flex align-items-center  m-auto position-relative mb-2">
                  <p className="text-center mb-0 ">
                    Leverage the renowned IPS E.max press-ceramic process,
                    crafted by our master ceramists to achieve exceptional
                    translucency, natural color gradients, and reinforced edge
                    strength.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-contact  my-5">
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
            <h2 className="product-title pe-0 w-100">
              Take Your Patient’s Smile to the Next Level with Ace Emax Dental
              Veneers
            </h2>
            <p>
              Join the elite dentists trusting Ace for Emax veneers that deliver
              a flawless fit and natural beauty every time. Let’s make
              extraordinary results your new standard.
            </p>
            <button className="btn btn-contact">Request a Quote</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Emax;
