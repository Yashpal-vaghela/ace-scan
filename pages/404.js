import React from "react";
import Link from "next/link";

const ErrorPage = () =>{
    return(
        <div id="notfound">
        <div className="notfound" style={{ height: "50vh" }}>
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2> we are sorry, page not found!</h2>
          {/* <p>The page ypu are looking for might  have been removed </p> */}
          <Link href="/">Back to Homepage</Link>
        </div>
      </div>
    )
}

export default ErrorPage;