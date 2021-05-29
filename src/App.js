import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "nada"
      )}
    </div>
  );
}

export default App;
