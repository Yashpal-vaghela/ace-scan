import React from "react";

const logout = () => {
  return (
    <div>
      <div className="breadcrumbs">
        <a href="/admin/">Home</a>
      </div>
      <div className="main shifted" id="main">
        <div className="content">
          <div id="content" className="colM">
            <h1>Logged out</h1>
            <p>
              Thanks for spending some quality time with the Web site today.
            </p>
            <p>
              <a href="/admin/">Log in again</a>
            </p>
            <br className="clear" />
          </div>
          <div id="footer"></div>
        </div>
      </div>
    </div>
  );
};

export default logout;
