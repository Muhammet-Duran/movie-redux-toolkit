import { useState } from "react";
import styles from "./Select.module.css";

const Select = () => {
  const [movieCategory, setMovieCategory] = useState("popular");
  return (
    <select className={styles.select} onChange={(value) => setMovieCategory()}>
      <option value="popular">POPULARS</option>
      <option value="episodes">SERIES</option>
    </select>
  );
};

export default Select;
