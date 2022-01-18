import { ADD_TODO } from "./action-types"


export const addHandler=(newTodo)=>{
    return{
        type:ADD_TODO,
        payload:newTodo
    }
}