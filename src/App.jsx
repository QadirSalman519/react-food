import { useState } from "react";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  // const foodItems = ["Sabzi", "Green Vegies", "Roti", "Salad", "Milk", "Ghee"];

  let [foodItems, setFoodItems] = useState([

  ])

  let [userText, setUserText] = useState("User text")

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = ""
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      console.log('Food entered value is:' + newFoodItem)
    }
    setUserText(e.target.value)
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleOnChange={onKeyDown} />
        <ErrorMessage items={foodItems} />
        {/* <p>{userText}</p> */}
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>All above items are good for healthy food.</p>
      </Container> */}
    </>
  );
}

export default App;
