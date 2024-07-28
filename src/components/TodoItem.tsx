import { useRef, useState } from "react";
import classes from "./index.module.css";

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
  onEditTodo: (newText: string) => void;
}> = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const submitEditHandler = () => {
    const newText = inputRef.current!.value;
    if (newText.trim().length === 0) {
      return;
    }
    props.onEditTodo(newText);
    setIsEditing(false);
  };

  return (
    <li className={classes.item}>
      {isEditing ? (
        <input type="text" defaultValue={props.text} ref={inputRef} />
      ) : (
        <span>{props.text}</span>
      )}
      <div className={classes.actions}>
        {isEditing ? (
          <button onClick={submitEditHandler}>Save</button>
        ) : (
          <>
            <button onClick={startEditingHandler}>Edit</button>
            <button onClick={props.onRemoveTodo}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
