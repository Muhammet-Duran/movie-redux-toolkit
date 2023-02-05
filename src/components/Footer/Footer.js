import styles from "./Footer.module.css";
import cn from "classnames";

const Footer = () => {
  return (
    <footer className={cn("container", styles.footer)}>
      <div className={styles.footer_inner}>
        <span>&#169;</span>
        <a
          href="https://github.com/Muhammet-Duran"
          target="_blank"
          rel="noreferrer"
        >
          Muhammet Duran
        </a>

        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
