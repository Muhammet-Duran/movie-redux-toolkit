import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";
const Nav = ({ isHome, handleMenu }) => {
  const { favoriMovieLength } = useSelector((state) => state.cardSlice);

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
