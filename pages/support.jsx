import { React } from "react";
import "../public/css/support.css";
import "../public/css/styles.css";
import Image from "next/image";
import Link from "next/link";

const support = () => {
  return (
    <>
      <section
        className="first-section"
        style={{ paddingTop: "120px", paddingBottom: "40px" }}
      >
        <div className="black-overlays"></div>
        <div className="container " style={{ paddingTop: "20px" }}>
          <div className="row gap-3 justify-content-lg-start ">
            {/* <div className="dots-vector-contain">
              <div className="dots-content" style={{top:"-20%"}}>
                  <div className="dots-vector"></div>
                  <div className="dots-wid" style={{background: "linear-gradient(150deg, #fff0 1.70596%, #fff 55.2707%)"}}></div>
              </div>
            </div> */}
            {/* <Image
              src="/images/vector-img6.png"
              className="img-fluid vector-img1"
              width={100}
              height={100}
              alt="vector-img1"
            ></Image> */}
            <div className="col-lg-5 d-flex flex-column justify-content-end">
              <div className="support1-wrapper">
                <h2>{`ADDL Support Team Is Always There For You, Whenever You Need Us.`}</h2>
              </div>
            </div>
            <div className="col-5">
              <div className="d-block text-end image-support-card">
                {/* <div className="support-img-card">
                  <Image
                    src="/images/support-img1.png"
                    className="img-fluid "
                    width={500}
                    height={240}
                    alt="support-img"
                  ></Image>
                </div> */}
                {/* <Image
                  src="/images/vector-img8.png"
                  className="img-fluid vector-img2"
                  width={500}
                  height={240}
                  alt="vector-img2"
                ></Image> */}
                <p>{`At ADDL, we believe in quality production, digital technology,and an efficient workflow. That's why our support team is always available to assist you whether it's about your order, product inquiries, pricing, or any business-related questions. We are here whenever you need us.`}</p>
                <div className="support-img-card">
                  <Image
                    src="/images/sup1.jpg"
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
      {/* <section className="support-content">
        <div className="container">
         <div className="row justify-content-center mb-5">
          <div className="col-lg-5 col-xl-4 col-md-5 col-sm-12 col-12">
            <h2 className="support-team-title mb-3 mb-sm-4">In A Hurry? We've Got You Covered.</h2>
          </div>
          <div className="col-lg-7 col-xl-6 col-md-7 col-sm-7 col-7 order-3 order-md-0 px-sm-0 ps-md-0">
            <img src="/images/support-team-img2.png" className="img-fluid support-team-img"></img>
          </div>
          <div className="col-lg-5 col-xl-4 col-md-5 col-sm-5 col-5 order-2 order-md-0 px-sm-0 pe-md-0">
            <img src="/images/support-team-img1.png" className="img-fluid support-team-img1 p-0" ></img>
          </div>
          <div className="col-lg-7 col-xl-6 col-md-7 col-md-7 col-12 order-4 order-md-0">
            <p className="support-team-description">Our dedicated support team is committed to ensuring smooth and efficient service, prioritizing time-saving solutions and quick delivery. With a focus on responsiveness and reliability, they work closely with you to meet deadlines and streamline processes, helping to deliver high-quality dental restorations in the shortest possible time. Their expertise ensures that every step is handled with care, so you can rely on fast and efficient results without compromising on quality.</p>
            <button className="btn btn-getInTouch d-flex mx-auto">Get In Touch</button>
          </div>
         </div>
        </div>
      </section> */}
      <section className="third-section" style={{ paddingTop: "150px" }}>
        <div className="container position-relative pb-5">
          <div className="dots-vector-contain">
            <div
              className="dots-content"
              style={{ top: "0%", zIndex: "1", width: "50%" }}
            >
              <div
                className="dots-vector"
                style={{
                  width: "100%",
                  height: "75%",
                  backgroundImage:
                    "radial-gradient(#fff 1.3px, #0000 1.5px), radial-gradient(#fff 1px, #23545400 1px)",
                  zIndex: "2",
                  position: "relative",
                }}
              ></div>
              <div
                className="dots-wid"
                style={{ background: "none" }}
                // style={{transform:"rotate(153deg)"}}
                //  style={{background: "linear-gradient(150deg, #fff0 1.70596%, #fff 55.2707%)"}}
              ></div>
            </div>
          </div>
          {/* <img src="/images/line-vector2.png" className="img-fluid line-vector"></img> */}
          <img
            src="/images/vector-support6.png"
            className=" img-fluid vector-support6"
          ></img>
          <div className="row mb-5">
            <h2 className="support-text">In a hurry? We've got you covered.</h2>
            <div className="col-6">
              <img
                src="/images/support-team-img1.png"
                className="support-team-img6 img-fluid"
              ></img>
            </div>
            <div className="col-4">
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
              <Link href="/contactUs">
                <button className="btn btn-getInTouch">Get In Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section position-relative">
        <img
          src="/images/vector-img.png"
          className="img-fluid experience-vector"
        ></img>
        <div className="container">
          <div className="row align-items-center mb-5 justify-content-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
              {/* content */}
              <div className="experience-section-main-content">
                <h2>Deep-Rooted Tradition</h2>
                <div className="d-flex experience-main-content-wrapper gap-4 gap-md-2  justify-content-between">
                  <div className="d-block">
                    <h1 className="mb-0">14+</h1>
                    <h2>Years experience.</h2>
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
              <img
                src="/images/vector-img.png"
                className="img-fluid experience-vector1"
              ></img>
              <img src="/images/experience-img.png" className="img-fluid"></img>
              <div className="addl-content">
                <ul>
                  <li>ADDL</li>
                </ul>
                <h5>ACE</h5>
                <span>
                  Ace Digital <br></br>
                  Dental Laboratory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="go-off-track-section">
        <div className="container">
          {/* <img src="/images/vector-support.png" className="img-fluid"></img> */}
          <img
            src="/images/vector-support3.png"
            className="d-none d-md-block support-vector1 img-fluid"
          ></img>
          <img
            src="/images/vector-support4.png"
            className="d-block d-md-none support-vector1 img-fluid"
          ></img>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-10 order-2 order-md-0">
              {/* <h2 className="d-block d-md-none">Did Something Go Off Track?</h2> */}
              <img
                src="/images/support-4.png"
                className="d-none d-md-block go-off-track-img img-fluid"
              ></img>
            </div>
            <div className="col-lg-6 col-md-6 col-10 order-1 order-md-0">
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
              <img
                src="/images/support-4.png"
                className="d-block d-md-none go-off-track-img img-fluid"
              ></img>
              <div className="support-img-wrapper">
                {/* <img src="/images/support3.png" className="img-fluid"></img> */}
                <img
                  src="/images/support-5.png"
                  className="support-img img-fluid"
                ></img>
              </div>
            </div>
            {/* <img src="/images/vector-support.png" className="w-25 support-vector1 img-fluid"></img> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default support;
