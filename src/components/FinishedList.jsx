import React, { Component } from "react";

class FinishedList extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.finishedList !== this.props.finishedList;
  }

  render() {
    console.log("finished");
    return (
      <div className="list">
        <h1>Finished</h1>
        <div className="tasks">
          {this.props.finishedList.map((e) => (
            <div className="finished-flex" key={e.id}>
              <h2>{e.title}</h2>
              <div className="finished-buttons">
                <button
                  className="move-to-unfinished"
                  onClick={() => this.props.moveToUnfinished(e.id)}
                >
                  Move to Unfinished
                </button>
                <button
                  className="remove-task"
                  onClick={() => this.props.removeTask(e.id)}
                >
                  Remove Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FinishedList;
