import React, { useState } from "react";
import TaskItem from "./TaskItem";
import { ITodo } from "../types/types";

function TodoList() {
  const [text, setText] = useState<string>("");
  const [task, setTask] = useState<ITodo[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (text) {
      const newTask: ITodo = {
        id: task.length,
        todo: text,
        isDone: false,
      };
      setTask((prevState) => [...prevState, newTask]);
      setText("");
    }
  };

  const deleteTask = (id: number) => {
    return setTask((prevState) => prevState.filter((item) => item.id !== id));
  };

  const isDoneTask = (id: number) => {
    return setTask((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Введите задачу:</label>
        <input className="form-control" value={text} onChange={handleChange} />
      </div>
      <div className="d-grid gap-2">
        <button
          onClick={handleClick}
          className="btn btn-outline-primary"
          type="button"
        >
          Добавить
        </button>
      </div>
      {task.map((task) => {
        return (
          <TaskItem
            key={task.id}
            tasks={task}
            deleteTask={() => deleteTask(task.id)}
            isDoneTask={() => isDoneTask(task.id)}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
