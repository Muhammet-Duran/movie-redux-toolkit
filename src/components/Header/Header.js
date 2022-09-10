import Logo from "UI/Logo/Logo";
import styles from "./Header.module.css";
import Nav from "./Nav/Nav";
import cn from "classnames";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={cn("container", styles.header_container)}>
        <Logo/>
        <Nav/>
      </div>
    </div>
  )
}

export default Header;