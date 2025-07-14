import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className=" text-center p-3 border-bottom cursor-pointer" style={{ cursor: "pointer" }}>
      <div className="d-flex justify-content-between">
        <div>
          <Link to={"/"}>
          <img
            src="media/images/images/logo.svg" alt="" style={{ width: "25%" }}/> </Link>
        </div>
        <div className="d-flex fs-5 justify-content-center w-50 gap-5 text-center align-items-center">
          <Link class="nav-link active" aria-current="page" to={"/signup"}>Signup</Link>
          <Link class="nav-link active" aria-current="page" to={"/login"}>Login</Link>
          <Link class="nav-link active" aria-current="page" to={"/about"}>About</Link>
          <Link class="nav-link active" aria-current="page" to={"/products"}>Products</Link>
          <Link class="nav-link active" aria-current="page" to={"/pricing"}>Pricing</Link>
          <Link class="nav-link active" aria-current="page" to={"/support"}>Support</Link>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}
