// "use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const contactUs = () => {
  const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Contact Us | Ace Digital Dental Laboratory",
        "url": "https://acedigitaldentallaboratory.com/contact-us/",
        "description": "Discover the story behind ADDL. With a commitment to innovation, precision, and quality, we partner with dental professionals to deliver exceptional digital dental restorations.",
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
          "name": "Contact US",
          "item": "https://acedigitaldentallaboratory.com/contact-us/"
        }
      ]
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Email sent successfully!");
        setSubmitted(true);
        reset(); // Reset the form
      } else {
        setMessage(result.error || "Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };
  return (
    <React.Fragment>
      {/* <Breadcrumbs></Breadcrumbs> */}
      <Head>
        <title>Contact Us | Ace Digital Dental Laboratory</title>
        <meta name="description" content="Get in touch with ADDL for high-quality dental lab solutions. We're here to assist with all your dental restoration needs. Call or message us today!"/>
        <link rel="canonical" href="https://acedigitaldentallaboratory.com/contact-us/" /> 
        <meta property="og:locale" content="en_US"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Contact Us | Ace Digital Dental Laboratory" />
        <meta name="og:description" content="Get in touch with ADDL for high-quality dental lab solutions. We're here to assist with all your dental restoration needs. Call or message us today!"/>
        <meta property="og:url" content="https://acedigitaldentallaboratory.com/contact-us/" />
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
                  <source src="https://d1ytpjko2pk6h2.cloudfront.net/Advance+Dental+Export+Milling+2.mp4" type="video/mp4" />
                  {/* <source src="https://d1ytpjko2pk6h2.cloudfront.net/Advance+Dental+Export+Milling+2.webm" type="video/mp4" /> */}
                  Your browser does not support the video tag.
                </video>
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
                Contact US
                {/* </span>{" "} */}
              </h1>
              <div className="alt-font text-large font-weight-500 text-uppercase letter-spacing-2px d-flex">
                <span className="flex-shrink-0 w-40px h-1px bg-white opacity-6 align-self-center margin-25px-right"></span>
                <span className="flex-grow-1 video-desc opacity-6">
                  for more info, contact us below.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="conatct-form-wrapper position-relative"
        style={{ paddingTop: "80px", paddingBottom: "30px" }}
      >
        <div className="container position-relative ">
          <h2 className="mb-4 main-contact-title">How Can We Help?</h2>
          <div className="row position-relative">
            <div className="col-lg-4 col-12 ">
              <div className="con-left">
                <div className="overlays-form"></div>
                <h3 className="sidebar-heading">We are here to help you </h3>
                <div className="sidebar-cards">
                  <Image src="/images/email-icon.svg" className="slider-icon" alt="email-icon" width={49} height={50}></Image>
                  {/* <img src="/images/email-icon.svg" className=" slider-icon"></img> */}
                  <div className="slider-cardbody">
                    <p className="mb-0 slider-card-heading">Email:</p>
                    <p style={{ wordBreak: "break-word" }}>hr@acedigitaldentallaboratory.com</p>
                  </div>
                </div>
                <div className="sidebar-cards">
                <Image src="/images/call.svg" className="slider-icon" alt="call-icon" width={49} height={50}></Image>
                  {/* <img src="/images/call.svg" className="slider-icon"></img> */}
                  <div className="slider-cardbody">
                    <p className="mb-0 slider-card-heading">Contact:</p>
                    <p>+1 551-380-0385</p>
                  </div>
                </div>
                <div className="sidebar-cards">
                <Image src="/images/address.svg" className="slider-icon" alt="address-icon" width={49} height={50}></Image>
                  {/* <img src="/images/address.svg" className="slider-icon"></img> */}
                  <div className="slider-cardbody">
                    <p className="mb-0 slider-card-heading">Address:</p>
                    <p>1 Auer Court, 2nd Floor East Brunswick, New Jersey 08816</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 p-0 contact-form1-wrapper">
              <div className="contact-form1">
                <form className="form row p-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-12 mb-4">
                    <label className="fw-bold pn-2" >Name</label>
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="form-control new-form"
                      placeholder="Enter you Name"
                    ></input>
                    {errors.name && <p className="error">{errors.name.message}</p>}
                  </div>

                  <div className="col-6 mb-4">
                    <label className="fw-bold pn-2" >Contact No.</label>
                    <input
                      type="number"
                      {...register("contact", { required: "Contact number is required" })}
                      className="form-control new-form"
                      placeholder="Enter your mobile number"
                    ></input>
                    {errors.contact && <p className="error">{errors.contact.message}</p>}
                  </div>
                  <div className="col-6 mb-4">
                    <label className="fw-bold pn-2" >Email</label>
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      className="form-control new-form"
                      placeholder="Enter your email"
                    ></input>
                    {errors.email && <p className="error">{errors.email.message}</p>}
                  </div>
                  <div className="col-12 mb-4">
                    <label className="fw-bold pn-2" >Message</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      className="form-control new-form"
                      rows="4"
                      placeholder="Your message (optional)"
                    ></textarea>
                    {errors.message && <p className="error">{errors.message.message}</p>}
                  </div>
                  <div>
                    <button className="form-btn" type="submit" disabled={loading}>
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                </form>
                {message && <p className="mt-3">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
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