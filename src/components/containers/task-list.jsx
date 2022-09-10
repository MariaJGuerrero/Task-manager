import React from "react";
import { LEVELS } from "../models/levels.enum";
import { Task } from "../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
    const defaultTask = new Task('example', 'default description', false, LEVELS.NORMAL)

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