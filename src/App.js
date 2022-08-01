// import TaskItem from "./components/TaskItem/TaskItem";
import React from "react";
import "./App.css"
// import TaskItem from "./components/TaskItem/TaskItem";
import TodoList from "./components/TodoList/TaskList";
import Header from "./components/Navigation/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Router, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import {Link} from "react-router-dom"
function App() {
  return (
    <div className="m">
      <Header />
      <div className="mid d-flex">
        <div className="l">
          <Link to='/'>
            <Sidebar letter={"All Task"} />
          </Link>
          <Sidebar letter={"New Task"} />
          <Sidebar letter={"Doing Task"} />
          <Sidebar letter={"Done Task"} />
        </div>

        <div className="r" id="r"  >
          <Routes>
            <Route path="/" element={<TodoList />}></Route>
            <Route path="/add-task" element={<TaskForm />}></Route>
          </Routes>

          {/* <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
          <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
          <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
          <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
          <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
          <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" />
          <TaskItem taskName="Afternoon - Go to school" taskAuthor="Duc Long" taskDescription="Learn React" /> */}



        </div>
      </div>
    </div>
  );
}

export default App;
