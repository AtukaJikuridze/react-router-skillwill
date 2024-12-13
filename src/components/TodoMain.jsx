import React, { useState, useEffect } from "react";
import Unfinished from "./Unfinished";
import FinishedList from "./FinishedList";

const TodoMain = () => {
  const [inputValue, setInputValue] = useState("");
  const [unfinishedList, setUnfinishedList] = useState([]);
  const [finishedList, setFinishedList] = useState([]);
  console.log(localStorage.setItem("a", "b"));
  console.log(localStorage.getItem("a"));

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length) {
      const newTask = {
        id: Math.random(),
        title: inputValue,
      };

      setUnfinishedList([...unfinishedList, newTask]);
      setInputValue("");
    }
  };

  const finishTask = (id) => {
    const currentTask = unfinishedList.find((e) => e.id === id);
    const newUnfinishedArr = unfinishedList.filter((e) => e.id !== id);

    setFinishedList([...finishedList, currentTask]);
    setUnfinishedList(newUnfinishedArr);
  };

  const moveToUnfinished = (id) => {
    const currentTask = finishedList.find((e) => e.id === id);
    const newFinishedArr = finishedList.filter((e) => e.id !== id);

    setUnfinishedList([...unfinishedList, currentTask]);
    setFinishedList(newFinishedArr);
  };

  const removeTask = (id) => {
    const newFinishedArr = finishedList.filter((e) => e.id !== id);
    setFinishedList(newFinishedArr);
  };

  return (
    <div className="todo-main">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter Task !"
            onChange={handleInputChange}
            value={inputValue}
          />
          <input type="submit" />
        </label>
      </form>

      <div className="todo-flex">
        <Unfinished tasks={unfinishedList} finishTask={finishTask} />
        <FinishedList
          finishedList={finishedList}
          moveToUnfinished={moveToUnfinished}
          removeTask={removeTask}
        />
      </div>
    </div>
  );
};

export default TodoMain;
