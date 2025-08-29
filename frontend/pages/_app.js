import "@/styles/globals.css";
import "../public/css/common.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import React, { useEffect, useState } from "react";
import "../public/css/Home1.css";
import "../public/css/about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../public/css/headder.css";
import "../public/css/footer.css";
import "../public/css/error.css";
import "../public/css/Home.css";
import "../public/css/Home1.css";
import "../public/css/about.css";
import "../public/css/product.css";
import "../public/css/product1.css";
import "../public/css/support.css";
import "../public/css/contact.css";
import "../public/css/material.css";
import "../public/css/privacypolicy.css";
import "../styles/admin/login.css";
import "../public/css/blog.css";
import { useRouter } from "next/router";
import ThemeCustomization from "@/component/admin/themes";
import ErrorBoundary from "@/component/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay-ts";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const isAdminRoute = router.pathname.startsWith("/admin");

  useEffect(() => {
    AOS.init();
    console.log("router",router)
     if(router.pathname == "/product/emax" || router.pathname == "/product/implants" || router.pathname == "/product/cad-cam" ){   
        const a = document.getElementById("__next");
        a.classList.add("overflow-visible");
        a.classList.remove("overflow-hidden");
      }else{
        const a = document.getElementById("__next");
        a.classList.remove("overflow-visible");
        a.classList.add("overflow-hidden");
      }
    router.events.on("routeChangeStart", (url) => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", (url) => {
      setLoading(false);
    });
    router.events.on("routeChangeError", (url) => {
      setLoading(false);
    });
  }, [router]);
// 
  return (
    <>
      {isAdminRoute ? (
        <>
          <LoadingOverlay
            active={loading}
            spinner
            styles={{
              content: {
                height: "auto",
                width: "100%",
              },
              spinner: (base) => ({
                ...base,
                position: "fixed",
                height: "100%",
                left: "42%",
                right: "42%",
              }),
            }}
          >
            <ThemeCustomization>
              <Component {...pageProps} />
              <ToastContainer
                position="top-right"
                autoClose={2500}
              ></ToastContainer>
            </ThemeCustomization>
          </LoadingOverlay>
        </>
      ) : (
        <>
          <ErrorBoundary>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </ErrorBoundary>
        </>
      )}
    </>
  );
}
