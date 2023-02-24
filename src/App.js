import "./App.css";
import PillsExample from "./view/nav33";
import React from "react";
import { useState, useEffect } from "react";
import Todo from "./view/Todo";
import Covid from "./view/Covid";

function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [todos, setTodo] = useState([
    { id: 1, title: "watching Hoi Dan it channel", type: "Daivu" },
    { id: 2, title: "Daidz vai o", type: "Daivu" },
    { id: 3, title: "dai qua dang cap", type: "Daivu11" },
  ]);

  useEffect(() => {
    console.log("run");
  }, [address, todos]);

  const handleEventClick = (event) => {
    if (!address) {
      alert("no text");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 1000 + 1),
      title: address,
      type: "Daivu",
    };
    setTodo([...todos, newTodo]);
    setAddress("");
  };
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };
  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodo(currentTodos);
  };
  return (
    <div className="App">
      <header className="App-header">
        <PillsExample />
      </header>
      <body>
        <h1>My name is {name}</h1>
        <Todo todos={todos} title={"Daivu"} deleteDataTodo={deleteDataTodo} />
        <Todo
          todos={todos.filter((item) => item.type === "Daivu")}
          title={`Daivu Todo`}
          deleteDataTodo={deleteDataTodo}
        />
        <input
          type="text"
          name=""
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button type="button" onClick={(event) => handleEventClick(event)}>
          Click me
        </button>
        <Covid />
      </body>
    </div>
  );
}

export default App;
