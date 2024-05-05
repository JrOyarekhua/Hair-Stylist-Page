import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faX,
  faHouse,
  faUser,
  faImage,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
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
            <span>
              <FontAwesomeIcon
                icon={faHouse}
                className="list-icon house-icon"
              />
            </span>
            <a href="#home">Home</a>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <a href="#About">About</a>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faImage} />
            </span>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
              >
                <path d="M 33.96875 0 C 32.125 0 30.421875 0.675781 29.21875 1.875 L 2.125 28.9375 C 0.769531 30.289063 0 32.222656 0 34.28125 C 0 36.175781 0.679688 37.960938 1.84375 39.125 L 4.09375 41.46875 L 4.09375 41.5 C 4.148438 41.570313 4.210938 41.632813 4.28125 41.6875 C 4.28125 41.699219 4.28125 41.707031 4.28125 41.71875 L 12.28125 49.71875 C 12.679688 50.117188 13.320313 50.117188 13.71875 49.71875 C 14.117188 49.320313 14.117188 48.679688 13.71875 48.28125 L 6.21875 40.78125 C 6.4375 40.277344 6.75 39.550781 7.34375 38.78125 L 15.28125 46.71875 C 15.679688 47.117188 16.320313 47.117188 16.71875 46.71875 C 17.117188 46.320313 17.117188 45.679688 16.71875 45.28125 L 8.75 37.3125 L 10.3125 35.75 L 18.28125 43.71875 C 18.679688 44.117188 19.320313 44.117188 19.71875 43.71875 C 20.117188 43.320313 20.117188 42.679688 19.71875 42.28125 L 11.75 34.3125 L 13.3125 32.75 L 21.28125 40.71875 C 21.679688 41.117188 22.320313 41.117188 22.71875 40.71875 C 23.117188 40.320313 23.117188 39.679688 22.71875 39.28125 L 14.75 31.3125 L 16.3125 29.75 L 24.28125 37.71875 C 24.679688 38.117188 25.320313 38.117188 25.71875 37.71875 C 26.117188 37.320313 26.117188 36.679688 25.71875 36.28125 L 17.75 28.3125 L 19.3125 26.75 L 27.28125 34.71875 C 27.679688 35.117188 28.320313 35.117188 28.71875 34.71875 C 29.117188 34.320313 29.117188 33.679688 28.71875 33.28125 L 20.75 25.3125 L 22.3125 23.75 L 30.28125 31.71875 C 30.679688 32.117188 31.320313 32.117188 31.71875 31.71875 C 32.117188 31.320313 32.117188 30.679688 31.71875 30.28125 L 23.78125 22.34375 L 25.34375 20.78125 L 33.28125 28.71875 C 33.679688 29.117188 34.320313 29.117188 34.71875 28.71875 C 35.117188 28.320313 35.117188 27.679688 34.71875 27.28125 L 26.78125 19.34375 L 28.34375 17.78125 L 36.28125 25.71875 C 36.679688 26.117188 37.320313 26.117188 37.71875 25.71875 C 38.117188 25.320313 38.117188 24.679688 37.71875 24.28125 L 29.78125 16.34375 L 31.34375 14.78125 L 39.28125 22.71875 C 39.679688 23.117188 40.320313 23.117188 40.71875 22.71875 C 41.117188 22.320313 41.117188 21.679688 40.71875 21.28125 L 32.78125 13.34375 L 34.34375 11.78125 L 42.28125 19.71875 C 42.679688 20.117188 43.320313 20.117188 43.71875 19.71875 C 44.117188 19.320313 44.117188 18.679688 43.71875 18.28125 L 35.78125 10.34375 L 37.34375 8.78125 L 45.28125 16.71875 C 45.679688 17.117188 46.320313 17.117188 46.71875 16.71875 C 47.117188 16.320313 47.117188 15.679688 46.71875 15.28125 L 38.8125 7.375 C 39.578125 6.789063 40.277344 6.449219 40.78125 6.21875 L 48.28125 13.71875 C 48.679688 14.117188 49.320313 14.117188 49.71875 13.71875 C 50.117188 13.320313 50.117188 12.679688 49.71875 12.28125 L 41.84375 4.4375 C 41.796875 4.367188 41.722656 4.308594 41.65625 4.25 C 41.628906 4.214844 41.597656 4.183594 41.5625 4.15625 L 41.53125 4.125 C 41.511719 4.113281 41.488281 4.101563 41.46875 4.09375 L 38.9375 1.8125 C 37.695313 0.671875 35.847656 0 33.96875 0 Z"></path>
              </svg>
            </span>
            <a href="#Services">Services</a>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faImage} />
            </span>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
