import styles from "./Logo.module.css";
import MovieSvg from "../../assets/MovieSvg";

import { Link } from "react-router-dom";

const Logo = () => {
    return (
      <Link to="/" className={styles.logo_area}>
        <span className={styles.movie_icon}>
          <MovieSvg size="52px" fillColor={"#ffc11d"}></MovieSvg>
        </span>
        <span className={styles.logo_text}>MOVİES</span>
      </Link>
    );
  };
  
  export default Logo;