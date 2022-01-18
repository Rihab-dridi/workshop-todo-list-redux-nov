import React from "react";
import { useDispatch } from "react-redux";
import { checkHandler, deleteHandler } from "../redux/action";
export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const deletTodo = () => {
    dispatch(deleteHandler(todo.id));
  };

  const checkTodo=()=>{
    dispatch(checkHandler(todo.id))
  }
  return (
    <div className="todoContainer">
      <h3
        style={
          todo.isDone ? { color: "red", textDecoration: "line-through" } : {}
        }
      >
        {" "}
        {todo.text}{" "}
      </h3>
      <div className="todoBtns">
        <button onClick={deletTodo}>
          {" "}
          <i class="far fa-trash-alt"></i>
        </button>
        <button   onClick={checkTodo} >
          {" "}
          <i class="far fa-check-circle"></i>
        </button>
      </div>
    </div>
  );
}
