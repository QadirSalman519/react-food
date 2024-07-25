import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import FoodItems from "./Components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const foodItems = ["Sabzi", "Green Vegies", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>All above items are good for healthy food.</p>
      </Container> */}
    </>
  );
}

export default App;
