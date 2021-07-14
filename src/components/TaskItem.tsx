type AppProps = {
  tasks?: any;
  deleteTask: () => void;
  isDoneTask: () => void;
}

const TaskItem = ({ tasks, deleteTask, isDoneTask }: AppProps) => {
  return (
    <div className="d-flex justify-content-between mt-2 p-2">
      <div onClick={isDoneTask}>
      <h3 className={tasks.isDone ? 'done' : 'notdone'}>{tasks.todo}</h3>
      </div>
      <div className='d-flex justify-content-between align-items-center bcg-red'>
      <i className="fas fa-trash-alt" onClick={deleteTask}></i>
      </div>
    </div>
  );
};

export default TaskItem;
