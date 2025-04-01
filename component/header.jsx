import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import "../public/css/headder.css";

const Header = () => {
  const router = useRouter();
  const handleOffcanvas = () => {
    var x = document.getElementById("close");
    setTimeout(() => {
      if (window.innerWidth <= 991) {
        if (window?.getComputedStyle(x)?.display !== "none") {
          return x.click();
        }
      }
    }, 1000);
  };
  const handleOffcanvas1 = () => {
    var x = document.getElementById("close");
    if (window.innerWidth <= 991) {
      if (window?.getComputedStyle(x)?.display !== "none") {
        return x.click();
      }
    }
  };
  return (
    <>
      <div className="header" id="header">
        <div className="container navbar-container w-100 ">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ">
                <Link href="/" className="Logo">
                    <Image src="/images/ACE-logo.png" alt="Logo" className="img-fluid" width={150} height={50}></Image>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-start navbar-offcanvas"
                    tabIndex="-1"
                    id="offcanvasExample"
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div className="offcanvas-header">
                
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                        <Link href="/" className="Logo" onClick={handleOffcanvas}>
                            <Image src="/images/ACE-logo.png" className="img-fluid" alt="LOGO" width={150} height={50}></Image>
                        </Link>
                    </h5>
                    <button
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        id="close"
                    ></button>
                    </div>
                    <div className="offcanvas-body justify-content-end">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 m-0">
                        <li className="nav-item" onClick={handleOffcanvas1}>
                            <Link href="/" className={`nav-link  mx-lg-2 ${router.pathname === "/" ? "active" : ""}`}>Home</Link>
                        </li>
                        <li className="nav-item" onClick={handleOffcanvas1}>
                            <Link className={`nav-link  mx-lg-2 ${router.pathname === "/about" ? "active" : ""}`} href="/about">About US</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link
                            className="nav-link mx-lg-2  dropdown-toggle d-flex align-items-center"
                            // onClick={handleOffcanvas}
                            data-bs-toggle="dropdown"
                            id="navbarDropdown"
                            aria-current="page"
                            href="/products"
                        >
                            Products
                        </Link>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <li onClick={handleOffcanvas1}>
                            <Link
                                href="/product/digital-workflow"
                                className="dropdown-item"
                            >
                                Digital workflow
                            </Link>
                            </li>
                            <li onClick={handleOffcanvas1}>
                            <Link
                                href="/product/cad-cam"
                                className="dropdown-item"
                            >
                                CAD / CAM milling
                            </Link>
                            </li>
                            <li onClick={handleOffcanvas1}>
                            <Link
                                href="/product/implants"
                                className="dropdown-item"
                            >
                                Implants
                            </Link>
                            </li>
                            <li onClick={handleOffcanvas1}>
                            <Link
                                href="/product/crowns-bridges"
                                className="dropdown-item"
                            >
                                Crowns & Bridges
                            </Link>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item" onClick={handleOffcanvas1}>
                            <Link className={`nav-link  mx-lg-2 ${router.pathname === "/support" ? "active" : ""}`} href="/support">Support</Link>
                        </li>
                        <li className="nav-item" onClick={handleOffcanvas1}>
                            <Link className={`nav-link  mx-lg-2 ${router.pathname === "/materials" ? "active" : ""}`} href="/materials">Materials</Link>
                        </li>
                        <li className="nav-item" onClick={handleOffcanvas1}>
                            <Link className={`nav-link  mx-lg-2 ${router.pathname === "/contactUs" ? "active" : ""}`} href="/contactUs">Contact US</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
