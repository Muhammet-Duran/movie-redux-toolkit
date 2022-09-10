// import { Router } from "react-router-dom";
import Router from "../../Router";
import styles from "./Layout.module.css";
import cn from "classnames";

const Layout = () => {
  return (
    <div className={cn("container", styles.layout)}>
      <Router />
    </div>
  );
};

export default Layout;
