import "./App.css";
import Todolist from "./component/Todolist";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <div className="w-full py-16 bg-yellow-400 flex items-baseline justify-start">
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
      <Footer />
    </div>
  );
}

export default App;
