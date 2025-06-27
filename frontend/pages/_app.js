import "@/styles/globals.css";
import "../public/css/common.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { useEffect } from "react";
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
import "../styles/admin/login.css"
import { useRouter } from "next/router";
// import { AdminLayout } from "@/component/admin/AdminLayout";
import ThemeCustomization from "@/component/admin/themes";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith("/admin");
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    {
      isAdminRoute ? (
          <ThemeCustomization>
            <Component {...pageProps} />
          </ThemeCustomization>
      ):(
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      )
    }
    </>
  );
}
