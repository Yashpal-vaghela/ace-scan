import React from "react";
import Link from "next/link";

import Image from "next/image";

const ErrorPage = () => {
  return (
    <div id="notfound">
      <div className="notfound" style={{ paddingTop: "80px" }}>
        <div className="container text-center" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className=" fzf-block">
            <p className="numberfour left">4</p>
            <img
              src="/images/teeth.png"
              alt="about"
              className="img-fluid teethimage"
            />
            <p className="numberfour right">4</p>
          </div>

          <p className="oops">OOPS!!</p>

          <p className="texts">Nothing found here, but no worries, <br /> We can fix it!</p>
          <Link href="/" className="simplebtn errorbtn">Backs Home</Link>
        </div>

      </div>
    </div>
  )
}

export default ErrorPage;