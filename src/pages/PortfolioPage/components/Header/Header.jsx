import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { useState } from "react";

function Header() {
  const [hidden, setHidden] = useState(true);
  return (
    <header className="header container">
      {/* logo goes here */}
      <FontAwesomeIcon
        icon={faBars}
        size="xl"
        className="header-icon"
        onClick={() => {
          setHidden(!hidden);
        }}
      />

      <nav className="header-nav" data-hidden={hidden}>
        <ul className="header-list">
          <FontAwesomeIcon
            icon={faX}
            className="nav-icon-x"
            onClick={() => {
              setHidden(!hidden);
            }}
          />
          <li className="header-list-items">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
