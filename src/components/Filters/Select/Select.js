import styles from "./Select.module.css";
import { useDispatch} from "react-redux";
import { selectCategory, selectYears } from "features/cardSlice";


const Select = () => {
  const dispatch = useDispatch();


  let movieCategories = [
    { label: "POPULARS", value: "popular" },
    { label: "SERIES", value: "episode" },
  ];
  return (
    <select
      className={styles.select}
      onChange={(e) => {
        dispatch(selectCategory({ category: e.target.value, skip: true }));
        dispatch(selectYears({ year: "", skip: true }));
      }}
    >
      {movieCategories.map((category, index) => (
        <option key={index} value={category.value}>
          {category.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
