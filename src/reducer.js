import { useState } from 'react';

const initialState = {};

export function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    // ... other actions ...
    default:
      return state;
  }
}

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState)
  }

  return [state, dispatch];
}

export function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    dispatch({ type: 'add', text })
  }
}
