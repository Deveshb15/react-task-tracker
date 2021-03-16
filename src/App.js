import { useState } from 'react';

import Header from './Components/Header';
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
<<<<<<< HEAD
        name: 'Write a book',
        age: '13 March',
=======
        text: 'Write a Blog',
        day: '14 March',
>>>>>>> 593d7fddc7e563a2244094025f0e3bd965cd9aa9
        id:1,
        reminder: true
    },
    {
<<<<<<< HEAD
        name: 'Don\'t write a book',
        age: '14 March',
=======
        text: 'Create TODO',
        day: '14 March',
>>>>>>> 593d7fddc7e563a2244094025f0e3bd965cd9aa9
        id:2,
        reminder: true
    },
    {
<<<<<<< HEAD
        name: 'Read something',
        age: '15 March',
=======
        text: 'Read Sapiens',
        day: '14 March',
>>>>>>> 593d7fddc7e563a2244094025f0e3bd965cd9aa9
        id:3,
        reminder: false
    }
])

// Add Tasks
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+1;

  const newTask = {id, ...task};
  setTasks([...tasks, newTask])
}

// Delete a task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
}

  return (
    <div className="container">
       <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('Nothing to show')}
    </div>
  );
}

export default App;
