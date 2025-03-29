import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "../public/css/contact.css";
import "../public/css/styles.css";
import "../public/css/Home.css";
import "../public/css/common.css";
import Home1 from "@/component/Home1";
// import Common from "@/component/Common";

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
      <section className="p-0 parallax overlap-height">
        <div className="lqd-vbg-wrap">
          <div className="lqd-vbg-inner">
            <span className="lqd-vbg-loader"></span>
            <div
              className="inline-YTPlayer"
              style={{ position: "relative", maxWidth: "100%" }}
            >
              <div
                className="lqd-vbg-video mb_YTPlayer isMuted"
                data-video-bg="true"
                data-youtube-options='{"videoURL":"https://www.youtube.com/embed/Fv4YYSRsRUg"}'
                id="YTP_1742270005228"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  overflow: "hidden",
                  height: "0px",
                }}
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
                  <iframe
                    id="iframe_YTP_1742270005228"
                    className="playerBox"
                    style={{
                      position: "absolute",
                      zIndex: 0,
                      width: "2024px",
                      height: "1138.2px",
                      top: "0px",
                      left: "0px",
                      overflow: "hidden",
                      opacity: 1,
                      userSelect: "none",
                      marginTop: "-106.706px",
                      marginLeft: "-379px",
                      maxWidth: "initial",
                    }}
                    frameBorder="0"
                    allowFullScreen=""
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="c1"
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/?modestbranding=1&amp;autoplay=0&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;version=3&amp;playerapiid=iframe_YTP_1742270005228&amp;origin=https%3A%2F%2Fwww.cerameus.com&amp;allowfullscreen=true&amp;wmode=transparent&amp;iv_load_policy=3&amp;cc_load_policy=0&amp;playsinline=0&amp;html5=1&amp;widgetid=1&amp;forigin=https%3A%2F%2Fwww.cerameus.com%2F&amp;aoriginsup=1&amp;vf=3"
                    unselectable="on"
                  ></iframe>
                  <div
                    className="YTPOverlay"
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      cursor: "pointer",
                    }}
                  ></div>
                </div>
                <div className="inlinePlayButton" style={{ display: "none" }}>
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
               
                <span className="text-gradient-light-purple-light-orange font-weight-900 d-inline-block">
                Unparalleled Quality
                </span>
                {" "} in dental lab solutions!
              </h2>
              <div className="alt-font text-large font-weight-500 text-uppercase letter-spacing-2px d-flex">
                <span className="flex-shrink-0 w-40px h-1px bg-white opacity-6 align-self-center margin-25px-right"></span>
                <span className="flex-grow-1 text-white opacity-6">
                Our only vision is to put endless smiles on every Face
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="About-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-xl-5 col-md-7 col-lg-6 mt-5 d-flex justify-content-center align-items-center">
              <Image
                src="/images/ManuBansal1.jpg"
                className="img-fluid about-img1"
                width={200}
                height={300}
                alt=" "
              ></Image>
            </div>
            <div className="col-11 col-xl-7 col-md-5 col-lg-6 ">
              <div className="text-left">
                <div className="hero-subheading mt-5">Dental Technicians</div>
                <h2 className="double-heading">
                At ADDL, We Believe Crafting Perfect Smiles with <span className="highlight-text1 ">Digital Precision</span>  and <span className="highlight-text2 ">Flawless Integrity</span> 
                  {/* ADDL sets the{" "}
                  <span className="highlight-text1 ">
                    standard for excellence
                  </span>
                  , providing precision-crafted dental restorations with{" "}
                  <span className="highlight-text2 ">
                    uncompromising quality
                  </span>
                  —because every smile deserves perfection. */}
                </h2>
              </div>
              {/* <Image src="/images/about-img4.png" className="img-fluid about-img3" width={100} height={100} alt="about-img3"></Image> */}
              {/* <img
                src="images/about-img4.png"
                className="img-fluid about-img3"
              ></img> */}
              <div className="row  mt-4 g-3">
                <div className="col-12 col-md-6 col-lg-6">
                  <Image
                    src="/images/about-icon11.png"
                    className="img-box mb-4"
                    width={45}
                    height={45}
                    alt=" "
                  ></Image>
                  <p className="fw-bold mb-2" style={{ color: "#00478a" }}>
                    Dental Technicians
                  </p>
                  <p className="hero-txt">Countless smiles enhanced by our skilled dental technicians. Trust our expertise for flawless results!</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <Image
                    src="/images/about-icon22.png"
                    className="img-box mb-4"
                    width={45}
                    height={45}
                    alt="about-icon2"
                  ></Image>
                  <p className="fw-bold mb-2" style={{ color: "#00818a" }}>
                    The Highest Quality Products.
                  </p>
                  <p className="hero-txt">With years of excellence  our professional team delivering top-quality dental care.</p>
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
            <div className="col-11 col-xl-4 col-lg-5 order-1 order-lg-0">
              <div className="text-left">
                <h2 className="pt-4">

                Optimize Your Workflow with <span className="highlight-text1 ">Innovative, Advanced and Premium </span>  Dental Lab Solutions
                  {/* <span className="highlight-text2 fw-bold pt-4">
                    Optimize efficiency and streamline
                  </span>{" "}
                  {""}
                  your workflow with a full spectrum of premium dental lab
                  solutions—all from a single trusted partner. */}
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
                  className="hero-video mb-4"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="services-section">
        <div className="container">
          <h2 className="services-title mb-3">ADDL at a glance</h2>
          <div className=" services_grid g-4 card-container row position-relative">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <div className="intro__item">
              <Image
                src="/images/Ce.png"
                className="img-fluid "
                width={40}
                height={50}
                alt=" "
              ></Image>
                <h2 className="intro__item-title my-2 my-sm-3">
                  Professional expert clinical advice
                </h2>
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
                src="/images/Ft.png"
                className="img-fluid "
                width={40}
                height={50}
                alt=" "
              ></Image>


                <h2 className="intro__item-title my-2 my-sm-3">
                  Fast turnaround times
                </h2>
                <div className="line"></div>
                <p className="intro__item-desc">
                  At Cerameus, your satisfaction is our priority! We deliver
                  top-quality results with fast turnaround times, ensuring
                  excellence is always achieved effortlessly. We believe great
                  results should be both quick and seamless for you.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="intro__item">

              <Image
                src="/images/Pe.png"
                className="img-fluid "
                width={40}
                height={50}
                alt=" "
              ></Image>


                <h2 className="intro__item-title my-2 my-sm-3">
                  Certification
                </h2>
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
                src="/images/Rc.png"
                className="img-fluid "
                width={40}
                height={50}
                alt=" "
              ></Image>

                <h2 className="intro__item-title my-2 my-sm-3">
                  Reduced costs
                </h2>
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
      {/* <Common></Common> */}
      <Home1></Home1>

      {/* <Support></Support> */}
      {/* <section className="trusted-dental-lab">

        <div className="container">
          <div className="row about-container">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="images-home-section">
                <div className="image-top text-center">
                  <Image
                    src="/images/about-ace.jpg"
                    alt="about"
                    width={310}
                    height={200}
                    className="img-fluid"
                  />
                </div>
                <div className="image-bottom">
                  <Image
                    src="/images/dental-ace.jpg"
                    alt="about1"
                    width={300}
                    height={200}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-6">
              <div className="about-text">
                <div className="hero-subheading">Smile-Saving Support </div>
                <h2 className="main-heading-with-double-color mt-0" style={{ width: "69%" }}>
                  <span className="highlight-text2">Comprehensive Support</span> for Your Dental Lab Needs
                </h2>
                <p >
                  We are committed to delivering outstanding post-purchase care, offering five key solutions to
                  enhance your experience and meet all your dental lab requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section> */}
      <div className="container">
        <div className="row  d-flex flex-row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 ss-header">
            <div className="hero-subheading">Smile-Saving Support</div>
            <div className="step_heading">Our After-Sales Services for Your Dental Lab Needs</div>
          </div>
          <div className="col-12 col-lg-6 ss-header">
            <div className="w-40">
              We are committed to providing exceptional after-sale services to meet all your dental lab needs. We offer five ways to ensure you receive the best possible experience with our products:
            </div>

          </div>
        </div>
      </div>

      <section className="process-section">

        <div className="container">


          <div className="row align-items-center justify-content-center">
            <div className="col-10 order-1 order-sm-0 col-lg-3 col-sm-3">
              <h1 className="process-img">01</h1>
            </div>
            <div className="col-10 order-2 order-lg-0 col-sm-8">
              <h2 className="process-title ">Expert Consultation & Advisory</h2>
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
              <h2 className="process-title text-sm-start text-lg-end">
                Tailored Customization
              </h2>
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
              <h1 className="process-img text-sm-start text-lg-end">02</h1>
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-5">
              <h1 className="process-img">03</h1>
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
              <h2 className="process-title text-sm-start text-lg-end">
                Rapid Turnaround Times
              </h2>
              <p className="process-subtitle text-sm-start text-lg-end">
                We recognize the importance of efficiency in patient care, which
                is why we prioritize fast and reliable turnaround times for all
                our products. Our streamlined processes and advanced technology
                ensure timely delivery without compromising quality or
                precision.
              </p>
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-7">
              <h1 className="process-img text-sm-start text-lg-end">04</h1>
            </div>
            <div className="col-10 col-sm-3 order-lg-0 order-9">
              <h1 className="process-img">05</h1>
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
