import React from "react";
import Todo from "./todo";
import {useSelector} from 'react-redux'
export default function TodoList( ) {

  const todos= useSelector(state=> state.todos)
  return (
    <div className="todoListContainer">
      {todos.map((el, key) => (
        <Todo key={el.id} todo={el}/>
      ))}
    </div>
  );
}
