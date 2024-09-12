import React from "react";

const Task = ({ task, index, removeTask, completeTask }) => {
  return (
    <div className="border-solid border m-3 p-1 flex justify-between">
      <li className={task.completed ? "m-1 line-through" : "m-1"}>
        {task.title}
      </li>
      <div className="flex">
        <img
          onClick={() => completeTask(index)}
          alt="complete task"
          className="h-5 py-auto m-1 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Eo_circle_yellow_checkmark.svg/1200px-Eo_circle_yellow_checkmark.svg.png"
        />
        <img
          onClick={() => removeTask(index)}
          alt="yoyo"
          className="h-5 py-auto m-1 cursor-pointer"
          src="https://cdn-icons-png.freepik.com/512/210/210135.png"
        />
      </div>
    </div>
  );
};

export default Task;
