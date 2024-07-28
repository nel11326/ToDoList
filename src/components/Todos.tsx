import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./index.module.css";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <li key={item.id}>
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
