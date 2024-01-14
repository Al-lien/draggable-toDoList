export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

/* type Actions =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: number }
  | { type: "DONE"; payload: number };

const TodoReducer = (state: Todo[], action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, isDone: false },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "DONE":
      return state.map((todo) =>
        todo.id !== action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
  }
};

import { useReducer } from "react";
const ReducerExample = () => {
  const [state, dispatch] = useReducer(TodoReducer, []);
  return <div />;
};

export default ReducerExample; */
