import React from "react";
import "./TodoContainer.css";
import { useState } from "react";
function TodoContainer() {
  const [input, setInput] = useState("");
  const [todoList, setTodolist] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTodolist([...todoList, input]);
    }
  };
  const handleRemove = (index) => {
    setTodolist(todoList.filter((value, i) => i !== index));
  };
  return (
    <div className="main-container">
      <div className="add-todo-container">
        <input
          type="text"
          placeholder="add todo"
          onChange={handleInput}
        ></input>
        <button onClick={handleAddTodo}>ADD TODO</button>
      </div>
      <h1 className="title-todolist">TODO LIST</h1>
      {todoList.length > 0 ? (
        <div>
          <div className="todo-container">
            <ul className="todolist">
              {todoList.map((todo, index) => (
                <li key={index} className="todo">
                  {todo}{" "}
                  <div className="features">
                    <input className="tick" type="checkbox"></input>
                    <button onClick={(e) => handleRemove(index)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="Empty-msg">OOPS! No Todo's are added</div>
      )}
    </div>
  );
}

export default TodoContainer;
