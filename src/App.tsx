import { FC } from 'react';
import './App.css';
import TodoList from './components/TodoList';

const App: FC = () => (
  <div className="wrapper">
    <div className="header">
      <h3>Список задач</h3>
    </div>
    <TodoList />
  </div>
);

export default App;
