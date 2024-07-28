import React, { ReactNode, useState } from "react";
import { Todo } from "../interface/Todo.interface";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, newText: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  const updateTodoHandler = (todoId: string, text: string) => {
    setTodos((prevTodos) => {
      const todoIndex = prevTodos.findIndex((todo) => todo.id === todoId);
      const updateTodos = [...prevTodos];
      if(todoIndex >= 0) {
          updateTodos[todoIndex] = new Todo(text);
      }
      return prevTodos.map((todo) => {
        if (todo.id === todoId) {
          todo.text = text;
        }
        return todo;
      });
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    updateTodo: updateTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
