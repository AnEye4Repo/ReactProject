import { useState } from 'react'
import TodoList from './List/TodoList';
import './App.css'

// ... (previous imports and code)

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setnewTodo] = useState('');

  const addTodoHandler = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: new Date().getTime(),
        Text: newTodo,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodoItem]);
      setnewTodo('');
    }
  };

  const deleteTodoHandler = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoHandler = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="titleBox">
        <h1 className="titleName">To-Do_List</h1>
      </div>
      <div className="boxlist">
        <form className='enter'
          onSubmit={(e) => {
            e.preventDefault();
            addTodoHandler(newTodo); // Pass the newTodo value here
          }}
        >
          <TodoList
          todos={todos}
          onDelete={deleteTodoHandler}
          onToggleComplete={toggleTodoHandler}
        />
          <input className='inputBox'
            type="text"
            placeholder="Enter here for task"
            value={newTodo}
            onChange={(e) => setnewTodo(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </>
  );
}

export default App;
