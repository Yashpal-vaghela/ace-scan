import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

const Header = () => {
    return (
        <>"
            <nav class="navbar navbar-expand-lg fixed-top  bg-white custom-navbar" style={{ height: "80px" }}>
                <div class="container d-flex justify-content-end ">
                    <a class="navbar-brand me-auto" href="#">LOGO</a>

                    <div class="offcanvas offcanvas-between " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link  mx-lg-2" aria-current="page" href="{% url 'home:home' %}">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">About US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">Product</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="{% url 'home:tallymodule' %}">Tally Modules</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="{% url 'home:services' %}">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">Contact US</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

            </nav>
        </>
    );
}

export default Header;