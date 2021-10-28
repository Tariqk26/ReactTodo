import React from "react";
//Import Components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list"></ul>
            {filteredTodos.map(todo => (
                <Todo
                    todos={todos}
                    setTodos={setTodos}
                    text={todo.text}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    )
};

export default TodoList;