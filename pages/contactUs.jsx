"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "../public/css/contact.css";
import "../public/css/styles.css";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/component/Breadcrumbs";

const contactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSubmitted(true);
  };
  return (
    <React.Fragment>
      <Breadcrumbs></Breadcrumbs>

      <section
        className="conatct-form-wrapper position-relative"
        style={{ paddingTop: "120px", paddingBottom: "30px" }}
      >
        <div className="container position-relative">
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0)",
              height: "100%",
              width: "100%",
              opacity: 1,
            }}
          >
            <div
              style={{
                flex: "none",
                inset: 0,
                position: "absolute",
                zIndex: -1,
                top: "-20%",
                left: "-4%",
                opacity: 1,
              }}
            >
              <div
                style={{
                  width: "30%",
                  height: "35%",
                  backgroundColor: "transparent",
                  backgroundImage:
                    "radial-gradient(rgba(0, 94, 138,0.7) 1.5px, transparent 1px),radial-gradient(rgba(0, 94, 138,0.7) 1px, rgba(35, 84, 84, 0) 1px)",
                  backgroundPosition: "0px 0px,20px 20px",
                  backgroundSize: "40px 40px",
                  borderRadius: "0px",
                }}
              ></div>
            </div>
          </div>

          <div className="row position-relative">
            <div className="col-lg-6 col-6">
              <img src="/images/contact-img1.png" className="img-fluid"></img>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3011808750475!2d72.84564231420534!3d21.219902286602988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef120e021eb%3A0x38b0e81455dedbe7!2sAdvance%20dental%20Export!5e0!3m2!1sen!2sin!4v1665697964873!5m2!1sen!2sin"
                className="gmap"
                style={{
                  border: 0,
                  width: "100%",
                  minHeight: "480px",
                  borderRadius: "0px",
                }}
                allowFullscreen=""
                loading="lazy"
              ></iframe> */}
            </div>
            <div className="col-lg-6 col-6 p-0 contact-form1-wrapper">
              <div className="contact-form1">
                <form className="form row p-4">
                  <h2>Contact Us </h2>
                  <h3>How Can We Help?</h3>
                  <div className="col-12 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter you Name"
                    ></input>
                  </div>
                  <div className="col-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your mobile number"
                    ></input>
                  </div>
                  <div className="col-6 mb-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                    ></input>
                  </div>
                  <div className="col-12 mb-4">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your message (optional)"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-submit w-100">
                      Submit Button
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="card-section1 row gap-4 justify-content-center mb-5 mt-5">
            <div className="card-1 col-3">
              <img src="/images/email-icon.svg" className="img-fluid"></img>
              <div className="d-block">
                <h2 className="contact-details-title">How can we help?</h2>
                {/* <p className="contact-details-description">
                  A member of our team will respond within 48hours.
                </p> */}
                <Link href="#" className="text-center">
                  Send us an email
                </Link>
              </div>
            </div>
            <div className="card-1 col-3">
              <img src="/images/call.svg" className="img-fluid"></img>
              <div className="d-block">
                <h2 className="contact-details-title">
                  Feel free to get in touch?
                </h2>
                {/* <p className="contact-details-description">
                  A member of our team will be happy to connect with you.
                </p> */}
                <Link href="#" className="text-center">
                  Give us a call toady
                </Link>
              </div>
            </div>
            <div className="card-1 col-3">
              <img src="/images/address.svg" className="img-fluid"></img>
              <div className="d-block">
                <h2 className="contact-details-title">
                  Feel free to get in touch?
                </h2>
                {/* <p className="contact-details-description">
                  A member of our team will be happy to connect with you.
                </p> */}
                <Link href="#" className="text-center">
                  Give us a call toady
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-video-img-wrapper mb-5 position-relative">
        <div className="container d-flex m-auto justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3011808750475!2d72.84564231420534!3d21.219902286602988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ef120e021eb%3A0x38b0e81455dedbe7!2sAdvance%20dental%20Export!5e0!3m2!1sen!2sin!4v1665697964873!5m2!1sen!2sin"
            className="gmap"
            style={{
              border: 0,
              width: "100%",
              minHeight: "280px",
              borderRadius: "0px",
            }}
            allowFullscreen=""
            loading="lazy"
          ></iframe>
          {/* <img
            src="/images/contact-us-videoimg.png"
            className="img-fluid bg-img"
          ></img> */}
          {/* <div className="card-section row gap-4 justify-content-center">
                    <div className="card-1 col-3">
                        <img src="/images/email-icon.svg" className="img-fluid"></img>
                        <div className="d-block">
                            <h2 className="contact-details-title">How can we help?</h2>
                            <p className="contact-details-description">A member of our team will respond within 48hours.</p>
                        </div>
                    </div>
                    <div className="card-1 col-3">
                        <img src="/images/call.svg" className="img-fluid"></img>
                        <div className="d-block">
                            <h2 className="contact-details-title">Feel free to get in touch?</h2>
                            <p className="contact-details-description">A member of our team will be happy to connect with you.</p>
                        </div>
                    </div>
                    <div className="card-1 col-3">
                        <img src="/images/address.svg" className="img-fluid"></img>
                        <div className="d-block">
                            <h2 className="contact-details-title">Feel free to get in touch?</h2>
                            <p className="contact-details-description">A member of our team will be happy to connect with you.</p>
                        </div>
                    </div>
                </div> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default contactUs;
{
  /* <section
  className="contact-form-wrapper"
  style={{ paddingTop: "120px", paddingBottom: "30px" }}
3
  <div className="container">
    <h2>Contact Us ____</h2>
    <h3>How Can We Help?</h3>
  </div>
</section>; */
}
{
  /* <section className="contact-before-after-img">
      <div className="container">
          <div className="row mb-4">
            <div className="col-3 ">
              <img src="/images/33.jpg" className="img-fluid"></img>
            </div>
            <div className="col-3">
              <img src="/images/33.jpg" className="img-fluid"></img>
            </div>
            <div className="col-3">
              <img src="/images/33.jpg" className="img-fluid"></img>
            </div>
            <div className="col-3">
              <img src="/images/33.jpg" className="img-fluid"></img>
            </div>
          </div>
      </div>
    </section> */
}

{
  /* <div className="col-lg-8 col-8">
                <h2>Contact Us </h2>
                <h3>How Can We Help?</h3>
                <form className="form row mt-4">
                    <div className="col-12 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter you Name"
                    ></input>
                    </div>
                    <div className="col-6 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your mobile number"
                    ></input>
                    </div>
                    <div className="col-6 mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email"
                    ></input>
                    </div>
                    <div className="col-12 mb-3">
                    <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Your message (optional)"
                    ></textarea>
                    </div>
                    <div className="col-12">
                    <button className="btn btn-submit w-25">Submit Button</button>
                    </div>
                </form>
                </div>
                <div className="col-lg-4 col-4">
                <div className="our-sletters">
                    <div className="our-sletters-wrapper">
                    <h2>Our Newsletters</h2>
                    <p>
                        {" "}
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Maxime facilis neque odit est at! Odit animi illo sed
                        impedit aspernatur accusantium expedita officiis, esse
                        consequuntur numquam quis, voluptatibus non earum!
                    </p>
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Email"
                    ></input>
                    <button className="btn btn-submit">Submit Button</button>
                    </div>
                </div>
                </div> */
}
