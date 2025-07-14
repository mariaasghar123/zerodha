import React from "react";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5 lh-lg">
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-3 mt-5">
          <h1>{productName}</h1>
          <p className="mt-3 text-muted">{productDescription}</p>
          <div className="mt-5">
            <a href={tryDemo} className="text-primary text-decoration-none">
              Try Demo <i class="fa-solid fa-long-arrow-right text-primary" style={{ marginLeft: "5px" }}></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px" }}
              className="text-primary text-decoration-none"
            >
              learn More
              <i class="fa-solid fa-long-arrow-right text-primary" style={{ marginLeft: "5px" }}></i>
            </a>
          </div>
          <div className="mt-5">
            <a href={googlePlay}>
              <img src="media/images/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
