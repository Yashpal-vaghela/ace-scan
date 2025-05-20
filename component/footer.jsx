import Link from "next/link";
import React, { useState} from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

const Footer = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

      const [submitted, setSubmitted] = useState(false);
      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");

    const onSubmit = async(data) => {
        try {
            setLoading(true);
            setMessage("");

            const response = await fetch("/api/sendMail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name: data.name, email: data.email}),
              });

            const result = await response.json();
            console.log("Response:", result);

            if (response.ok) {
                setMessage("Email sent successfully!");
                setSubmitted(true);
                reset();
              } else {
                setMessage(result.error || "Failed to send email. Please try again.");
              }
        } catch (error) {
            console.error("Error sending email:", error);
            setMessage("An error occurred. Please try again.");
        }
        setLoading(false);

    };


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         const checkbox = document.getElementById("offchat-menu");
    //         if (checkbox) {
    //             checkbox.checked = true;
    //         }
    //     }, 5000);

    //     return () => clearTimeout(timer); 
    // }, []);

    return (
        <React.Fragment>

            <input className="chat-menu hidden" id="offchat-menu" type="checkbox" />
            <div className="sticky-button" id="sticky-button">
                <label for="offchat-menu">
                    <i className="fa fa-solid fa-message chat-icon"></i>
                    <i className="fa-solid fa-xmark close-icon"></i>
                </label>
            </div>
            <div className="sticky-chat">
                <div className="chat-content">
                    <div className="chat-header">
                        <div className="title">Please chat with our team <span>An admin will respond within a few minutes.</span>
                        </div>
                    </div>
                    <div className="chat-text">
                        <form className="form row " onSubmit={handleSubmit(onSubmit)} >
                            <div class="mb-3 col-12">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input
                                    {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
                                    type="text" class="form-control custom-input" id="exampleFormControlInput1" placeholder="Enter Your Name" />
                                {errors.name && <p className="error text-danger m-0">{errors.name.message}</p>}
                            </div>

                            <div class="mb-3 col-12">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Invalid email format" },
                                    })}
                                    type="email" class="form-control custom-input" id="exampleFormControlInput1" placeholder="name@example.com" />
                                {errors.email && <p className="error text-danger">{errors.email.message}</p>}
                            </div>

                            <button class="mt-2 btn longbtn col-12" type="submit " disabled={loading}>
                            {loading ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="footer_grid">
                        <div className="footer-content">
                            <div className="footer-title">
                                We're shaping the future of digital dentistry.
                            </div>
                            <div className="footer-desc">
                                Ace Digital Dental Laboratory pioneers innovation, precision, and artistry to set new standards in modern dentistry, delivering excellence in every restoration.
                            </div>
                            <div className="simplebtn w-100 text-center">
                                <a href="/contact-us" className="text-center">Get Started</a>
                            </div>
                        </div>
                        <div className="footer-nav">
                            <div className="row g-4">
                                <div className="col-12 col-lg-4 col-md-6 ">
                                    <p className="nav-title">Product & Service</p>
                                    <ul>
                                        <li><a href="/product/digital-workflow">Digital Flow</a></li>
                                        <li><a href="/product/cad-cam">CAD/CAM</a></li>
                                        <li><a href="/product/implants">Implant</a></li>
                                        <li><a href="/product/crowns-bridges">Crown & Bridges</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-4 col-md-6 ">
                                    <p className="nav-title">Contact & Support</p>
                                    <ul>
                                        <li><a href="/about-us">About</a>"</li>
                                        <li><a href="/contact-us">Contact</a></li>
                                        <li><a href="/support">Support</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-4 col-md-6 ">
                                    <p className="nav-title">Get In Touch</p>
                                    <ul>
                                        <li><a href="tel:+15513800385">+1 551-380-0385</a></li>
                                        <li><a href="mailto:hr@acedigitaldentallaboratory.com">hr@acedigitaldentallaboratory.com</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="container mt-3 pb-4">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-12 d-flex justify-content-between align-items-center gap-5 footer-wrapper">
                        <Link className="navbar-brand me-auto" href="/">
                            <Image src="/images/ACE-logo.webp" alt="Logo" width={150} height={50} />
                        </Link>
                        <div className="bg-white"><p >
                            &copy; 2025 <span><Link href="https://advancedentalexport.com/" className="copyright">Advance Dental Export</Link></span>. All Rights Reserved
                        </p></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;














{/* <footer className={` text-white pt-5 pb-4 container ${styles.footer}`}>
                    <div className={`container text-center text-md-left ${styles.footer}`}>
                        <div className="row text-center text-md-left">
                            <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold text-start">
                                    
                                </h6>
                                <p className="text-start">
                                    We give you everything you need to get started in digital dentistry for free — including an intraoral scanner.
                                </p>
                            </div>

                            <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold text-start">Products & Services</h6>
                                <p className="text-start mb-0">
                                    <Link className="text-white text-decoration-none" href="/product/digital-workflow">Digital Workflow</Link>
                                    
                                </p> 
                                <p className="text-start mb-0">
                                    <Link className="text-white text-decoration-none" href="/product/cad-cam-milling">CAM/CAD Mailing</Link>
                                    
                                </p>
                                <p className="text-start mb-0">
                                    <Link className="text-white text-decoration-none" href="/product/implants">Implants</Link>
                                    
                                </p>
                                <p className="text-start">
                                    <Link className="text-white text-decoration-none" href="/product/crowns-bridges">Crowns & Bridges</Link>
                                   
                                </p>
                            </div>

                            <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold text-start">Contact & Support</h6>
                                <p className="text-start mb-0">
                                    <Link href="#" className="text-white text-decoration-none">Materials</Link>
                                    
                                </p>
                                <p className="text-start mb-0">
                                    <Link href="/contactUs" className="text-white text-decoration-none">Contact Us</Link>
                                  
                                </p>
                                <p className="text-start mb-0">
                                    <Link href="/support" className="text-white text-decoration-none">Support</Link>
                                    
                                </p>
                                <p className="text-start mb-0">
                                    <Link href="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
                                    
                                </p>
                            </div>

                            <div className="col-md-6 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold text-start">Get In Touch</h6>
                                <p className="text-start mb-0">
                                    <Link href="#" className="text-white text-decoration-none">About Page</Link>
                                </p>
                                <p className="text-start mb-0">
                                    <Link href="#" className="text-white text-decoration-none">About Page</Link>
                                </p>
                                <p className="text-start">
                                    <Link href="#" className="text-white text-decoration-none">About Page</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer> */}