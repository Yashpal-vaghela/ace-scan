import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [state, setstate] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
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
