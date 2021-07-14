import './App.css';
import TodoList from './components/TodoList';

function App () {
  return (
    <div className="wrapper">
      <div className='header'>
        <h3>Список задач</h3>
      </div>
     <TodoList />
    </div>
  );
}

export default App;
