import React from "react";

export default function Education() {
  return (
    <div className="container mb-5" style={{ marginTop: "6rem" }}>
      <div className="row">
        <div className="col-6 mt-5">
          <img
            src="media/images/images/education.svg"
            alt=""
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-6 p-4">
          <h1 className="mb-5 pt-3">Free and open market education</h1>
          <p className="lh-lg">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <p className="mt-3">
            <a
              class="link-offset-2 link-underline link-underline-opacity-0"
              href="/"
            >
              Versity{" "}
            </a>
            <i class="fa-solid fa-long-arrow-right text-primary"></i>{" "}
          </p>
          <p className="mt-5 lh-lg">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <p className="mt-3">
            <a
              class="link-offset-2 link-underline link-underline-opacity-0"
              href="/"
            >
              TradingQ&A{" "}
            </a>
            <i class="fa-solid fa-long-arrow-right text-primary"></i>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
