import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const support = () => {
  const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Support & Assistance | Ace Digital Dental Laboratory",
        "url": "https://acedigitaldentallaboratory.com/support/",
        "description": "Need help with your dental lab cases or services? ADDL's support team is here to assist you with case tracking, submissions, and technical questions. Contact us today!",
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
          "name": "Support",
          "item": "https://acedigitaldentallaboratory.com/support/"
        }
      ]
  }
  return (
    <>
      <Head>
        <title>Support & Assistance | Ace Digital Dental Laboratory</title>
        <meta name="description" content="Need help with your dental lab cases or services? ADDL's support team is here to assist you with case tracking, submissions, and technical questions. Contact us today!"/>
        <link rel="canonical" href="https://acedigitaldentallaboratory.com/support/" /> 
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Support & Assistance | Ace Digital Dental Laboratory" />
        <meta name="og:description" content="Need help with your dental lab cases or services? ADDL's support team is here to assist you with case tracking, submissions, and technical questions. Contact us today!"/>
        <meta property="og:url" content="https://acedigitaldentallaboratory.com/support/" />
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
                  <source src="https://d1ytpjko2pk6h2.cloudfront.net/Abutment+Milling.webm" type="video/webm" />
                  <source src="https://d1ytpjko2pk6h2.cloudfront.net/Abutment+Milling.mp4" type="video/mp4" />
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
                {/* <span className="text-gradient-light-purple-light-orange font-weight-900 d-inline-block"> */}
                Support
                {/* </span> */}
              </h1>
              <div className="alt-font text-large font-weight-500 text-uppercase letter-spacing-2px d-flex">
                <span className="flex-shrink-0 w-40px h-1px bg-white opacity-6 align-self-center margin-25px-right"></span>
                <span className="flex-grow-1 video-desc opacity-6">
                  Need Support? We Are with you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="first-section"
        style={{ paddingTop: "120px", paddingBottom: "40px" }}
      >
        <div className="black-overlays"></div>
        <div className="container " style={{ paddingTop: "20px" }}>
          <div className="row gap-lg-3 gap-md-0 gap-sm-0 gap-2 justify-content-center justify-content-sm-center">
            <div className="col-lg-5 col-md-6 col-sm-5 col-11 d-flex flex-column justify-content-end">
              <div className="support1-wrapper">
                <h2>ADDL Support Team Is Always There For You, Whenever You Need Us.</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-7 col-11">
              <div className="d-block text-end image-support-card">
                <p>{`At ADDL, we believe in quality production, digital technology,and an efficient workflow. That's why our support team is always available to assist you whether it's about your order, product inquiries, pricing, or any business-related questions. We are here whenever you need us.`}</p>
                <div className="support-img-card">
                  <Image
                    src="/images/sup1.webp"
                    className="img-fluid support-inner-image"
                    width={250}
                    height={500}
                    alt="support-img5"
                  ></Image>
                  <div
                    className=" mb-0 fw-bold text-center mt-2 "
                    style={{ color: "#005e8a" }}
                  >
                    ACE Digital Dental Lab.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-section" style={{ paddingTop: "120px" }}>
        <div className="container position-relative pb-5">
          <Image src="/images/vector-support6.webp" className="img-fluid vector-support6" alt="vector-support6" width={100} height={100}></Image>
          <div className="row mb-5 justify-content-center align-items-lg-start" >
            <div className="support1-wrapper">
              <h2 className="support-text" style={{ color: "#005e8a" }}>In a hurry? We've got you covered.</h2>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-10 col-11">
              <Image src="/images/support-team-img10.webp" className="support-team-img6 img-fluid" alt="support-team" width={344} height={250}></Image>
              {/* <img
                src="https://i.pinimg.com/736x/c0/dd/57/c0dd57783ed27510197f61ec2b3bdace.jpg"
                className="support-team-img6 img-fluid"
              ></img> */}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-10 col-11">
              <p>
                Our dedicated support team is committed to ensuring smooth and
                efficient service, prioritizing time-saving solutions and quick
                delivery. With a focus on responsiveness and reliability, they
                work closely with you to meet deadlines and streamline
                processes, helping to deliver high-quality dental restorations
                in the shortest possible time. Their expertise ensures that
                every step is handled with care, so you can rely on fast and
                efficient results without compromising on quality.
              </p>
              <Link href="/contact-us/">
                <button className="btn btn-getInTouch">Get In Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section position-relative">
        <Image src="/images/vector-img.webp" className="img-fluid experience-vector" width={2350} height={100} alt="experience-vector"></Image>
        <div className="container">
          <div className="row align-items-center mb-5 justify-content-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
              <div className="experience-section-main-content">
                <h2 className="txt-black">Deep-Rooted Tradition</h2>
                <div className="d-flex experience-main-content-wrapper gap-4 gap-md-2  justify-content-between">
                  <div className="d-block">
                    <span className="mb-0 numberborder" >14+</span>
                    <div className="txt-black experinece-txt">Years experience.</div>
                  </div>
                  <p className="d-none d-sm-none d-md-block">
                    Our support team brings a wealth of experience and expertise
                    to every interaction, ensuring that you receive the best
                    possible service. With years of industry knowledge, they are
                    equipped to handle any questions or challenges that may
                    arise, providing expert guidance and personalized solutions.
                    Their in-depth understanding of the process allows them to
                    offer valuable insights, ensuring smooth and efficient
                    outcomes. You can count on our team to deliver reliable,
                    professional support that enhances your experience every
                    step of the way.
                  </p>
                </div>
              </div>
              <p className="d-block d-sm-block d-md-none">
                Our support team brings a wealth of experience and expertise to
                every interaction, ensuring that you receive the best possible
                service. With years of industry knowledge, they are equipped to
                handle any questions or challenges that may arise, providing
                expert guidance and personalized solutions. Their in-depth
                understanding of the process allows them to offer valuable
                insights, ensuring smooth and efficient outcomes. You can count
                on our team to deliver reliable, professional support that
                enhances your experience every step of the way.
              </p>
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 col-12 order-1 order-md-0 position-relative">
              <Image className="img-fluid experience-vector1" src="/images/vector-img.webp" width={2350} height={3155} alt="experience-vector"></Image>
              <Image src="/images/inches.webp" className="img-fluid" alt="experience-img" width={467} height={637}></Image>
              <div className="addl-content">
                <ul>
                  <li>ADDL</li>
                </ul>
                <p>ACE</p>
                <span>
                  Ace Digital <br/>
                  Dental Laboratory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="go-off-track-section">
        <Image src="/images/vector-support3.webp" className="d-none d-md-block support-vector1 img-fluid" width={1772} height={827} alt="support-vector3"></Image>
        <Image src="/images/vector-support4.webp" className="d-block d-md-none support-vector1 img-fluid" width={279} height={678} alt="support-vector1"></Image>
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-10 order-2 order-md-0">
              <Image src="/images/support-7.webp" className="d-none d-md-block go-off-track-img img-fluid" alt="support-4" width={648} height={648}></Image>
            </div>
            <div className="col-lg-6 col-md-6 col-11 order-1 order-md-0">
              <h2>Did Something Go Off Track?</h2>
              <p>
                Our support team is always ready to assist with any changes or
                customizations to your current order. Whether you need
                adjustments to the design, materials, or specifications, they
                work closely with you to ensure your needs are met. With their
                expertise and attention to detail, they make the process
                seamless, ensuring that your order is tailored to your exact
                requirements. You can rely on our team to provide quick,
                efficient solutions that meet your expectations, all while
                maintaining the highest quality standards.
              </p>
              <Image src="/images/support-7.webp" className="d-block d-md-none go-off-track-img img-fluid" width={648} height={648} alt="go-off-track-img"></Image>
              <div className="support-img-wrapper">
                <Image src="/images/support5.webp" alt="support-5" className="support-img img-fluid" width={580} height={265}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default support;
