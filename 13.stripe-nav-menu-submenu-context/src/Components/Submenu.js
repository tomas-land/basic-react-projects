import React, { useEffect, useRef, useState } from "react";
import { icons } from "react-icons";
import { useGlobalContext } from "../context";

const Submenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const subContainer = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("");
    const submenu = subContainer.current;
    const center = location;
    submenu.style.left = `${center}px`;
    if (links.length === 3) {
      setColumns("col-3");
    } else if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <div
      ref={subContainer}
      className={`${isSubMenuOpen ? "submenu submenu-open" : "submenu"}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-content ${columns}`}>
        {links.map((link, index) => {
          const { icon, url, label } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
