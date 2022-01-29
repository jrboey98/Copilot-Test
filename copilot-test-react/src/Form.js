import React from 'react';

// Create a form that takes in a Task Name, Task Description, Task Due Date, and a Task Priority. Has a submit button that adds the task to the list.
const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="taskName" placeholder="Task Name" onChange={props.handleChange} value={props.taskName} />
            <input type="text" name="taskDescription" placeholder="Task Description" onChange={props.handleChange} value={props.taskDescription} />
            <input type="date" name="taskDueDate" placeholder="Task Due Date" onChange={props.handleChange} value={props.taskDueDate} />
            <input type="number" name="taskPriority" placeholder="Task Priority" onChange={props.handleChange} value={props.taskPriority} />
            <button type="submit">Add Task</button>
        </form>
    )
}

// Export the Form component
export default Form;
