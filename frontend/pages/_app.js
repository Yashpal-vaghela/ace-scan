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
import { useRouter } from "next/router";
// import { AdminLayout } from "@/component/admin/AdminLayout";
import ThemeCustomization from "@/component/admin/themes";
import ErrorBoundary from "@/component/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ReactLoading from "react-loading";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // const [loading, setLoading] = useState(false);

  const isAdminRoute = router.pathname.startsWith("/admin");

  // useEffect(() => {
  //   AOS.init();
  //   router.events.on("routeChangeStart", (url) => {
  //     setLoading(true);
  //   });
  //   router.events.on("routeChangeComplete", (url) => {
  //     setLoading(false);
  //   });
  //   router.events.on("routeChangeError", (url) => {
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <>
      {isAdminRoute ? (
        <>
          {/* {loading ? (
            <ReactLoading
              type="spinningBubbles"
              color="#000"
              height={50}
              width={50}
            />
          ) : (
            <>
            </>
          )} */}
          <ErrorBoundary>
            <ThemeCustomization>
              <Component {...pageProps} />
              <ToastContainer
                position="top-right"
                autoClose={2500}
              ></ToastContainer>
            </ThemeCustomization>
          </ErrorBoundary>
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
