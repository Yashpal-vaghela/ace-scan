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
              <h1 className="video-title">
                Unparalleled Quality in dental lab solutions!
              </h1>
              <div className="text-large font-weight-500 text-uppercase d-flex">
                <span className="flex-shrink-0 w-40px h-1px bg-white opacity-6 align-self-center margin-25px-right"></span>
                <span className="flex-grow-1 opacity-6 video-desc">
                  Our only vision is to put endless smiles on every Face
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
                alt=" "
              ></Image>
            </div>
            <div className="col-11 col-xl-7 col-md-5 col-lg-6 mt-3">
              <div className="text-left">
                <div className="hero-subheading mt-lg-5 mt-md-5 mt-2">
                  Dental Technicians
                </div>
                <h2 className="double-heading heading1">
                  At ADDL, We Believe Crafting Perfect Smiles with{" "}
                  <span className="highlight-text1 ">Digital Precision</span>{" "}
                  and{" "}
                  <span className="highlight-text2 ">Flawless Integrity</span>
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
                        Dental Technicians
                      </h3>
                      <p className="hero-txt">
                        Countless smiles enhanced by our skilled dental
                        technicians. Trust our expertise for flawless results!
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
                        The Highest Quality Products.
                      </h3>
                      <p className="hero-txt">
                        With years of excellence our professional team delivering
                        top-quality dental care.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center text-md-start mt-3">
                  <Link href="/about-us/">
                    <button className="btn btn-primary" style={{ backgroundColor: "#00478a", border: "none" }}>
                      Read More
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
                  Optimize Your Workflow with{" "}
                  <span className="highlight-text1">
                    Innovative, Advanced and Premium{" "}
                  </span>{" "}
                  Dental Lab Solutions
                </h2>
              </div>
              <div className="feature-box-left text-left order-0 order-lg-1">
                <p className="pt-2">
                  ADDL delivers precision, innovation, and reliability in every
                  restoration, ensuring superior results for your practice.
                </p>
                <p>
                  With ADDL as your dedicated lab partner, you can focus on
                  patient care while we handle the rest.
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
      <section className="services-section space-section">
        <div className="container d-flex">
          <div className=" services_grid g-4 card-container row position-relative  mt-2 mb-0">
            <h2 className="services-title home-title heading1 mb-2 mt-0">
              ADDL at a <span className="highlight-text1">glance</span>
            </h2>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="intro__item">
                <Image
                  src="/images/professional.png"
                  className="img-fluid "
                  width={40}
                  height={50}
                  alt=" "
                ></Image>
                <h3 className="intro__item-title my-2 my-sm-3">
                  Professional expert clinical advice
                </h3>
                <div className="line"></div>
                <p className="intro__item-desc">
                  Our Clinical Advisors provide personalized guidance with
                  extensive clinical and lab expertise. They help you select the
                  best materials and designs for complex cases, ensuring optimal
                  results. Wherever you are, they're just a call away.
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
                  Fast turnaround times
                </h3>
                <div className="line"></div>
                <p className="intro__item-desc">
                  At ADDL, your satisfaction is our priority! We deliver
                  top-quality results with fast turnaround times, ensuring
                  excellence is always achieved effortlessly. We believe great
                  results should be both quick and seamless for you.
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
                  Certification
                </h3>
                <div className="line"></div>
                <p className="intro__item-desc">
                  All our lab work is designed and completed in Europe, adhering
                  to the highest industry standards. We are ISO and FDA
                  certified, ensuring exceptional quality and compliance. Each
                  product is CE-marked for material excellence.
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
                  Reduced costs
                </h3>
                <p className="line"></p>
                <p className="intro__item-desc">
                  At ADDL, we focus on providing exceptional quality with
                  cost-effective solutions, enhancing your clinical efficiency
                  while maintaining excellence. Our goal is to optimize your
                  outcomes without compromising on performance or value.
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
                We are committed to providing exceptional after-sale services to
                meet all your dental lab needs. We offer five ways to ensure you
                receive the best possible experience with our products:
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
