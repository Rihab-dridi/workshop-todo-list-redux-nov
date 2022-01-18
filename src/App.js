import "./App.css";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import { useState } from "react";

function App() {

  //step1: create the dynamic data
  const [todoList, setTodoList] = useState([
    { text: "Save the galaxy", id: 1, isDone: false },
    { text: "walk the cat", id: 2, isDone: false },
    { text: "new  todo ", id: 3, isDone: false },
  ]);


  return (
    <div className="App">
      <h1>TODO APP!!</h1>
      <AddTodo
  
      />
      <TodoList

       
      />
    </div>
  );
}

export default App;
