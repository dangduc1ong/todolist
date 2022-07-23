// import TaskItem from "./components/TaskItem/TaskItem";
import React from "react";

import TaskList from "./components/TaskList/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="m">
      <Header />
      <TaskList />
           
    </div>
  );
}

export default App;
