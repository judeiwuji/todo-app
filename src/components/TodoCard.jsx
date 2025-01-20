import { useState } from 'react';

export function TodoCard(props) {
  const {
    todo,
    todoIndex,
    handleCompleteTodo,
    handleDeleteTodo,
    handleEditTodo,
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [editInput, setEditInput] = useState('');

  return (
    <div className='card todo-item'>
      {isEdit ? (
        <>
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            placeholder='Edit todo'
          />
          <div className='todo-buttons'>
            <button
              onClick={() => {
                handleEditTodo(todoIndex, editInput);
                setIsEdit(false);
                setEditInput('');
              }}
            >
              <h6>Save</h6>
            </button>
            <button
              onClick={() => {
                setIsEdit(false);
                setEditInput('');
              }}
            >
              <h6>Cancel</h6>
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{todo.input}</p>
          <div className='todo-buttons'>
            <button
              disabled={todo.completed}
              onClick={() => handleCompleteTodo(todoIndex)}
            >
              <h6>Done</h6>
            </button>
            <button
              onClick={() => {
                setIsEdit(true);
                setEditInput(todo.input);
              }}
            >
              <h6>Edit</h6>
            </button>
            <button onClick={() => handleDeleteTodo(todoIndex)}>
              <h6>Delete</h6>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
