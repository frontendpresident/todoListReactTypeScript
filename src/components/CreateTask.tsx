import React, { useState } from "react";
import TaskItem from "./TaskItem";

function CreateTask() {
  const [text, setText] = useState<string>("");
  const [task, setTask] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (text) {
      const newTask = {
        id: task.length,
        todo: text,
        isDone: false,
      };

      task.push(newTask);
      setText("");
    }
  };

  const deleteTask = (id : React.MouseEvent<HTMLButtonElement>) => {
    const newArr = task.filter(item => item.id !== id)
    setTask(newArr)
  }

  const isDoneTask = (id: React.MouseEvent) => {
   const newArr = task.map(item => {
      if(item.id === id){
        return {
          ...item,
          isDone: !item.isDone
        }
      }
      return item
    })
    setTask(newArr)
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Введите задачу:</label>
        <input className="form-control" value={text} onChange={handleChange} />
      </div>
      <div className="d-grid gap-2">
        <button onClick={handleClick} className="btn btn-primary" type="button">
          Добавить
        </button>
      </div>
      {task.map((task) => {
        return <TaskItem 
        key={task.id} 
        tasks={task} 
        deleteTask={() => deleteTask(task.id)}
        isDoneTask={() => isDoneTask(task.id)}
        />;
      })}
    </div>
  );
}

export default CreateTask;
