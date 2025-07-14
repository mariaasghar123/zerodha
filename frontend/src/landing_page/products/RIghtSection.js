import React from "react";

export default function RIghtSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row lh-lg">
        <div className="col-6 p-3" style={{marginTop: "8rem"}}>
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <a
            href={learnMore}
            className="text-primary text-decoration-none"
          >
            learn More
            <i class="fa-solid fa-long-arrow-right text-primary" style={{ marginLeft: "5px" }}></i>
          </a>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}
