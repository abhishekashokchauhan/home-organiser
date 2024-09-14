import React from "react";

const Task = ({ task, index, removeTask, toggleTaskStatus }) => {
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
        {!task.completed && (
          <span
            onClick={() => toggleTaskStatus(index)}
            className="h-5 py-auto m-1 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FACC14"
            >
              <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </span>
        )}
        {task.completed && (
          <span
            onClick={() => toggleTaskStatus(index)}
            className="h-5 py-auto m-1 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FACC14"
            >
              <path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z" />
            </svg>
          </span>
        )}
        <span
          onClick={() => removeTask(index)}
          className="h-5 py-auto m-1 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FACC14"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Task;
