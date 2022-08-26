import sublinks from "../Data";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const MobileMenu = () => {
  const { closeMobileMenu, isMobileMenuOpen } = useGlobalContext();
  return (
    <div
      className={`${
        isMobileMenuOpen
          ? "mobile-menu-wrapper mobile-menu-open"
          : "mobile-menu-wrapper"
      }`}
    >
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <button onClick={closeMobileMenu}>
            <FaTimes />
          </button>
        </div>
        <ul className="mobile-menu-links">
          {sublinks.map((link, index) => {
            const { page, links } = link;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <ul className="mobile-menu-sublinks">
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <li key={index} className="sublink">
                        <a href={url}>
                          {icon}&nbsp;
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
