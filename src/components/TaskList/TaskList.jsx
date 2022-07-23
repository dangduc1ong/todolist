import TaskItem from "../TaskItem/TaskItem";
import "./list.css"
import React from 'react';
TaskList.propTypes = {

};
function TaskList(props){
    return (
        <div className="main">
            <TaskItem taskName="Morning - Wake up" taskAuthor="Duc Long" taskDescription="Turn off the alarm"/>
            <TaskItem taskName="Mid-day - Breakfast" taskAuthor="Duc Long" taskDescription="Eat clean" />
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