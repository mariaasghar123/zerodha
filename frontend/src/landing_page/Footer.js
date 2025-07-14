import React from "react";

export default function Footer() {
  return (
  <div className="bg-body-tertiary">
    <div className="container mt-5 p-3">
      <div className="row">
        <div className="col-3">
          <img
            src="media/images/images/logo.svg"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="mt-3 text-muted">
            &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
          </p>
          <div class="d-flex gap-3 mt-4 text-muted">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none text-dark"
            >
              <i class="fab fa-twitter fa-lg text-muted"></i>
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none text-dark"
            >
              <i class="fab fa-facebook fa-lg text-muted"></i>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none text-dark"
            >
              <i class="fab fa-instagram fa-lg text-muted"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none text-dark"
            >
              <i class="fab fa-linkedin fa-lg text-muted"></i>
            </a>
            <a
              href="https://telegram.org/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-decoration-none text-dark"
            >
              <i class="fab fa-telegram fa-lg text-muted"></i>
            </a>
          </div>
        </div>
        <div className="col-3 lh-lg ">
          <p>Company</p>
            <a href="/about" className="text-muted link-underline link-underline-opacity-0">About</a>
            <br />
            <a href="/products" className="text-muted link-underline link-underline-opacity-0">Products</a>
            <br />
            <a href="/pricing" className="text-muted link-underline link-underline-opacity-0">Pricing</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Referral programme</a>
            <br />
            <a href="/careers" className="text-muted link-underline link-underline-opacity-0">Careers</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Zerodha.tech</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Press & media</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Zerodha cares (CSR)</a>
            <br />
        </div>
        <div className="col-3 lh-lg">
          <p>Support</p>
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Contact</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Support portal</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Z-Connect blog</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">List of charges</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Downloads & resources</a>
            <br />
        </div>
        <div className="col-3 lh-lg">
          <p>Account</p>
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Open an account</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">Fund transfer</a>
            <br />
            <a href="/" className="text-muted link-underline link-underline-opacity-0">60 day challenge</a>
            <br />
        </div>
      </div>
    </div>
  </div>
  );
}
