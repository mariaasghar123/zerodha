import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
  import { useNavigate } from "react-router-dom";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isdropdownProfile, setIssdropdownProfile] = useState(false);
  const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();



  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setIssdropdownProfile(!isdropdownProfile);
  };

  // Logout function
  const logout = () => {
    removeCookie("token");
    window.location.href = "http://localhost:3000/login"; // Redirect to login after logout
    // navigate("/login");

  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <a
              href="http://localhost:3000"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Home
              </p>
            </a>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings"}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={() => handleProfileClick}>
          <div className="avatar">MA</div>
          <p className="username">USERID</p>
        </div>
        {isdropdownProfile}

        {/* Logout Button */}
        <div className="text-end p-3">
          <Link  onClick={logout} className="btn btn-blue">Logout</Link> 
        </div>
      </div>
    </div>
  );
}
