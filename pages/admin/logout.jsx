import React from "react";

const logout = () => {
  return (
    <div>
      <div class="breadcrumbs">
        <a href="/admin/">Home</a>
      </div>
      <div class="main shifted" id="main">
        <div class="content">
          <div id="content" class="colM">
            <h1>Logged out</h1>
            <p>
              Thanks for spending some quality time with the Web site today.
            </p>
            <p>
              <a href="/admin/">Log in again</a>
            </p>
            <br class="clear" />
          </div>
          <div id="footer"></div>
        </div>
      </div>
    </div>
  );
};

export default logout;
