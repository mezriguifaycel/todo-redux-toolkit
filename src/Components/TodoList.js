import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeleteTodo, ToggleTodo, UpdateTask } from "../Redux/TodoSlice";

const TodoList = ({ Todos }) => {
  const [updatedTask, setUpdatedTask] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="affich">
      {Todos.map((todo, i) => (
        <div
          style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
          key={i}
        >
          {isEdited ? (
            <input
              onChange={(e) => setUpdatedTask(e.target.value)}
              defaultValue={todo.task}
            />
          ) : (
            <h3
              style={{
                margin: "20px",
                width: "700px",
                textDecoration: todo.isDone ? "line-through" : "",
                color: todo.isDone ? "red" : "black",
              }}
            >
              {todo.task}
            </h3>
          )}
          <Button
            onClick={() => dispatch(DeleteTodo(todo.id))}
            variant="danger"
          >
            Delete
          </Button>
          <Button onClick={() => dispatch(ToggleTodo(todo.id))} variant="info">
            {todo.isDone ? "UnDone" : "Done"}
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              setIsEdited(!isEdited);
              setUpdatedTask(todo.task);
              isEdited &&
                dispatch(UpdateTask({ id: todo.id, task: updatedTask }));
            }}
          >
            Update
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
