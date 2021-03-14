import PropTypes from 'prop-types';
import Button from './Button';
import Task from './Task'


const Tasks = (props) => {

    return (
       <>
        {props.tasks.map((task) =>(
            <Task key={task.id} task={task}  onDelete={props.onDelete} onToggle={props.onToggle} />
        ))}
       </>
    )
}

export default Tasks