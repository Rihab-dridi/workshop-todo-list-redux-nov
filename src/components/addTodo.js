import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHandler } from "../redux/action";
export default function AddTodo() {
const [input, setInput]=useState('')

 console.log(input)
const dispatch=useDispatch()

const addTodo=()=>{
  const newTodo={id: Math.random(), text:input, isDone:false}
  dispatch(   addHandler(newTodo))
  setInput('')
}

  return (
    <div className="addTodoContainer">
      <input
        placeholder="add your task here ..."
     onChange={(e)=>setInput(e.target.value)}
     value={input}
      />
      <button onClick={addTodo} >
        {" "}
        <i class="far fa-plus-square"></i>{" "}
      </button>
    </div>
  );
}
