import { useState } from 'react'
// import TodoList from './List/TodoList';
import './App.css'

function App() {

  // const [todos,settodos] = useState([]);
  // const [newTodo,setnewTodo] = useState('');

  // const addTodoHandler = (newTodo) =>{
  //   if (newTodo.trim()!== ''){
  //     const newTodoItem = {
  //       id: new Date().getTime(),
  //       Text: newTodo,
  //       completed: false,
  //     };
  //     settodos((prevTodos) => [...prevTodos, newTodoItem]);
  //     setnewTodo('');
  //   }
  // };

  // const undoTodoHandler = (todoId) =>{
  //   return;
  // }

  // const toggleTodoHandler = (todoId) => {
  //   return;
  // }
  return (
    <>
      <div className="titleBox">
        <h1 className="titleName">To-Do_List</h1>
      </div>
      <div className="boxlist">
        {/* <form>
          <input type='text'>Enter here</input>
          <input type="button"/>
        </form> */}
      </div>
    </>
  )
}

export default App
