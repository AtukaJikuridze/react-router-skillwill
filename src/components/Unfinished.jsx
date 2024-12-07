import React from "react";

const Unfinished = (props) => {
  return (
    <>
      <div className="list">
        <h1>UnFinished</h1>
        <div className="tasks">
          {props.tasks.map((e) => (
            <div className="unfinished-flex" key={Math.random()}>
              <h2>{e.title}</h2>
              <button
                className="finish-task"
                onClick={() => props.finishTask(e.id)}
              >
                Finish Task
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Unfinished;
