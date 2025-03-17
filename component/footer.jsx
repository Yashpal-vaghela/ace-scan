import Link from "next/link";
import React, { useState } from "react";
import styles from "@/styles/Footer.module.css"

const Footer = () => {
    return (
        <>
            <div>


                <footer className={` text-white pt-5 pb-4 container ${styles.footer}`}>
                    <div className={`container text-center text-md-left ${styles.footer}`}>
                        <div class="row text-center text-md-left">
                            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold"> ACE SCAN</h6>
                                <p>
                                    We give you everything you need to get started in digital dentistry for free — including an intraoral scanner.
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Products & Services</h6>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> Digital Workflow</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> CAM/CAD Mailing</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> Implants</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> Crowns & Bridges</a>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Contact & Support</h6>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> Materials</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> Contact Us</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> Support</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> Privacy Policy</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 class="text-uppercase mb-4 font-weight-bold">Get In Touch</h6>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> About Page</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> About Page</a>
                                </p>
                                <p>
                                    <a href="#" class="text-white" style={{ textDecoration: "none" }}> About Page</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                <div class="container mt-4">
                    <div class="row justify-content-center align-items-center text-center">
                        <div class="col-12 d-flex justify-content-between align-items-center gap-5">
                            <div>logo</div>
                            <div class="bg-white"><p >
                                &copy; 2025 <span><a href="https://advancedentalexport.com/" className={`${styles.copyright}`}>Advance Dental Export</a></span>. All Rights Reserved
                            </p></div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Footer;