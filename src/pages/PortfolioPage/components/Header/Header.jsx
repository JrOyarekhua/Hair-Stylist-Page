import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { useState, useEffect } from "react";

function Header() {
  const [show, setShow] = useState(false);

  function handleIconClick() {
    // set clicked to be true
    setShow(!show);
  }

  function handleXClick() {
    setShow(!show);
  }

  useEffect(() => {
    // callback to handle resize
    function handleResize() {
      if (window.innerWidth > 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    // event listener to watch the size of the window
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header header-mobile container">
      {/* logo goes here */}
      <nav className="header-nav">
        {!show && (
          <FontAwesomeIcon icon={faBars} onClick={handleIconClick} size="xl" />
        )}
        {show && (
          <ul className="header-list">
            {window.innerWidth < 768 && (
              <FontAwesomeIcon
                icon={faX}
                className="nav-icon-X"
                onClick={handleXClick}
              />
            )}
            <li>
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
        )}
      </nav>
    </header>
  );
}

export default Header;
