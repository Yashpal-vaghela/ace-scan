import { React } from "react";
import "../public/css/support.css";
import "../public/css/styles.css";
import Image from "next/image";

const support = () => {
  return (
    <>
      <section
        className="first-section"
        style={{ paddingTop: "120px", paddingBottom: "40px" }}
      >
        <div className="container">
          <div className="row gap-3 justify-content-lg-start position-relative">
            <Image
              src="/images/vector-img6.png"
              className="img-fluid vector-img1"
              width={100}
              height={100}
              alt="vector-img1"
            ></Image>
            <div className="col-lg-5">
              <div className="support1-wrapper">
                <h2>{`ADDL Support Team Is Always There For You, Whenever You Need Us.`}</h2>
                <p>{`At ADDL, we believe in quality production, digital technology,and an efficient workflow. That's why our support team is always available to assist you whether it's about your order, product inquiries, pricing, or any business-related questions. We are here whenever you need us.`}</p>
              </div>
            </div>
            <div className="col-5">
              <div className="d-block support1_2_wrapper">
                <div className="support1_2_img">
                  <Image
                    src="/images/33.jpg"
                    className="img-fluid mb-3"
                    width={500}
                    height={240}
                    alt="support-img"
                  ></Image>
                </div>
                <Image
                  src="/images/vector-img8.png"
                  className="img-fluid vector-img2"
                  width={500}
                  height={240}
                  alt="vector-img2"
                ></Image>
                <div className="support1_2_img">
                  <Image
                    src="/images/support-img5.png"
                    className="img-fluid"
                    width={100}
                    height={100}
                    alt="support-img5"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section position-relative">
        <img
          src="/images/support-vector.png"
          className="img-fluid experience-vector"
        ></img>
        <div className="container">
          <div className="row align-items-center  justify-content-center">
            <div className="col-lg-7">
              {/* content */}
              <div className="experience-section-main-content">
                <h2>Deep-Rooted Tradition</h2>
                <div className="d-flex experience-main-content-wrapper gap-4 justify-content-between">
                  <div className="d-block">
                    <h1 className="mb-0">14+</h1>
                    <h2>Years experience.</h2>
                  </div>
                  <p>
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
            </div>
            <div className="col-lg-4 position-relative">
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
    </>
  );
};

export default support;
