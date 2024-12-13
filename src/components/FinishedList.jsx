const FinishedList = ({ finishedList, moveToUnfinished, removeTask }) => {
  return (
    <div className="list">
      <h1>Finished</h1>
      <div className="tasks">
        {finishedList.map((e) => (
          <div className="finished-flex" key={e.id}>
            <h2>{e.title}</h2>
            <div className="finished-buttons">
              <button
                className="move-to-unfinished"
                onClick={() => moveToUnfinished(e.id)}
              >
                Move to Unfinished
              </button>
              <button className="remove-task" onClick={() => removeTask(e.id)}>
                Remove Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinishedList;
