import Image from "next/image";
import Home1 from "@/component/Home1";
import Link from "next/link";
import Head from 'next/head';

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Ace Digital Dental Lab",
    "url": "https://acedigitaldentallaboratory.com/",
  };
  const localSchema ={
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ace Digital Dental Lab",
    "image": "https://acedigitaldentallaboratory.com/images/ACE-logo.webp",
    "@id": "",
    "url": "https://acedigitaldentallaboratory.com/",
    "telephone": "+1 551-380-0385",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Auer Court, 2nd Floor East",
      "addressLocality": "Brunswick",
      "addressRegion": "NJ",
      "postalCode": "08816",
      "addressCountry": "US"
    }  
  }

  return (
    <>
      <Head>
        <title>Ace Digital Dental Lab | #1 Dental Lab Services in USA</title>
        <meta name="description" content="Ace Digital Dental Lab is the best dental laboratory in USA. We craft custom dental prosthesis with advanced technology, digital precision, and expert service."/>
        <link rel="canonical" href="https://acedigitaldentallaboratory.com/" /> 
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Ace Digital Dental Lab | #1 Dental Lab Services in USA" />
        <meta property="og:description" content="Ace Digital Dental Lab is the best dental laboratory in USA. We craft custom dental prosthesis with advanced technology, digital precision, and expert service."/>
        <meta property="og:url" content="https://acedigitaldentallaboratory.com/" />
        <meta property="og:site_name" content="Ace Digital Dental Lab" />
        <meta name="og:image" content="/images/feature-ADDL.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
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
                  {/* <source
                    src="https://d1ytpjko2pk6h2.cloudfront.net/ADVANCE+DENTAL+EXPORT.webm"
                    type="video/webm"
                  /> */}
                  <source
                    src="https://d1ytpjko2pk6h2.cloudfront.net/ADVANCE+DENTAL+EXPORT.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
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
              <span style={{ color: "white" }}>Welcome to</span>
              <h1 className="video-title ">
                Ace Digital Dental Lab
              </h1>
              <div className="text-large font-weight-500 d-flex">
                <span className="flex-shrink-0 w-40px h-1px bg-white opacity-6 align-self-center margin-25px-right"></span>
                <span className="flex-grow-1 opacity-6 video-desc">
                  Your Premier Partner for Precision Digital Dental Solutions in USA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="About-section position-relative space-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-xl-5 col-md-7 col-lg-6 mt-lg-5 mt-md-5 mt-2 position-relative d-flex justify-content-center align-items-center">
              <Image
                src="/images/MONA1.webp"
                className="img-fluid about-img1"
                width={500}
                height={100}
                alt="Digital Dental Lab Services in USA for Dental Restoration "
              ></Image>
            </div>
            <div className="col-11 col-xl-7 col-md-5 col-lg-6 mt-3">
              <div className="text-left">
                <div className="hero-subheading mt-lg-5 mt-md-5 mt-2">
                  DNA of Our Modern Dental Laboratory
                </div>
                <h2 className="double-heading heading1">
                  Harnessing{" "}
                  <span className="highlight-text1 ">Digital Precision</span>{" "}
                  <br />& Extreme Care for Every{" "}<br/>
                  <span className="highlight-text2 ">Dental Restoration</span>
                </h2>
              </div>
              <div className="row mt-4 g-3">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="d-flex d-md-block gap-3 align-items-center">
                    <Image
                      src="/images/about-icon11.webp"
                      className="img-box mb-4"
                      width={50}
                      height={50}
                      alt="dental-technicians"
                      style={{ padding: "5px", borderRadius: "10px" }}
                    ></Image>
                    <div className="d-block d-md-block">
                      <h3 className="fw-bold mb-2" style={{ color: "#00478a", fontSize: "16px !important" }}>
                        Expert Dental Technicians
                      </h3>
                      <p className="hero-txt">
                        Who leverage advanced digital technology to create precise, customized dental 
                        restorations tailored to each patient’s needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="d-flex d-md-block gap-3 align-items-center">
                    <Image
                      src="/images/about-icon22.webp"
                      className="img-box mb-4"
                      width={45}
                      height={45}
                      alt="about-icon2"
                      style={{ padding: "5px", borderRadius: "10px" }}
                    ></Image>
                    <div className="d-block d-md-block">
                      <h3 className="fw-bold mb-2" style={{ color: "#00818a", fontSize: "16px !important" }}>
                        Premium Quality Products
                      </h3>
                      <p className="hero-txt">
                        Manufactured using state-of-the-art digital processes, ensuring durability, accuracy, and natural aesthetics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center text-md-start mt-3">
                  <Link href="/about-us/">
                    <button className="btn btn-primary" style={{ backgroundColor: "#00478a", border: "none" }}>
                      Discover Our Story
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section space-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-11 col-xl-5 col-lg-5 order-1 order-lg-0">
              <div className="text-left">
                <h2 className="pt-4 heading1">
                  Committed to Excellence as a Fully{" "}
                  <span className="highlight-text1">
                    Digital Dental Lab{" "}
                  </span>{" "}
                  in USA
                </h2>
              </div>
              <div className="feature-box-left text-left order-0 order-lg-1">
                <p className="pt-2">
                  We are dedicated to delivering unparalleled precision and quality in every restoration. 
                  Our commitment to excellence positions us as a trusted partner for dental professionals & 
                  dentist labs across USA.
                </p>
                <p>
                  Utilizing cutting-edge digital technologies, we ensure that each prosthetic is crafted to 
                  meet the highest standards of fit and aesthetics.
                </p>
              </div>
            </div>
            <div className="col-11 col-xl-6 col-lg-6">
              <Image
                src="/images/section2.webp"
                className="m-auto d-flex img-fluid"
                width={500}
                height={200}
                alt="digital-image"
                style={{ borderRadius: "10px" }}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section
        className="pricing-plans space-section"
      >
        <div className="container text-center position-relative">
          <h2 className="heading1 mb-4 text-center"> Our Most <span className="highlight-text1">Premium Product</span></h2>
          <div className="row g-4 ">
            <Link href="/product/digital-workflow/" className="text-decoration-none col-12 col-lg-4 col-md-6">
              <div className=" product-row position-relative">
                <Image
                  src="/images/E-max-hm.webp"
                  alt="Example Image"
                  width={306}
                  height={190}
                  className=""
                />
                <span className="product-row-label">E-max CAD</span>
              </div>
            </Link>
            <Link href="/product/crowns-bridges/" className="text-decoration-none col-12 col-lg-4 col-md-6">
              <div className="img-middil product-row position-relative">
                <Image
                  src="/images/crown-hm.webp"
                  alt="Example Image"
                  width={306}
                  height={190}
                  className=""
                />
                <span className="product-row-label">Crown & Bridges</span>
              </div>
            </Link>
            <Link href="/product/implants/" className="text-decoration-none col-12 col-lg-4 col-md-6">
              <div className="product-row">
                <Image
                  src="/images/implant-hm1.webp"
                  alt="Example Image"
                  width={306}
                  height={190}
                  className=""
                />
                <span className="product-row-label">Implant</span>
              </div>
            </Link>
          </div>
          <Image
            src="/images/dot.webp"
            alt="Example Image"
            width={300}
            height={450}
            className="pvector1"
          />
          <Image
            src="/images/dot.webp"
            alt="Example Image"
            width={300}
            height={450}
            className="pvector2"
          />
        </div>
      </section>
      <section className="services-section space-section">
        <div className="container d-flex">
          <div className=" services_grid g-4 card-container row position-relative  mt-2 mb-0">
            <h2 className="services-title home-title heading1 mb-2 mt-0">
              Why USA Dentists Choose Our <span className="highlight-text1">Digital Dental Services?</span>
            </h2>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="intro__item">
                <Image
                  src="/images/professional.png"
                  className="img-fluid "
                  width={40}
                  height={50}
                  alt="ADDL at a glance"
                ></Image>
                <h3 className="intro__item-title my-2 my-sm-3">
                  Certified Lab Standards
                </h3>
                <div className="line"></div>
                <p className="intro__item-desc">
                  Our laboratory maintains ISO and FDA certified, as well each product is CE-marked for 
                  material excellence and is compliant with all applicable US quality regulations.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="intro__item">
                <Image
                  src="/images/time.png"
                  className="img-fluid "
                  width={40}
                  height={50}
                  alt=""
                ></Image>
                <h3 className="intro__item-title my-2 my-sm-3">
                  Fast Turnaround Time
                </h3>
                <div className="line"></div>
                <p className="intro__item-desc">
                  Thanks to our streamlined digital workflows, dental restorations are delivered quickly, 
                  helping you reduce patient wait times and keep your schedule on track.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="intro__item">
                <Image
                  src="/images/cartificate.png"
                  className="img-fluid "
                  width={40}
                  height={50}
                  alt=""
                ></Image>
                <h3 className="intro__item-title my-2 my-sm-3">
                  Professional Clinical Advice
                </h3>
                <div className="line"></div>
                <p className="intro__item-desc">
                  Our team of specialist dental technicians assists you in selecting optimal materials 
                  and designs for even the most complex cases, ensuring superior clinical outcomes.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="intro__item">
                <Image
                  src="/images/cost.png"
                  className="img-fluid "
                  width={40}
                  height={50}
                  alt=" "
                ></Image>
                <h3 className="intro__item-title my-2 my-sm-3">
                  Cost-Effective Solutions
                </h3>
                <p className="line"></p>
                <p className="intro__item-desc">
                  By leveraging automated design and nesting, we minimize material waste and reduce labor costs, delivering premium restorations at highly competitive rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Home1></Home1>
      <section className="support-section space-section">
        <div className="container pt-2">
          <div className="row  d-flex flex-row justify-content-center align-items-center">
            <div className="col-12 col-lg-6 ss-header">
              <div className="hero-subheading">Smile-Saving Support</div>
              <h2 className="step_heading">
                Our After-Sales Services for Your Dental Lab Needs
              </h2>
            </div>
            <div className="col-12 col-lg-6 ss-header">
              <div className="w-40">
                We’re committed to delivering exceptional post-delivery support to meet your clinical expectations. Our comprehensive service model includes five specialized touchpoints to ensure precision, timely communication, and complete satisfaction with every restoration we fabricate.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-10 order-1 order-sm-0 col-lg-3 col-sm-3">
              <span className="process-img n1">01</span>
            </div>
            <div className="col-10 order-2 order-lg-0 col-sm-8">
              <h3 className="process-title ">Expert Consultation & Advisory</h3>
              <p className="process-subtitle">
                Our team of experienced professionals is dedicated to providing
                expert guidance on our extensive range of materials, products,
                and services. We offer personalized consultations to ensure you
                receive the most suitable solutions for your specific cases,
                helping you achieve optimal results with precision and
                efficiency.
              </p>
            </div>
            <div className="col-10 order-4 order-lg-0 col-sm-8">
              <h3 className="process-title text-sm-start text-lg-end">
                Tailored Customization
              </h3>
              <p className="process-subtitle text-sm-start text-lg-end">
                We understand that every patient is unique, which is why we
                offer fully customized dental solutions designed to meet the
                precise needs of each case. Our commitment to precision and
                personalization ensures optimal fit, function, and aesthetics
                for superior patient outcomes.
              </p>
            </div>
            <div className="col-10 order-3 order-lg-0 col-sm-3">
              {/* images2 */}
              <span className="process-img text-sm-start text-lg-end n2">02</span>
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-5">
              <span className="process-img n3">03</span>
            </div>
            <div className="col-10 col-sm-8 order-lg-0 order-6">
              <h3 className="process-title">Expert Clinical Guidance</h3>
              <p className="process-subtitle">
                Complex clinical cases require precision and expertise. Our team
                of highly skilled clinical advisors, with extensive knowledge in
                both clinical and technological aspects of dentistry, is here to
                support you. We provide expert recommendations on treatment
                planning, material selection, and procedural strategies,
                ensuring the successful completion of even the most challenging
                cases.
              </p>
            </div>
            <div className="col-10 col-sm-8 order-lg-0 order-8">
              <h3 className="process-title text-sm-start text-lg-end">
                Rapid Turnaround Times
              </h3>
              <p className="process-subtitle text-sm-start text-lg-end">
                We recognize the importance of efficiency in patient care, which
                is why we prioritize fast and reliable turnaround times for all
                our products. Our streamlined processes and advanced technology
                ensure timely delivery without compromising quality or
                precision.
              </p>
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-7">
              <span className="process-img text-sm-start text-lg-end n4">04</span>
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-9">
              <span className="process-img n5 ">05</span>
            </div>
            <div className="col-10 col-sm-8 order-lg-0 order-10">
              <h3 className="process-title">
                Uncompromising Quality Assurance
              </h3>
              <p className="process-subtitle">
                At ADDL, we are committed to the highest standards of
                quality by utilizing cutting-edge technology and premium
                materials to meet your exact specifications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
