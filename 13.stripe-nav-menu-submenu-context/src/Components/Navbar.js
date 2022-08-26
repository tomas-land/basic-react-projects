import React from "react";
import logo from "../Images/logo.svg";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../context";
import sublinks from "../Data";
import Submenu from "./Submenu";

const Navbar = () => {
  const { openMobileMenu, openSubMenu, closeSubMenu } = useGlobalContext();
  const displaySubMenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left+tempBtn.right)/2;
    console.log(tempBtn);
    openSubMenu(page,center)
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="nav-logo" />
          <button className="btn-menu" onClick={openMobileMenu}>
            <FaBars />
          </button>
          <ul className="nav-links">
            {sublinks.map((link, index) => {
              const { page, links } = link;
              return (
                <button
                  className="nav-link"
                  key={index}
                  onMouseOver={displaySubMenu}
                >
                  {page}
                </button>
              );
            })}
            <Submenu />
          </ul>
          <button className="btn-sign-in">
            Sign-in
            {/* <FaChevronRight /> */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
