import styles from "./Select.module.css";

const Select = () => {
  return (
    <select className={styles.select}>
      <option value="popular">POPULARS</option>
      <option value="episodes">SERIES</option>
    </select>
  );
};

export default Select;
