import React, { useState } from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <div className="nav-bar">
      <div className="first-menu">
        <ul className="nav-menu">
          <div
            className="des items"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <li>
              Destination <FontAwesomeIcon icon={faCaretDown} />
              {dropdown && <Dropdown1 />}
            </li>
          </div>
          <div
            className="exp items"
            onMouseEnter={() => setDropdown2(true)}
            onMouseLeave={() => setDropdown2(false)}
          >
            <li>
              Experience
              <FontAwesomeIcon icon={faCaretDown} />
              {dropdown2 && <Dropdown2 />}
            </li>
          </div>
        </ul>
      </div>
      <div className="image-navbar">
        <img
          src="https://www.incredibleindia.org/content/dam/incredible-india-v2/images/inc-india-logo.svg"
          alt="logo"
        />
      </div>
      <div className="third-menu">
        <ul className="nav-menu">
          <div
            className="gallery items"
            onMouseEnter={() => setDropdown3(true)}
            onMouseLeave={() => setDropdown3(false)}
          >
            <li>
              Gallery
              <FontAwesomeIcon icon={faCaretDown} />
              {dropdown3 && <Dropdown3 />}
            </li>
          </div>
          <div
            className="trav items"
            onMouseEnter={() => setDropdown3(true)}
            onMouseLeave={() => setDropdown3(false)}
          >
            <li>
              Travel
              <FontAwesomeIcon icon={faCaretDown} />
              {dropdown3 && <Dropdown3 />}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
