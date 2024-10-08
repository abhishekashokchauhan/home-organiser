import React from "react";
import Task from "./Task";
import { useState, useEffect } from "react";

const defaultTask = [
  {
    title: "Grab some Pizza",
    completed: false,
  },
];

const Todolist = ({ name }) => {
  const [items, setItems] = useState(defaultTask);
  const [newItem, setNewItem] = useState("");

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(name)) || [];
    setItems(savedTodos);
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(items));
  }, [items]);

  const addTask = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { title: newItem, completed: false }]);
      setNewItem("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (newItem.trim() !== "") {
        addTask();
      }
    }
  };

  const toggleTaskStatus = (index) => {
    const newTasks = [...items];
    newTasks[index].completed = !newTasks[index].completed;
    setItems(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...items];
    newTasks.splice(index, 1);
    setItems(newTasks);
  };

  return (
    <div className="p-5 bg-black h-auto flex-row rounded-2xl text-white">
      <h1 className="text-3xl mb-5 text-center">{name}</h1>

      <div>
        <ul className="container-height">
          {items.map((task, index) => (
            <Task
              task={task}
              key={index}
              index={index}
              toggleTaskStatus={toggleTaskStatus}
              removeTask={removeTask}
            />
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mb-3">
        <input
          className="text-black py-1 px-2 rounded-lg border-blue-500 input-width"
          type="text"
          placeholder="Add new item here"
          onKeyDown={handleKeyDown}
          value={newItem}
          onChange={(e) => {
            setNewItem(e.target.value);
          }}
        />
        <button
          className="bg-yellow-100 text-black rounded-lg px-2 py-1 my-5"
          onClick={addTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Todolist;
