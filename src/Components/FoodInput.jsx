import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const btnValueChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      onChange={(e) => btnValueChange(e)}
    />
  );
};

export default FoodInput;
