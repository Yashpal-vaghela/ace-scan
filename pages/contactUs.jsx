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
        style={{ paddingTop: "80px", paddingBottom: "30px" }}
      >
        {/* <div className="dots-vector-contain">
        <div style={{display:'contents'}}>
          <div className="dots-content">
            <div className="dots-container">
              <div className="dots-vector-container">
                <div className="dots-vector"></div>
              </div>
              <div className="dots-wid"></div>
            </div>
          </div>
        </div>
      </div> */}
        <div className="container position-relative ">

          {/* <div className="dots-vector-contain">
            <div className="dots-content">
              <div className="dots-vector"></div>
              <div className="dots-wid"></div>
            </div>
          </div> */}
          <h3 className="mb-4 main-contact-title">How Can We Help?</h3>

          <div className="row position-relative">
            <div className="col-lg-4 col-12 ">
              <div className="con-left">
                <div className="overlays-form"></div>
                <h4 className="sidebar-heading">We are here to help you </h4>
                <div className="sidebar-cards">
                <img src="/images/email-icon.svg" className=" slider-icon"></img>
                <div className="slider-cardbody">
                  <p className="mb-0 slider-card-heading">Email:</p>
                  <p style={{wordBreak: "break-word"}}>hr@acedigitaldentallaboratory.com</p>
                </div>
                </div>
                <div className="sidebar-cards">
                <img src="/images/call.svg" className="slider-icon"></img>
                <div className="slider-cardbody">
                  <p className="mb-0 slider-card-heading">Contact:</p>
                  <p>+1 551-380-0385</p>
                </div>
                </div>
                <div className="sidebar-cards">
                <img src="/images/address.svg" className="slider-icon"></img>
                <div className="slider-cardbody">
                  <p className="mb-0 slider-card-heading">Address:</p>
                  <p>1 Auer Court, 2nd Floor East Brunswick, New Jersey 08816</p>
                </div>
                </div>
              </div>


            </div>
            <div className="col-lg-8 col-12 p-0 contact-form1-wrapper">
              <div className="contact-form1">
                <form className="form row p-4">
                  {/* <h2>Contact Us </h2>
                  <h3>How Can We Help?</h3> */}
                  <div className="col-12 mb-4">
                    <label className="fw-bold pn-2" >Name</label>
                    <input
                      type="text"
                      className="form-control new-form"
                      placeholder="Enter you Name"
                    ></input>
                  </div>

                  <div className="col-6 mb-4">
                    <label className="fw-bold pn-2" >Contact No.</label>
                    <input
                      type="text"
                      className="form-control new-form"
                      placeholder="Enter your mobile number"
                    ></input>
                  </div>
                  <div className="col-6 mb-4">
                    <label className="fw-bold pn-2" >Email</label>
                    <input
                      type="text"
                      className="form-control new-form"
                      placeholder="Enter your email"
                    ></input>
                  </div>
                  <div className="col-12 mb-4">
                    <label className="fw-bold pn-2" >Message</label>
                    <textarea
                      className="form-control new-form"
                      rows="4"
                      placeholder="Your message (optional)"
                    ></textarea>
                  </div>
                  <div className="">
                    <button className="form-btn ">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container">
          <div className="card-section1 row gap-4 justify-content-center mb-5 mt-5">
            <div className="card-1 col-3">
              <img src="/images/email-icon.svg" className="img-fluid"></img>
              <div className="d-block">
                <h2 className="contact-details-title">How can we help?</h2>
        
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
               
                <Link href="#" className="text-center">
                  Give us a call toady
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="contact-video-img-wrapper mb-5 position-relative">
        <div className="container d-flex m-auto justify-content-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.139532656427!2d-74.39057415547374!3d40.42325498245385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3cf71abfda90f%3A0x47626770a611bc2b!2s1%20Auer%20Ct%202nd%20Floor%2C%20East%20Brunswick%2C%20NJ%2008816%2C%20USA!5e1!3m2!1sen!2sin!4v1742902655389!5m2!1sen!2sin"
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
      <div className="dots-vector-contain">
        <div style={{ display: 'contents' }}>
          <div className="dots-content">
            <div className="dots-container">
              <div className="dots-vector-container">
                <div className="dots-vector"></div>
              </div>
              <div className="dots-wid"></div>
            </div>
          </div>
        </div>
      </div>

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
