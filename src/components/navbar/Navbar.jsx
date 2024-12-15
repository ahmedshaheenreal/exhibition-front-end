import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`${styles.mainContainer} `}>
      <div className={`${styles.navbarContainer} container`}>
        <div className={styles.navHeaderMobile}>
          <NavLink>Logo</NavLink>
          <div className={styles.menu} onClick={toggleMenu}>
            {!menuOpen ? "Menu" : "close"}
          </div>
        </div>
        <div className={`${styles.navbarLinks} ${menuOpen ? styles.open : ""}`}>
          <nav className={`${styles.navbar} `}>
            <div className={`${styles.group} ${styles.groupLeft}`}>
              <NavLink to="/exhibition">Exhibition</NavLink>
              <NavLink to="/">Artists </NavLink>
              <NavLink to="/">About us</NavLink>
            </div>
            <div className={`${styles.group} ${styles.groupRight}`}>
              <NavLink to="/">Search</NavLink>
              <NavLink to="/">login</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
