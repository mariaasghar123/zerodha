import React from "react";

export default function Stats() {
  return (
    <div className="container mb-5 p-3" style={{ marginTop: "8rem" }}>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="mb-5">Trust with confidence</h1>
          <div className="mb-5">
            <h3>Customer first always</h3>
            <p className=" text-muted">
              That's why 1.3+ crore Customers trust Zerodha with 3.5+ lakh
              crores worth of equity investments{" "}
            </p>
          </div>
          <div className="mb-5">
            <h3>No spam or gimmicks</h3>
            <p className=" text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>
          <div className="mb-5">
            <h3>The Zerodha universe</h3>
            <p className=" text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.{" "}
            </p>
          </div>
          <div className="mb-5">
            <h3>Do better with money</h3>
            <p className=" text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.{" "}
            </p>
          </div>
        </div>
        <div className="col-6 p-3">
          <img
            src="media/images/images/ecosystem.png"
            alt=""
            style={{ width: "100%" }}
          />
          <div className="d-flex justify-content-center gap-5 fs-5 mt-3">
            <p>
              <a
                class="link-offset-2 link-underline link-underline-opacity-0"
                href="/"
              >
                Explore our products
              </a>
              <i class="fa-solid fa-long-arrow-right text-primary"></i>{" "}
            </p>
            <p>
              <a
                class="link-offset-2 link-underline link-underline-opacity-0"
                href="/"
              >
                Try Kite demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
