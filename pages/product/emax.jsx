import Image from "next/image";
import React from "react";

const Emax = () => {
  return (
    <React.Fragment>
      <section className="bradcrumb-product" style={{ marginTop: "80px" }}>
        <div className="container h-100">
          <div className=" d-flex justify-content-end align-items-start flex-column inner-bread">
            <h1 className="breadcrumbTitle">Emax</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb text-sm breadcrumbNav">
                <li class="breadcrumb-item active">
                  <a href="/">Home</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Products
                </li>
                <li class="breadcrumb-item ">Emax</li>
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
      <section className="product-section2 why-emax-veneers-section why-implant-section pt-sm-2 mt-sm-4 mt-md-4 mt-lg-5">
        <div className="container">
          <h2 className="product-title pe-0 pe-lg-0 w-100 mb-sm-2">
            Why <span>Ace Emax Veneers</span> Are Top Choice Of USA's Dentists?
          </h2>
          <p className="product-sub-title">
            Ace Emax veneers blend state-of-the-art digital milling with expert
            hand finishing to deliver ultra-precise, lifelike restorations that
            America’s leading dentists trust. Here are some reasons:
          </p>
          <div className="row justify-content-between align-items-center mt-4 mb-4 mb-sm-4 mb-md-4 mb-xl-5">
            <div className="col-lg-6 col-md-12 mt-1 mt-sm-0 mt-md-0  mt-lg-0 mt-xl-0">
              <Image
                src="/images/emax-img.png"
                className="Implant-img emax-img img-fluid"
                width={642}
                height={642}
                alt="emax-img"
              ></Image>
              {/* <img
                src="/images/emax-img.png"
                className="Implant-img emax-img img-fluid"
                alt="Emax-img"
              ></img> */}
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
      <section className="product-section3 emax-solution-section">
        <div className="container pt-xl-3">
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
                  <h2 className="mb-0">Emax CAD Veneers</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/cad-veneers.png"
                    width={553}
                    height={325}
                    className="full-arch-img z-1 position-relative img-fluid"
                  ></Image>
                  {/* <img
                    src="/images/cad-veneers.png"
                    className="full-arch-img z-1 position-relative img-fluid"
                  ></img> */}
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
                  <h2 className="mb-0">Emax Press Veneers</h2>
                </div>
                <div className="product-card-img">
                  <Image
                    src="/images/crown-bridges2.png"
                    className="zirconia-crown-img2 z-1 position-relative img-fluid"
                    width={553}
                    height={325}
                  ></Image>
                  {/* <img
                    src="/images/crown-bridges2.png"
                    className="ziconia-crown-img2 z-1 position-relative img-fluid"
                  ></img> */}
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
