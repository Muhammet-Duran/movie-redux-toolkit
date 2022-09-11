import styles from "./Input.module.css";

const Input = ({ onChange, placeholder, value, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default Input;
