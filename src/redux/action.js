import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./action-types"


export const addHandler=(newTodo)=>{
    return{
        type:ADD_TODO,
        payload:newTodo
    }
}

export const  deleteHandler=(idTodo)=>{
    return{
        type:DELETE_TODO,
        payload:idTodo
    }
}

export const checkHandler=(idTodo)=>{
return{
    type:CHECK_TODO,
    payload:idTodo
}
}