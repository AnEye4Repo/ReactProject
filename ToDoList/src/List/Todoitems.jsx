/* eslint-disable react/prop-types */

const TodoItem = ({ todo, onDelete, onToggleComplete }) => {
    const { id, Text, completed } = todo;
  
    const handleDelete = () => {
      onDelete(id);
    };
  
    const handleToggleComplete = () => {
      onToggleComplete(id);
    };
  
    return (
      <>
        <li>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{Text}</span>
          <button onClick={handleToggleComplete}>Toggle Complete</button>
          <button onClick={handleDelete}>Delete</button>
        </li>
      </>
    );
  };
  
  export default TodoItem;
  