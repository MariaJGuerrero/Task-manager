import React, { useEffect, useState } from "react";
import { LEVELS } from "../models/levels.enum";
import { Task } from "../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount')
        }
    }, [tasks]);

    const defaultTask = new Task('example', 'default description', false, LEVELS.NORMAL)

    const changeCompleted = (id) => {
        console.log('TO DO: cambiar el estado de una tarea')
    }

    return(
        <div>
            <h1>
                your task:
            </h1>
            <TaskComponent task={defaultTask} />
        </div>
    );
};



export default TaskListComponent;