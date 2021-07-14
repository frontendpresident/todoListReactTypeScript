import React, { useState } from 'react';
import { FC } from 'react';
import { ITodopProps } from '../types/types';
import TaskItem from './TaskItem';

const TodoList: FC = () => {
  const [text, setText] = useState<string>('');
  const [tasks, setTask] = useState<ITodopProps[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (text) {
      const newTask: ITodopProps = {
        id: tasks.length,
        todo: text,
        isDone: false,
      };
      setTask((prevState) => [...prevState, newTask]);
      setText('');
    }
  };

  const deleteTask = (id: number): void =>
    setTask((prevState) => prevState.filter((item) => item.id !== id));

  const isDoneTask = (id: number): void =>
    setTask((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      }),
    );

  return (
    <div className="container p-2">
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
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          tasks={task}
          deleteTask={() => deleteTask(task.id)}
          isDoneTask={() => isDoneTask(task.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
