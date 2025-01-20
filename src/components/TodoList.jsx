import { TodoCard } from './TodoCard';

export function TodoList(props) {
  const { todos, selectedTab, searchTerm } = props;
  const filteredTodoList = (
    selectedTab === 'All'
      ? todos
      : selectedTab === 'Open'
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed)
  ).filter((todo) => {
    return todo.input.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((t) => t === todo)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
}
