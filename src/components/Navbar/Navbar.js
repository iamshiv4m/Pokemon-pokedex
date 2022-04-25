import React, { useState } from "react";
import "./Navbar.css";
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import pokeball from "../../assests/pokeball.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <img className="icon" src={pokeball} alt="pokeball" />
        <div className="logo">
          <h2>
            <span>POKEMON</span>
            <span>&nbsp;Wiki</span>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Pokemon">Pokemon</NavLink>
            </li>
            <li>
              <a href="https://pokeapi.co/docs/v2">Pokedex API</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="https://github.com/iamshiv4m" target="_jha">
                <FaGithub className="github" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ogxscrewu/" target="_jha">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/shivamjha2710/"
                target="_jha"
              >
                <FaLinkedin className="linkedin" />
              </a>
            </li>
          </ul>

 <div className="hamburger-menu">
            <GiHamburgerMenu
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
