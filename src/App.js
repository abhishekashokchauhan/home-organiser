import "./App.css";
import Todolist from "./component/Todolist";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 py-16 bg-yellow-400">
        <div>
          <Todolist name="Abhishek's To-Do!" />
        </div>
        <div>
          <Todolist name="Tanvi's To-Do!" />
        </div>
        <div>
          <Todolist name="Grocery to buy" />
        </div>
        <div>
          <Todolist name="Vegetables to buy" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
