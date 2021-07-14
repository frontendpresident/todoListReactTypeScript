function TaskOptions() {
  return (
    <div className="d-flex justify-content-between mt-2">
      <button type="button" className="btn btn-outline-primary">
        Все задачи
      </button>
      <button type="button" className="btn btn-outline-primary">
        Выполненые
      </button>
      <button type="button" className="btn btn-outline-primary">
        Не выполненые
      </button>
    </div>
  );
}

export default TaskOptions;
