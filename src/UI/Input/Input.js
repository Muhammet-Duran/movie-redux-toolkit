import styles from "./Input.module.css";

const Input = ({ onChange, placeholder }) => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </form>
  );
};

export default Input;
