import React from "react";

export default function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <img
          src="media/images/images/homeHero.png"
          alt="hero"
          className="mt-4 mb-4"
        />
        <h1>Invest in everything</h1>
        <p>
          {" "}
          Online platform to invest in stocks, derivatives, mutual funds and
          more{" "}
        </p>
        <button
          className="btn btn-primary fs-5 mx-auto p-2"
          style={{ width: "20%" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
