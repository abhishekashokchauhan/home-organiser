import React from "react";

const Task = ({ task, index, removeTask, completeTask }) => {
  return (
    <div className="grid grid-cols-[70%_30%]  gap-4 border-solid border p-1">
      <div className="">
        <li
          className={
            task.completed ? "m-1 line-through break-words" : "m-1 break-words"
          }
        >
          {task.title}
        </li>
      </div>
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
