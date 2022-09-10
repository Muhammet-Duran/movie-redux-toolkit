import Input from "UI/Input/Input";
import styles from "./ByYears.module.css";

const ByYears = () => {
  return (
    <div className={styles.years}>
      <Input placeholder="Search By Years" />
    </div>
  );
};

export default ByYears;
