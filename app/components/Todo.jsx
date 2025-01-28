"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddBtn = (event) => {
    event.preventDefault();
    if (newTask) {
      setTasks((pre) => {
        return [...pre, { todo: newTask, key: uuidv4(), done: false }];
      });
    }
    setNewTask("");
  };

  const handleDeletekBtn = (key) => {
    setTasks((pre) => pre.filter((p) => p.key !== key));
  };

  const handleMarkBtn = (key) => {
    const marked = tasks.map((pre) =>
      pre.key === key ? { ...pre, done: !pre.done } : pre
    );
    setTasks(marked);
  };

  return (
    <div className="items-center justify-items-center p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl mb-6">Todo App</h1>
        <form onSubmit={handleAddBtn}>
          <input
            className="text-black"
            placeholder="Add Task"
            value={newTask}
            onChange={handleNewTask}
          />
          &nbsp;&nbsp;
          <button>+ Add</button>
        </form>
        <div className="mt-6 text-left h-[300px] overflow-auto">
          {tasks.map((task) => (
            <span className="flex justify-between" key={task.key}>
              <li
                className={`w-[300px] overflow-auto ${
                  task.done ? "line-through" : ""
                }`}>
                {task.todo}
              </li>{" "}
              &nbsp;
              <button onClick={() => handleDeletekBtn(task.key)}>Delete</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              {task.done ? (
                <button onClick={() => handleMarkBtn(task.key)}>
                  - Unmark
                </button>
              ) : (
                <button onClick={() => handleMarkBtn(task.key)}>+ Mark</button>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
