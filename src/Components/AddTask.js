import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Redux/TodoSlice";
const AddTask = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="add">
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <Button
        onClick={() => {
          dispatch(
            AddTodo({
              id: Math.random(),
              task: newTodo,
              isDone: false,
            })
          );
          setNewTodo("");
        }}
        variant="primary"
      >
        Add
      </Button>
    </div>
  );
};

export default AddTask;
