import { useState } from 'react'

const AddTask = (props) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{

        if(!text){
            alert('Please add a text');
            return
        }

        props.onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)

        e.preventDefault();
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" 
                       placeholder="Add Task"
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                       />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text"
                       placeholder="Add Day & Time"
                       value={day}
                       onChange={(e) => setDay(e.target.value)} 
                       />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" 
                       checked={reminder}
                       value={reminder}
                       onChange={(e) => setReminder(e.currentTarget.checked)}
                       />
            </div>

            <input className="btn btn-block" style={{border: '1px solid white'}} type="submit" value="Save Task" />
        </form>
    )
}

export default AddTask
