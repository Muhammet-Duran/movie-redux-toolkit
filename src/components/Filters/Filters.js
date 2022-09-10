import styles from "./Filters.module.css";
import Search from "./Search/Search";
import Select from "./Select/Select";
import ByYears from "./Years/ByYears";

const Filters = () => {
  return (
    <div className={styles.filters_area}>
      <>
        <Search />
      </>
      <>
        <Select />
        <ByYears />
      </>
    </div>
  );
};

export default Filters;
