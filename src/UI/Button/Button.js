
import styles from "./Button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.movie_btn}>
      {children}
    </button>
  );
};

export default Button;
