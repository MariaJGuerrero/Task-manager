import React from "react";
import PropTypes from 'prop-types';
import { useRef } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";

const TaskForm = ({ add }) => {
    const nameRef = useRef('');
    const decriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

function addTask(e){
    e.preventDefault();
    const newTask = new Task(
        nameRef.current.value,
        decriptionRef.current.value,
        false,
        levelRef.current.value
    );
    console.log({newTask});
    add(newTask);
}

const normalStyle = {
    color:'blue',
    fontWeight: 'bold'
}
const urgentStyle = {
    color:'yellow',
    fontWeight: 'bold'
}
const blockingStyle = {
    color:'red',
    fontWeight: 'bold'
}
    return(
        <form onSubmit={(e) => addTask(e)} className= 'd-flex justify-content-center align-item-center mb-4'> 
            <div className="form-outline flex-fill">
                <input name="name" type="text" ref={nameRef} id='inputName' className="form-control form-control-lg" required autoFocus placeholder="Task Name" />
                <input name="description" type="text" ref={decriptionRef} id='inputDescription' className="form-control form-control-lg" required placeholder="Task Description"/>
                <select  className="form-control form-control-lg" ref={levelRef} defaultValue={LEVELS.NORMAL} id="selectLevel">
                    <option style={normalStyle} value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle}value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type="submit" className="btn btn-success btn-lg ms-2"> ADD TASK</button>
            </div>
            
        </form>
    )
}

TaskForm.prototype = {
    add: PropTypes.func.isRequired
}
export default TaskForm;