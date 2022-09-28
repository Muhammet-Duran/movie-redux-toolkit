import styles from "./Button.module.css";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

const Button = ({ onClick, children, preferences, to }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={onClick}
      className={cn(styles.movie_btn, styles?.[preferences])}
    >
      {children}
    </button>
  );
};

export default Button;
