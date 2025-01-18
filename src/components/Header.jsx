/**
 * Header component
 * @param {*} props
 * @returns
 */
export function Header(props) {
  const { todos } = props;
  const openTasks = todos.filter((todo) => !todo.completed).length;
  const isTaskPlural = openTasks !== 1;
  const taskOrTasks = isTaskPlural ? 'tasks' : 'task';

  return (
    <header>
      <h1 className='text-gradient'>
        You have {openTasks} open {taskOrTasks}
      </h1>
    </header>
  );
}
