import React from "react";

export default function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-5">Unbeatable Pricing</h1>
          <p className="mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <p className=" d-flex align-items-center gap-2">
            <a
              class="link-offset-2 link-underline link-underline-opacity-0"
              href="/"
            >
              See Pricing{" "}
            </a>
            <i class="fa-solid fa-long-arrow-right text-primary"></i>{" "}
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center items-center">
            <div className="col-6 border p-5">
              <h1>₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="col-6 border p-5">
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
