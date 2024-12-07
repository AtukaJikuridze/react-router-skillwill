import React from "react";

const FinishedList = (props) => {
  return (
    <div className="list">
      <h1>Finished List</h1>
      <div className="tasks">
        {props.finishedList
          ? props.finishedList.map((e) => (
              <div className="finished-flex" key={Math.random()}>
                <h2>{e.title}</h2>
                <div className="finished-buttons">
                  <button onClick={() => props.moveToUnfinished(e.id)}>
                    Move To UnFinished
                  </button>
                  <button onClick={() => props.removeTask(e.id)}>
                    Remove Task
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default FinishedList;
