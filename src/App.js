import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Hey",
      day: "29 de Maio de 2021",
      reminder: false,
    },
    {
      id: 2,
      text: "Queijo",
      day: "30 de Maio de 2021",
      reminder: false,
    },
    {
      id: 3,
      text: "Churras",
      day: "30 de Maio de 2021",
      reminder: true,
    },
    {
      id: 4,
      text: "Jumba",
      day: "35 de Maio de 2050",
      reminder: true,
    },
  ]);
  const addTask = (task) => {
    const id = tasks[tasks.length - 1].id + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      ) : (
        "nada"
      )}
    </div>
  );
}

export default App;
