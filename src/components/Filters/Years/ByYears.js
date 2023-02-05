import { useEffect, useState } from "react";
import Input from "UI/Input/Input";
import styles from "./ByYears.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectYears } from "features/cardSlice";

const ByYears = () => {
  const [searchTerm] = useState("");

  const dispatch = useDispatch();

  const handleSearchYears = (e) => {
    const re = /^[0-9\b]+$/; //rules
    if (e.target.value === "" || re.test(e.target.value)) {
      dispatch(selectYears({ year: e.target.value, skip: true }));
    }
  };

  // const findMovie = () => {
  //   dispatch(selectYears("hello"));
  // };
  useEffect(() => {
    if (searchTerm.length === 4) {
      setSpinnerLoading(true);
      const delayDebounceFn = setTimeout(() => {
        setSpinnerLoading(false);
      }, 1000);
      return () => {
        clearTimeout(delayDebounceFn);
        setSpinnerLoading(false);
      };
    }
  }, [searchTerm]);
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  return (
    <div className={styles.years}>
      {/* <button onClick={findMovie}>ara</button> */}
      <div>
        {spinnerLoading && <div className={styles.spinner_gif}></div>}
        <Input
          onChange={handleSearchYears}
          placeholder="Search By Years"
          type="text"
          maxLength="4"
          // pattern="\d{4}"
          required
        />
      </div>
    </div>
  );
};

export default ByYears;
