import styles from "./Input.module.css";

const Input = ({
  onChange,
  placeholder,
  value,
  onSubmit,
  type,
  maxLength,
  pattern,
  required,
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        maxLength={maxLength}
        pattern={pattern}
        required={required}
      />
    </form>
  );
};

export default Input;
