import { ADD_TODO } from "./action-types";

const instialState = {
  todos: [ { text: "walk the dog", id: 1, isDone: false }],
};

export const todoReducer = (state = instialState, action) => {
  switch (action.type) {
      case ADD_TODO: return{
          ...state,
          todos: [...state.todos,action.payload  ]
      }
    default:
      return state;
  }
};
