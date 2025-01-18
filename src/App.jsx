import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';
import { Tabs } from './components/Tabs';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTab, setSelectedTab] = useState('Open');
  const DB_KEY = 'todo-app';

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, completed: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    const newTodoList = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem(DB_KEY, JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem(DB_KEY)) return;
    const db = JSON.parse(localStorage.getItem(DB_KEY));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput todos={todos} handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
