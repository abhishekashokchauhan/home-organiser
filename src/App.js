import "./App.css";
import Todolist from "./component/Todolist";

function App() {
  return (
    <div className="h-screen w-full pt-20 bg-yellow-400 flex items-baseline justify-start">
      <div className="p-2"></div>
      <Todolist name="Abhishek's To-Do!" />
      <div className="p-2"></div>
      <Todolist name="Tanvi's To-Do!" />
      <div className="p-2"></div>
      <Todolist name="Grocery to buy" />
      <div className="p-2"></div>
      <Todolist name="Vegetables to buy" />
      <div className="p-2"></div>
    </div>
  );
}

export default App;
