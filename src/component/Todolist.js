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
    setItems([...items, { title: newItem, completed: false }]);
  };

  const completeTask = (index) => {
    const newTasks = [...items];
    newTasks[index].completed = true;
    setItems(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...items];
    newTasks.splice(index, 1);
    setItems(newTasks);
  };

  return (
    <div className="p-5 bg-black w-3/12 h-auto flex-row rounded-2xl text-white">
      <h1 className="text-3xl mb-5 text-center">{name}</h1>

      <div>
        <ul className="content-center">
          {items.map((task, index) => (
            <Task
              task={task}
              key={index}
              index={index}
              completeTask={completeTask}
              removeTask={removeTask}
            />
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between mb-3">
        <input
          className="text-black py-1 rounded-lg border-blue-500"
          type="text"
          placeholder=" Add new item here"
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
