import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const Breadcrumbs = () => {
    const router = useRouter();
    const [Pathname,setpathname] = useState({});
    console.log("router",router)
    useEffect(()=>{
        const a = router.pathname.split("/");
        const b = router.pathname.replace("/","").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (str) => str.toUpperCase());
        console.log("a",a,b)

    },[])
  return (
    <section className="Breadcrumbs-section">
      <div className="container">
        <nav aria-label="breadcrumb" >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link href={router.pathname}>Contact us</Link>
            </li>
            {/* <li className="breadcrumb-item active" aria-current="page">
              Library
            </li> */}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumbs;
