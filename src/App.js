// import TaskItem from "./components/TaskItem/TaskItem";
import React from "react";
import "./App.css"
 import TaskList from "./components/TaskList/TaskList";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="m">
      <Header />

      <div className="mid d-flex">
        <div className="l">
          <Sidebar letter={"All Task"} />
          <Sidebar letter={"New Task"} />
          <Sidebar letter={"Doing Task"} />
          <Sidebar letter={"Done Task"} />
        </div>

        <div className="r" id="r"  >          
            <TaskList />
            
        
        </div>
      </div>
    </div>
  );
}

export default App;
