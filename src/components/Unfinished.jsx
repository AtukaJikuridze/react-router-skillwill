import React, { Component } from "react";

class Unfinished extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.tasks !== this.props.tasks;
  }

  render() {
    console.log("unfinished");

    return (
      <div className="list">
        <h1>UnFinished</h1>
        <div className="tasks">
          {this.props.tasks.map((e) => (
            <div className="unfinished-flex" key={e.id}>
              <h2>{e.title}</h2>
              <button
                className="finish-task"
                onClick={() => this.props.finishTask(e.id)}
              >
                Finish Task
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Unfinished;
