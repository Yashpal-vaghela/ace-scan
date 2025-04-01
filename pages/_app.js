import "@/styles/globals.css";
import "../public/css/common.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../public/css/Home1.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [state, setstate] = useState(false);
  // const [loader, setloader] = useState(false);

  useEffect(() => {
    // document.documentElement.setAttribute("data-theme", "light");
    // router.events.on("routeChangeStart", (url) => {
    //   setloader(true);
    // });
    // router.events.on("routeChangeComplete", (url) => {
    //   setloader(false);
    // });
    // router.events.on("routeChangeError", (url) => {
    //   setloader(false);
    // });
    AOS.init();
  }, []);
  return (
    <>
        {state ? (
            <> site under deployment</>
          ) : (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          )}
      {/* {loader ? (
        <>loader</>
      ) : (
        <>
        </>
      )} */}
    </>
  );
}
