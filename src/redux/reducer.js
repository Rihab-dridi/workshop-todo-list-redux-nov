import { ADD_TODO, CHECK_TODO, DELETE_TODO } from "./action-types";

const instialState = {
  todos: [{ text: "walk the dog", id: 1, isDone: false }],
};

export const todoReducer = (state = instialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((el) => el.id !== action.payload),
      };


      case CHECK_TODO: return{
          ...state,
      todos: state.todos.map(el=> el.id===action.payload?  {...el,isDone:!el.isDone}  : el )

      }
    default: return state;
  }
};
