import { useState } from 'react';

import Header from './Components/Header';
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
        name: 'dev',
        age: 13,
        id:1,
        reminder: true
    },
    {
        name: 'shai',
        age: 13,
        id:2,
        reminder: true
    },
    {
        name: 'sujo',
        age: 13,
        id:3,
        reminder: false
    }
])

// Add Task
const addTask = (task) => {
  console.log(task);
}

// Delete a task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id != id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('Nothing to show')}
    </div>
  );
}

export default App;
