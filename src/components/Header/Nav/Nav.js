import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";
const Nav = () => {
  const [isHome, setIsHome] = useState(true);
  const handleMenu = () => {
    setIsHome(!isHome);
  };
  return (
    <nav className={styles.nav}>
      {!isHome ? (
        <Link onClick={handleMenu} className={styles.nav_link} to="/">
          HOME
        </Link>
      ) : (
        <Link onClick={handleMenu} className={styles.nav_link} to="/favorites">
          MY FAVORİTES
        </Link>
      )}
    </nav>
  );
};

export default Nav;
