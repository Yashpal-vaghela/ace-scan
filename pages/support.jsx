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
          <div className="row gap-lg-3 gap-md-0 gap-sm-0 gap-2 justify-content-center justify-content-sm-center">
            <div className="col-lg-5 col-md-6 col-sm-5 col-11 d-flex flex-column justify-content-end">
              <div className="support1-wrapper">
                <h2>{`ADDL Support Team Is Always There For You, Whenever You Need Us.`}</h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-7 col-11">
              <div className="d-block text-end image-support-card">
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
      <section className="third-section" style={{ paddingTop: "120px" }}>
        <div className="container position-relative pb-5">
          <Image src="/images/vector-support6.png" className="img-fluid vector-support6" alt="vector-support6" width={100} height={100}></Image>
          <div className="row mb-5 justify-content-center align-items-lg-start" >
            <div className="support1-wrapper">
              <h2 className="support-text" style={{color:"#005e8a"}}>In a hurry? We've got you covered.</h2>
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-10 col-11">
              <Image src="/images/support-team-img10.jpg" className="support-team-img6 img-fluid" alt="support-team" width={344} height={250}></Image>
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
              <Link href="/contactUs">
                <button className="btn btn-getInTouch">Get In Touch</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="experience-section position-relative">
        <Image src="/images/vector-img.png" className="img-fluid experience-vector" width={2350} height={100} alt="experience-vector"></Image>
        <div className="container">
          <div className="row align-items-center mb-5 justify-content-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 ">
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
              <Image className="img-fluid experience-vector1" src="/images/vector-img.png" width={2350} height={3155} alt="experience-vector"></Image>
              <Image src="/images/experience-img.png" className="img-fluid" alt="experience-img" width={467} height={637}></Image>
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
          <Image src="/images/vector-support3.png" className="d-none d-md-block support-vector1 img-fluid" width={1772} height={827}></Image>
          <Image src="/images/vector-support4.png" className="d-block d-md-none support-vector1 img-fluid" width={279} height={678} alt="support-vector1"></Image>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 col-10 order-2 order-md-0">
              <Image src="/images/support-4.png" className="d-none d-md-block go-off-track-img img-fluid" alt="support-4" width={648} height={648}></Image>
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
              <Image src="/images/support-4.png" className="d-block d-md-none go-off-track-img img-fluid" width={648} height={648} alt="go-off-track-img"></Image>
              <div className="support-img-wrapper">
                <Image src="/images/support-5.png" alt="support-5" className="support-img img-fluid" width={580} height={265}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default support;
