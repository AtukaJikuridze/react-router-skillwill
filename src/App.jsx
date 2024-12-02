import "./App.css";
import Card from "./components/Card";
import { BookInfo } from "./components/BookInfo.js";
console.log(BookInfo);

function App() {
  return (
    <div className="App">
      <div className="books-main">
        {BookInfo.map((e) => (
          <Card
            title={e.title}
            description={e.description}
            image={e.image}
            persons={e.persons}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
