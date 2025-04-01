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
import "../public/css/support.css";
import "../public/css/contact.css";
import "../public/css/material.css";
import "../public/css/privacypolicy.css";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const [state, setstate] = useState(false);
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
      {
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      }
    </>
  );
}
