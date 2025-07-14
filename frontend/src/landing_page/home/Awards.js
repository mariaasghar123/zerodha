import React from "react";

export default function Awards() {
  return (
    <div className="container mb-5 lh-lg" style={{ marginTop: "10rem" }}>
      <div className="row">
        <div className="col-6">
          <img src="media/images/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mt-5">
            <div className="col-6">
              <ul className="lh-lg">
                <li>Future and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="lh-lg">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/images/pressLogos.png"
            alt=""
            style={{ width: "90%" }}
            className="mt-3"
          />
        </div>
      </div>
    </div>
  );
}
