import React, { useState, useContext } from "react";
import sublinks from "./Data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setisSubMenuOpen] = useState(false);
  const [location, setLocation] = useState();
  const [page, setPage] = useState({ page: "", links: [] });

  const openMobileMenu = () => {
    setisMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setisMobileMenuOpen(false);
  };
  const openSubMenu = (text, coordinates) => {
    const page = sublinks.find((link) => {
      return link.page === text;
    });
    setPage(page);
    setLocation(coordinates);
    setisSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setisSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isMobileMenuOpen,
        isSubMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        openSubMenu,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
