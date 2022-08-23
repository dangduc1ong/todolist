import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";


function Header() {


  let tasksTitle = [],
    tasksCreator = [],
    tasksDesc = [];
  let objTask = {};
  function btnAdd() {
    const title = document.getElementById("tittle").value;
    const create = document.getElementById("creator").value;
    const description = document.getElementById("description").value;

    tasksTitle.push(title);
    tasksCreator.push(create);
    tasksDesc.push(description);

    return objTask.push(tasksTitle, tasksCreator, tasksDesc);
  }



  return (
    <div className="Header d-flex justify-content-between p-2">
      <Link to="/add-task">
      <button 
        type="button"
        className="btn btn-outline-danger "
        >
        CREATE NEW TASK
      </button>
        </Link>

      {/* <HeaderForm dis={status} /> */}
      <div className="right-header d-flex p-2" id="">
        <input
          className="form-control"
          type="text"
          placeholder="Type something to search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </div>
    </div>
  );
}
export default Header;
