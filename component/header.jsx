import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import "../public/css/headder.css";

const Header = () => {
    const router = useRouter();
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top  bg-white custom-navbar" style={{ height: "80px" }}>
                <div className="container d-flex justify-content-end ">
                    <Link className="navbar-brand me-auto" href="/">
                        <Image src="/images/ACE-logo.png" alt="Logo" width={150} height={50} />
                    </Link>

                    <div className="offcanvas offcanvas-between" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className={`nav-link  mx-lg-2 ${router.pathname === "/" ? "active" : ""}`} href="/">Home</Link>
                                    {/* <a className="nav-link  mx-lg-2" aria-current="page" href="{% url 'home:home' %}">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link  mx-lg-2 ${router.pathname === "/about" ? "active" : ""}`} href="/about">About US</Link>
                                    {/* <a className="nav-link mx-lg-2" href="#">nav-link mx-lg-2</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link  mx-lg-2 ${router.pathname === "/product" ? "active" : ""}`} href="/product">Product</Link>
                                    {/* <a className="nav-link mx-lg-2" href="#">Product</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link  mx-lg-2 ${router.pathname === "/support" ? "active" : ""}`} href="/support">Support</Link>
                                    {/* <a className="nav-link mx-lg-2" href="{% url 'home:tallymodule' %}"></a> */}
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link  mx-lg-2 ${router.pathname === "/services" ? "active" : ""}`} href="/services">Services</Link>
                                    {/* <a className="nav-link mx-lg-2" href="{% url 'home:services' %}">Services</a> */}
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link  mx-lg-2 ${router.pathname === "/contactUs" ? "active" : ""}`} href="/contactUs">Contact US</Link>
                                    {/* <a className="nav-link mx-lg-2" href="#">Contact US</a> */}
                                </li>
                            </ul>

                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Header;