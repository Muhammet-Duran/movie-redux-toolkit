import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";
const Nav = () => {
  const [isHome, setIsHome] = useState(true);
  const { favoriMovieLength } = useSelector((state) => state.cardSlice);
  console.log(favoriMovieLength);
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
          <div className={styles.page_link}>
            <span>MY FAVORİTES</span>
            {favoriMovieLength > 0 && (
              <span className={styles.count}>{favoriMovieLength}</span>
            )}
          </div>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
