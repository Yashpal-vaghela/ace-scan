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
        <div className="container position-relative" style={{paddingTop:'12px'}}>
          <div className="row gap-3 justify-content-lg-start position-relative">
            <div className="dots-vector-contain">
              <div className="dots-content" style={{top:"-20%"}}>
                  <div className="dots-vector"></div>
                  <div className="dots-wid" style={{background: "linear-gradient(150deg, #fff0 1.70596%, #fff 55.2707%)"}}></div>
              </div>
            </div>
            {/* <Image
              src="/images/vector-img6.png"
              className="img-fluid vector-img1"
              width={100}
              height={100}
              alt="vector-img1"
            ></Image> */}
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
      <section className="support-content">
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
      </section>
      <section className="experience-section position-relative">
        <img
          src="/images/support-vector.png"
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
            <div className="col-lg-4 col-md-5 col-sm-12 col-12 order-1 order-md-0 position-relative">
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
