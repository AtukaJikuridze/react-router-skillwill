import { Component } from "react";
import TodoMain from "./components/TodoMain";
import "./App.css";

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <TodoMain />
      </div>
    );
  }
}
export default App;
