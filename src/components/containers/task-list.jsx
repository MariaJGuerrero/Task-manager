import React, { useEffect, useState } from "react";
import { LEVELS } from "../models/levels.enum";
import { Task } from "../models/task.class";
import TaskForm from "../pure/forms/task.form";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask = new Task('example1', 'default description', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('example2', 'default description2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('example3', 'default description3', false, LEVELS.BLOCKING)

    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount')
        }
    }, [tasks]);

    

function completeTask (task){
    console.log(task);
    const index = tasks.indexOf(task);
    const tempTasks =[...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);

}

function deleteTask(task){
    console.log(task);
    const index = tasks.indexOf(task);
    const tempTasks =[...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
}

function addTask(task){
    console.log(task);
    const tempTasks =[...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
}

    return(
        <div className="col-12">
            <div className="card">
                <div className="card-header p-3">
                    <h5>
                        Your Tasks:
                    </h5>
                </div>
            </div>
            <div className="card-body" data-mdb-perfect-scrollbar= 'true' style={{position: 'relative', height: '400px'}}>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Priority</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => {
                                return(
                                    <TaskComponent 
                                    key={index} 
                                    task={task}
                                    complete={completeTask}
                                    remove={deleteTask} />
                                )
                            }   
                        )}
                        
                    </tbody>
                </table>
            </div>
          <TaskForm  add={addTask}/>
        </div>
    );
};



export default TaskListComponent;