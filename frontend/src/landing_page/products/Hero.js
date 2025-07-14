import React from "react";

export default function Hero() {
  return (
    <div className="container border-bottom" style={{marginTop: "8rem"}}>
      <div className="row text-center">
        <h1 className="mb-3">Technology</h1>
        <h3 className="text-muted mb-3"> Sleek, modern and intuitive trading platforms </h3>
        <p>
          check out our
          <a href="/" className="text-decoration-none flex items-center gap-3">
            <span> investment offerrings </span> 
            <i class="fa-solid fa-long-arrow-right text-primary"></i> 
          </a>
        </p>
      </div>
    </div>
  );
}
