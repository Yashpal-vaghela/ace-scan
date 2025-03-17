import Link from "next/link";
import React from "react";
import styles from "@/styles/Footer.module.css"

const Footer = () => {
    return (
        <React.Fragment>
                <footer className={` text-white pt-5 pb-4 container ${styles.footer}`}>
                    <div className={`container text-center text-md-left ${styles.footer}`}>
                        <div className="row text-center text-md-left">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold text-start"> ACE SCAN</h6>
                                <p className="text-start">
                                    We give you everything you need to get started in digital dentistry for free — including an intraoral scanner.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold text-start">Products & Services</h6>
                                <p className="text-start">
                                    <Link className="text-white text-decoration-none" href="/product/digital-workflow">Digital Workflow</Link>
                                    {/* <a href="#" className="text-white text-decoration-none"> Digital Workflow</a> */}
                                </p>
                                <p className="text-start">
                                    <Link className="text-white text-decoration-none" href="/product/cad-cam-milling">CAM/CAD Mailing</Link>
                                    {/* <a href="#" className="text-white" style={{ textDecoration: "none" }}> CAM/CAD Mailing</a> */}
                                </p>
                                <p className="text-start">
                                    <Link className="text-white text-decoration-none" href="/product/implants">Implants</Link>
                                    {/* <a href="#" className="text-white" style={{ textDecoration: "none" }}> Implants</a> */}
                                </p>
                                <p className="text-start">
                                    <Link className="text-white text-decoration-none" href="/product/crowns-bridges">Crowns & Bridges</Link>
                                    {/* <a href="#" className="text-white" style={{ textDecoration: "none" }}> Crowns & Bridges</a> */}
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold text-start">Contact & Support</h6>
                                <p className="text-start">
                                    <Link href="#" className="text-white text-decoration-none">Materials</Link>
                                    {/* <a href="#" className="text-white" style={{ textDecoration: "none" }}> Materials</a> */}
                                </p>
                                <p className="text-start">
                                    <Link href="/contactUs" className="text-white text-decoration-none">Contact Us</Link>
                                    {/* <a href="#" className="text-white" style={{ textDecoration: "none" }}> Contact Us</a> */}
                                </p>
                                <p className="text-start">
                                    <Link href="/support" className="text-white text-decoration-none">Support</Link>
                                    {/* <a href="#" className="text-white" style={{ textDecoration: "none" }}> Support</a> */}
                                </p>
                                <p className="text-start">
                                    <Link href="/privacy" className="text-white text-decoration-none">Privacy Policy</Link>
                                    {/* <a href="#" className="text-white" style={{ textDecoration: "none" }}> Privacy Policy</a> */}
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold text-start">Get In Touch</h6>
                                <p className="text-start">
                                    <Link href="#" className="text-white text-decoration-none">About Page</Link>
                                </p>
                                <p className="text-start">
                                    <Link href="#" className="text-white text-decoration-none">About Page</Link>
                                </p>
                                <p className="text-start">
                                    <Link href="#" className="text-white text-decoration-none">About Page</Link>
                                </p>
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