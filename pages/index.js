import React from "react";
import List from "../components/List";
import Input from "../components/Input";
import { useState } from "react";

export default function HomePage() {
  const [todolist, setTodolist] = useState([]);
  const handleAdd = (description) => {
    setTodolist([
      ...todolist,
      {
        description: description,
      },
    ]);
    console.log([
      ...todolist,
      {
        description: description,
      },
    ]);
  };
  const handleDelete = (description) => {
    setTodolist(todolist.filter((item) => item.description !== description));
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <h3 style={{ textAlign: "center" }}>Add a new todo</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Input onAdd={handleAdd} />
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "50px",
          margin: "50px",
          justifyContent: "center",
        }}
      >
        <List list={todolist} onDelete={handleDelete} />
      </div>
    </>
  );
}
