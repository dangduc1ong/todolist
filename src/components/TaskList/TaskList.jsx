import TaskItem from "../TaskItem/TaskItem";
import "./list.css"
import React from 'react';
TaskList.propTypes = {

};
function TaskList(props){
    return (
        <div className="main">

            
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
            
        </div>
    );
}
export default TaskList;;