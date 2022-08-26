import React from "react";
import { social, links } from "../Data";
import Logo from "../assets/images/logo192.png";
import { FaBars } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => { //getting link height to match mobile menu height
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className="nav-container">
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo-container">
            <img src={Logo} alt="" className="logo" />
            <h1>Atom</h1>
          </div>
          <button
            className={`${
              showLinks ? "btn-bars rotate-down" : "btn-bars rotate-up"
            }`}
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
          <div
            ref={linksContainerRef}
            className={`${
              showLinks ? "links-container show-container" : "links-container"
            }`}
          >
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} href={url} className="link">
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>
                    <span>{icon}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
