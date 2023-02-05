import { useState } from "react";
import styles from "./Select.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "features/cardSlice";

const Select = () => {
  const dispatch = useDispatch();
  const { category, skip } = useSelector((state) => state.cardSlice);
  console.log(category, "ctegorySonuc");
  let movieCategories = [
    { label: "POPULARS", value: "popular" },
    { label: "SERIES", value: "episode" },
  ];
  return (
    <select
      className={styles.select}
      onChange={(e) =>
        dispatch(selectCategory({ category: e.target.value, skip: true }))
      }
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
