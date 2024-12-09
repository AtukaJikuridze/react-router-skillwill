// import { Component } from "react";
// import Unfinished from "./Unfinished";
// import FinishedList from "./FinishedList";

// class TodoMain extends Component {
//   state = {
//     inputValue: "",
//     UnfinishedList: [],
//     finishedList: [],
//   };

//   componentDidMount() {
//     console.log("todo");

//     const savedUnfinished =
//       JSON.parse(localStorage.getItem("UnfinishedList")) || [];
//     const savedFinished =
//       JSON.parse(localStorage.getItem("finishedList")) || [];

//     this.setState({
//       UnfinishedList: savedUnfinished,
//       finishedList: savedFinished,
//     });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.UnfinishedList !== this.state.UnfinishedList) {
//       localStorage.setItem(
//         "UnfinishedList",
//         JSON.stringify(this.state.UnfinishedList)
//       );
//     }
//     if (prevState.finishedList !== this.state.finishedList) {
//       localStorage.setItem(
//         "finishedList",
//         JSON.stringify(this.state.finishedList)
//       );
//     }
//   }

//   onChange = (e) => {
//     const value = e.target.value;
//     this.setState({ inputValue: value });
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.inputValue.length) {
//       const newTask = { id: Math.random(), title: this.state.inputValue };

//       this.setState({
//         UnfinishedList: [...this.state.UnfinishedList, newTask],
//         inputValue: "",
//       });
//     }
//   };

//   finishTask = (ev) => {
//     const currentTask = this.state.UnfinishedList.find((e) => e.id === ev);
//     const newUnfinishedArr = this.state.UnfinishedList.filter(
//       (e) => e.id !== ev
//     );
//     this.setState({
//       finishedList: [...this.state.finishedList, currentTask],
//       UnfinishedList: newUnfinishedArr,
//     });
//   };

//   moveToUnfinished = (ev) => {
//     const currentTask = this.state.finishedList.find((e) => e.id === ev);
//     const newFinishedArr = this.state.finishedList.filter((e) => e.id !== ev);
//     this.setState({
//       UnfinishedList: [...this.state.UnfinishedList, currentTask],
//       finishedList: newFinishedArr,
//     });
//   };

//   removeTask = (ev) => {
//     const newFinishedArr = this.state.finishedList.filter((e) => e.id !== ev);
//     this.setState({ finishedList: newFinishedArr });
//   };

//   render() {
//     return (
//       <div className="todo-main">
//         <form onSubmit={this.onSubmit}>
//           <label>
//             <input
//               type="text"
//               placeholder="Enter Task !"
//               onChange={this.onChange}
//               value={this.state.inputValue}
//             />
//             <input type="submit" />
//           </label>
//         </form>

//         <div className="todo-flex">
//           <Unfinished
//             tasks={this.state.UnfinishedList}
//             finishTask={this.finishTask}
//           />
//           <FinishedList
//             finishedList={this.state.finishedList}
//             moveToUnfinished={this.moveToUnfinished}
//             removeTask={this.removeTask}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default TodoMain;



import { Component } from "react";
import Unfinished from "./Unfinished";
import FinishedList from "./FinishedList";

class TodoMain extends Component {
  state = {
    inputValue: "",
    UnfinishedList: [],
    finishedList: [],
  };

  componentDidMount() {
    const savedUnfinished =
      JSON.parse(localStorage.getItem("UnfinishedList")) || [];
    const savedFinished =
      JSON.parse(localStorage.getItem("finishedList")) || [];

    this.setState({
      UnfinishedList: savedUnfinished,
      finishedList: savedFinished,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.UnfinishedList !== this.state.UnfinishedList) {
      localStorage.setItem(
        "UnfinishedList",
        JSON.stringify(this.state.UnfinishedList)
      );
    }
    if (prevState.finishedList !== this.state.finishedList) {
      localStorage.setItem(
        "finishedList",
        JSON.stringify(this.state.finishedList)
      );
    }
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState({ inputValue: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue.length) {
      const newTask = { id: Math.random(), title: this.state.inputValue };

      this.setState({
        UnfinishedList: [...this.state.UnfinishedList, newTask],
        inputValue: "",
      });
    }
  };

  finishTask = (ev) => {
    const currentTask = this.state.UnfinishedList.find((e) => e.id === ev);
    const newUnfinishedArr = this.state.UnfinishedList.filter(
      (e) => e.id !== ev
    );
    this.setState({
      finishedList: [...this.state.finishedList, currentTask],
      UnfinishedList: newUnfinishedArr,
    });
  };

  moveToUnfinished = (ev) => {
    const currentTask = this.state.finishedList.find((e) => e.id === ev);
    const newFinishedArr = this.state.finishedList.filter((e) => e.id !== ev);
    this.setState({
      UnfinishedList: [...this.state.UnfinishedList, currentTask],
      finishedList: newFinishedArr,
    });
  };

  removeTask = (ev) => {
    const newFinishedArr = this.state.finishedList.filter((e) => e.id !== ev);
    this.setState({ finishedList: newFinishedArr });
  };

  render() {
    return (
      <div className="todo-main">
        <form onSubmit={this.onSubmit}>
          <label>
            <input
              type="text"
              placeholder="Enter Task !"
              onChange={this.onChange}
              value={this.state.inputValue}
            />
            <input type="submit" />
          </label>
        </form>

        <div className="todo-flex">
          <Unfinished
            tasks={this.state.UnfinishedList}
            finishTask={this.finishTask}
          />
          <FinishedList
            finishedList={this.state.finishedList}
            moveToUnfinished={this.moveToUnfinished}
            removeTask={this.removeTask}
          />
        </div>
      </div>
    );
  }
}

export default TodoMain;