import Link from "next/link";
import React from "react";
import styles from "@/styles/Footer.module.css"
import "../public/css/footer.css"
import Image from "next/image";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="footer_grid">
                        <din className="footer-content">
                            <div className="footer-title">
                                We're shaping the future of digital dentistry.
                            </div>
                            <div className="footer-desc">
                            Ace Digital Dental Laboratory pioneers innovation, precision, and artistry to set new standards in modern dentistry, delivering excellence in every restoration.
                            </div>
                            <div className="simplebtn">Get Started</div>
                        </din>
                        <div className="footer-nav">
                            <div className="row g-4">
                                <div className="col-12 col-lg-4 col-md-6 ">
                                    <h5 className="nav-title">Product & Service</h5>
                                    <ul>
                                        <li><a href="/#">Digital Flow</a></li>
                                        <li><a href="/#">CAD/CAM</a></li>
                                        <li><a href="/#">Implant</a></li>
                                        <li><a href="/#">Crown & Bridges</a></li>
                                    </ul> 
                                </div>
                                <div className="col-12 col-lg-4 col-md-6 ">
                                    <h5 className="nav-title">Contact & Support</h5>  
                                    <ul>
                                        <li><a href="/#">Contact</a></li>
                                        <li><a href="/#">Support</a></li>
                                        <li><a href="/#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-4 col-md-6 "> 
                                    <h5 className="nav-title">Get In Touch</h5>
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
            <div className="container mt-4">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-12 d-flex justify-content-between align-items-center gap-5">
                        <div>logo</div>
                        <div className="bg-white"><p >
                            &copy; 2025 <span><Link href="https://advancedentalexport.com/" className={`${styles.copyright}`}>Advance Dental Export</Link></span>. All Rights Reserved
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