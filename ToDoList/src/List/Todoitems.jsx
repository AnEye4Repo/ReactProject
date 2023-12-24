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
            <button onClick={handleToggleComplete}>  </button>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{Text}</span>
          <button onClick={handleDelete}>Delete</button>
        </li>
      </>
    );
  };
  
  export default TodoItem;
  