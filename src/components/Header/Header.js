import Logo from "UI/Logo/Logo";
import styles from "./Header.module.css";
import Nav from "./Nav/Nav";
import cn from "classnames";
import { useState } from "react";

const Header = () => {
  const [isHome, setIsHome] = useState(true);
  const handleMenu = () => {
    setIsHome(!isHome);
  };
  return (
    <div className={styles.header}>
      <div className={cn("container", styles.header_container)}>
        <Logo setIsHome={setIsHome} />
        <Nav isHome={isHome} handleMenu={handleMenu} />
      </div>
    </div>
  );
};

export default Header;
