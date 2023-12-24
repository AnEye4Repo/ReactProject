/* eslint-disable react/prop-types */

import TodoItem from './Todoitems'; // Assuming you have a TodoItem component

const TodoList = ({ todos, onDelete, onToggleComplete }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete} // Use the correct prop name
            onToggleComplete={onToggleComplete} // Use the correct prop name
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
