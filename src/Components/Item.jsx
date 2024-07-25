import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const buyButtonClick = (e) => {
    console.log(e);
    console.log(`${foodItem} being bought`);
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-primary`}
        onClick={(e) => buyButtonClick(e)}
      >
        Buy Now
      </button>
    </li>
  );
};

export default Item;
