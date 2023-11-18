import { memo, useState } from "react";

const TodoApp = () => {
  const [tasks, SetTasks] = useState([]);
  const [completedTasks, SetCompletedTasks] = useState([]);
  const [newTask, SetNewTask] = useState("");

  const addTask = () => {
    if (newTask !== "") {
      SetTasks([...tasks, newTask]);
      SetNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    SetTasks(updatedTasks);
  };

  const completeTask = (index) => {
    SetTasks((prevTasks) => {
      const taskToComplete = prevTasks[index];
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      SetCompletedTasks([...completedTasks, taskToComplete]);
      return updatedTasks;
    });
  };

  return (
    <div>
      <h2>Work to be done</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => completeTask(index)}>Complete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => SetNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <div>
        <h2>Completed Works</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(TodoApp);
