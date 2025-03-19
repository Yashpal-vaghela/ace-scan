import "@/styles/globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
// import NProgress from 'nprogress'; 

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [state, setstate] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    // import('bootstrap/dist/js/bootstrap.bundle.min.js');
    // Router.events.off('routeChangeStart', () => NProgress.start());
    // Router.events.off('routeChangeComplete', () => NProgress.done());
    // Router.events.off('routeChangeError', () => NProgress.done());
  }, []);
  return (
    <>
      {state ? (
        <> site under deployment</>
      ) : (
        <>
          {router.pathname == "/" ? (
            <>
              <Header />
            </>
          ) : (
            <>
              <Header />
            </>
          )}
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}
