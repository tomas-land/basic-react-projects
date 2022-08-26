import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-center">
        <div className="logo">
          <h3>
            The<span>Cocktail</span>DB
          </h3>
        </div>
        <ul className="nav">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
