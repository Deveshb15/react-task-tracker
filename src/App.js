import { useState } from 'react';

import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import useLocalStorageReducer from './useLocalStorageState'

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
//   const [tasks, setTasks] = useState([
//     {
//         text: 'Write a Blog',
//         day: '14 March',
//         id:1,
//         reminder: true
//     },
//     {
//         text: 'Create TODO',
//         day: '14 March',
//         id:2,
//         reminder: true
//     },
//     {
//         text: 'Read Sapiens',
//         day: '14 March',
//         id:3,
//         reminder: false
//     }
// ])

const [tasks, setTasks] = useLocalStorageReducer('tasks', [
    {
        text: 'Write a Blog',
        day: '14 March',
        id:1,
        reminder: true
    },
    {
        text: 'Create TODO',
        day: '14 March',
        id:2,
        reminder: true
    },
    {
        text: 'Read Sapiens',
        day: '14 March',
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
