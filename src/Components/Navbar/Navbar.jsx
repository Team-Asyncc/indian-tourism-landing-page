import React, { useState } from "react";
import "./Navbar.scss";
import Dropdown1 from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <div
          className="des items"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <li className="nav-items">
            Destination <i className="fas fa-caret-down" />
            {dropdown && <Dropdown1 />}
          </li>
        </div>
        <div
          className="exp items"
          onMouseEnter={() => setDropdown2(true)}
          onMouseLeave={() => setDropdown2(false)}
        >
          <li className="nav-items">
            Experience
            <i className="fas fa-caret-down" />
            {dropdown2 && <Dropdown2 />}
          </li>
        </div>
        <div
          className="trav items"
          onMouseEnter={() => setDropdown3(true)}
          onMouseLeave={() => setDropdown3(false)}
        >
          <li className="nav-items">
            Travel
            <i className="fas fa-caret-down" />
            {dropdown3 && <Dropdown3 />}
          </li>
        </div>
        <div className="logo-image">
          <img
            src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/inc-india-logo.svg"
            alt="logo"
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
