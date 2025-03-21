// import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
// import styles from "@/styles/Style.module.css";
import "../public/css/contact.css";
import "../public/css/styles.css";
import Support from "./support";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const servicesData = [
    {
      id: 1,
      img: "/images/pro-3.png",
      title: "Professional expert clinical advice",
      subtitle:
        "Our Clinical Advisors provide personalized guidance with extensive clinical and lab expertise. They help you select the best materials and designs for complex cases, ensuring optimal results. Wherever you are, they're just a call away.",
    },
    {
      id: 2,
      img: "/images/clock8.png",
      title: "Fast turnaround times",
      subtitle:
        "At Cerameus, your satisfaction is our priority! We deliver top-quality results with fast turnaround times, ensuring excellence is always achieved effortlessly. We believe great results should be both quick and seamless for you.",
    },
    {
      id: 3,
      img: "/images/q-6.png",
      title: "Certification",
      subtitle:
        "All our lab work is designed and completed in Europe, adhering to the highest industry standards. We are ISO and FDA certified, ensuring exceptional quality and compliance. Each product is CE-marked for material excellence.",
    },
    {
      id: 4,
      img: "/images/cost-2.png",
      title: "Reduced costs",
      subtitle:
        " At ADDL, we focus on providing exceptional quality with cost-effective solutions, enhancing your clinical efficiency while maintaining excellence. Our goal is to optimize your outcomes without compromising on performance or value.",
    },
  ];
  return (
    <>
      {/* <section className="hero-section">
      <div className="container">
      </div>
    </section> */}

      <section className="p-0 parallax overlap-height">
        <div className="lqd-vbg-wrap">
          <div className="lqd-vbg-inner">
            <span className="lqd-vbg-loader"></span>
            <div
              className="inline-YTPlayer"
              style={{ position: 'relative', maxWidth: '100%' }}
            >
              <div
                className="lqd-vbg-video mb_YTPlayer isMuted"
                data-video-bg="true"
                data-youtube-options='{"videoURL":"https://www.youtube.com/embed/Fv4YYSRsRUg"}'
                id="YTP_1742270005228"
                style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden', height: '0px' }}
              >
                <div
                  id="wrapper_YTP_1742270005228"
                  className="mbYTP_wrapper"
                  style={{ position: 'absolute', zIndex: 0, minWidth: '100%', minHeight: '100%', left: '0px', top: '0px', overflow: 'hidden', opacity: 1, backgroundImage: 'none', transitionDuration: '1000ms' }}
                >
                  <iframe
                    id="iframe_YTP_1742270005228"
                    className="playerBox"
                    style={{ position: "absolute", zIndex: 0, width: '2024px', height: '1138.2px', top: '0px', left: '0px', overflow: 'hidden', opacity: 1, userSelect: 'none', marginTop: '-106.706px', marginLeft: '-379px', maxWidth: 'initial' }}
                    frameBorder="0"
                    allowfullscreen=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    title="c1"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/?modestbranding=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=iframe_YTP_1742270005228&amp;origin=https%3A%2F%2Fwww.cerameus.com&amp;allowfullscreen=true&amp;wmode=transparent&amp;iv_load_policy=3&amp;cc_load_policy=0&amp;playsinline=0&amp;html5=1&amp;widgetid=1&amp;forigin=https%3A%2F%2Fwww.cerameus.com%2F&amp;aoriginsup=1&amp;vf=3"
                    unselectable="on"
                  ></iframe>
                  <div
                    className="YTPOverlay"
                    style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%', cursor: 'pointer' }}
                  ></div>
                </div>
                <div className="inlinePlayButton" style={{ display: 'none' }}>
                  P
                </div>
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
              <h2 className="alt-font text-white line-height-65px font-weight-500 letter-spacing-minus-1px margin-65px-bottom sm-line-height-50px sm-margin-25px-bottom">
                Dental lab work{" "}
                <span className="text-gradient-light-purple-light-orange font-weight-600 d-inline-block">
                  at its finest!
                </span>
              </h2>
              <div className="alt-font text-large font-weight-500 text-uppercase letter-spacing-2px d-flex">
                <span className="flex-shrink-0 w-40px h-1px bg-white opacity-6 align-self-center margin-25px-right"></span>
                <span className="flex-grow-1 text-white opacity-6">
                  Our only mission is to help you deliver happy smiles.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="About-section pt-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-11 col-xl-5 col-md-7 col-lg-6 mt-5">
              <Image
                src="/images/ManuBansal1.jpg"
                className="img-fluid about-img1"
                width={200}
                height={100}
                alt=" "
              ></Image>
            </div>
            <div className="col-11 col-xl-7 col-md-5 col-lg-6 ">
              <div className="text-left" >
                <div className="gradientBG mt-5">
                  Dental Technicians
                </div>
                <h2>
                  ADDL sets the{" "}
                  <span className="highlight-text1 fw-bold">standard for excellence</span>
                  , providing precision-crafted dental restorations with{" "}
                  <span className="highlight-text2 fw-bold">uncompromising quality</span>
                  —because every smile deserves perfection.
                </h2>
              </div>
              {/* <Image src="/images/about-img4.png" className="img-fluid about-img3" width={100} height={100} alt="about-img3"></Image> */}
              {/* <img
                src="images/about-img4.png"
                className="img-fluid about-img3"
              ></img> */}
              <div className="d-flex justify-content-center w-75 mt-4 gap-1">
                <div className="about-img-wrapper">
                  <Image src="/images/about-icon11.png" className="img-fluid " width={60} height={60}></Image>
                  {/* <img
                    src="images/about-icon11.png"
                    className="img-fluid w-75"
                  ></img> */}
                  <p style={{ color: "#7243A8" }}>Dental <br /> Technicians</p>
                </div>
                <div className="about-img-wrapper">
                  <Image src="/images/about-icon22.png" className="img-fluid" width={60} height={60} alt="about-icon2"></Image>
                  {/* <img
                    src="images/about-icon22.png"
                    className="img-fluid w-75"
                  ></img> */}
                  <p style={{ color: "#68ABA1" }}>
                    The Highest Quality Products.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-12">
              <button className="btn btn-readmore  mt-5 mb-4">Read More</button>
            </div> */}
          </div>
        </div>
      </section>
      <section className="feature-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-11 col-xl-4 col-lg-5"
            >
              <div className="text-left" >
                <h2>
                  <span className="highlight-text2 fw-bold">Optimize efficiency and streamline</span> {""}
                  your workflow with a full spectrum of premium dental lab
                  solutions—all from a single trusted partner.
                </h2>
              </div>
              <div className="feature-box-left text-left">

                <p>
                  ADDL delivers precision, innovation, and reliability in every
                  restoration, ensuring superior results for your practice.
                </p>
                <p>
                  With ADDL as your dedicated lab partner, you can focus on
                  patient care while we handle the rest.
                </p>
              </div>
            </div>
            <div
              className="col-11 col-xl-7 col-lg-6"
              style={{
                marginLeft: "8.33333333%",
              }}
            >
              <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                <iframe
                  src="https://player.vimeo.com/video/825080481?h=4fc285ebe3&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=true&muted=1"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  title="Cerameus | Dental Laboratory Services"
                  data-ready="true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <h2 className="services-title mb-3">Cerameus at a glance</h2>
          <div className="row services_grid g-4">
            {/* {servicesData?.map((data, index) => {
              return (
                
              );
            })} */}
            <div className="col-lg-3 col-md-6 col-12 d-flex  " >

              <div className="intro__item c1">
                

                {/* <div className="intro__item-img my-3 my-sm-4">
                  <Image
                    src="/images/pro-3.png"
                    alt="icon-img"
                    width={60}
                    height={60}
                  ></Image>
                </div> */}
                <h2 className="intro__item-title my-2 my-sm-3">
                Professional expert clinical advice
                </h2>
                <p className="intro__item-desc">Our Clinical Advisors provide personalized guidance with extensive clinical and lab expertise. They help you select the best materials and designs for complex cases, ensuring optimal results. Wherever you are, they're just a call away.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex  " >

              <div className="intro__item c2">
                {/* Black Overlay */}
                <div
                  className="ov"
                ></div>

                <div className="intro__item-img my-3 my-sm-4">
                  <Image
                    src="/images/clock8.png"
                    alt="icon-img"
                    width={60}
                    height={60}
                  ></Image>
                </div>
                <h2 className="intro__item-title my-2 my-sm-3">
                Fast turnaround times
                </h2>
                <p className="intro__item-desc">At Cerameus, your satisfaction is our priority! We deliver top-quality results with fast turnaround times, ensuring excellence is always achieved effortlessly. We believe great results should be both quick and seamless for you.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex  " >

              <div className="intro__item c3">
                {/* Black Overlay */}
                <div
                  className="ov"
                ></div>

                <div className="intro__item-img my-3 my-sm-4">
                  <Image
                    src="/images/q-6.png"
                    alt="icon-img"
                    width={60}
                    height={60}
                  ></Image>
                </div>
                <h2 className="intro__item-title my-2 my-sm-3">
                Certification
                </h2>
                <p className="intro__item-desc">All our lab work is designed and completed in Europe, adhering to the highest industry standards. We are ISO and FDA certified, ensuring exceptional quality and compliance. Each product is CE-marked for material excellence.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12 d-flex  ">

              <div className="intro__item c4">
                
                <div
                  className="ov"
                ></div>

                <div className="intro__item-img my-3 my-sm-4">
                  <Image
                    src="/images/cost-2.png"
                    alt="icon-img"
                    width={60}
                    height={60}
                  ></Image>
                </div>
                <h2 className="intro__item-title my-2 my-sm-3">
                Reduced costs
                </h2>
                <p className="intro__item-desc">At ADDL, we focus on providing exceptional quality with cost-effective solutions, enhancing your clinical efficiency while maintaining excellence. Our goal is to optimize your outcomes without compromising on performance or value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Support></Support>
      <section className="process-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-10 order-1 order-sm-0 col-lg-3">
              <h1 className="process-img">01</h1>
              {/* <Image src="/images/01.png" className="img-fluid process-img" width={150} height={150}></Image> */}
            </div>
            <div className="col-10 order-2 order-lg-0 col-sm-8">
              <h2 className="process-title">Expert Consultation & Advisory</h2>
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
              <h2 className="process-title text-sm-end">
                Tailored Customization
              </h2>
              <p className="process-subtitle text-sm-end">
                We understand that every patient is unique, which is why we
                offer fully customized dental solutions designed to meet the
                precise needs of each case. Our commitment to precision and
                personalization ensures optimal fit, function, and aesthetics
                for superior patient outcomes.
              </p>
            </div>
            <div className="col-10 order-3 order-lg-0 col-sm-3">
              {/* images2 */}
              <h1 className="process-img text-sm-end">02</h1>
              {/* <Image src="/images/02.png" className="img-fluid ms-auto d-block" width={150} height={150}></Image> */}
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-5">
              <h1 className="process-img">03</h1>
              {/* <Image src="/images/03.png" className="img-fluid" width={150} height={150}></Image> */}
            </div>
            <div className="col-10 col-sm-8 order-lg-0 order-6">
              <h2 className="process-title">Expert Clinical Guidance</h2>
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
              <h2 className="process-title text-sm-end">
                Rapid Turnaround Times
              </h2>
              <p className="process-subtitle text-sm-end">
                We recognize the importance of efficiency in patient care, which
                is why we prioritize fast and reliable turnaround times for all
                our products. Our streamlined processes and advanced technology
                ensure timely delivery without compromising quality or
                precision.
              </p>
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-7">
              <h1 className="process-img text-sm-end">04</h1>
              {/* <Image src="/images/04.png" className="img-fluid ms-auto d-block" width={150} height={150}></Image> */}
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-9">
              <h1 className="process-img">05</h1>
              {/* <Image src="/images/05.png" className="img-fluid" width={150} height={150}></Image> */}
            </div>
            <div className="col-10 col-sm-8 order-lg-0 order-10">
              <h2 className="process-title">
                Uncompromising Quality Assurance
              </h2>
              <p className="process-subtitle">
                At ACE-SCAN, we are committed to the highest standards of
                quality by utilizing cutting-edge technology and premium
                materials to meet your exact specifications. We partner
                exclusively with ISO 9001:2015-certified laboratories, ensuring
                precision, reliability, and excellence in every restoration.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
