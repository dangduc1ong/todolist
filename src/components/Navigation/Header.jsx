import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import React from "react";

// import HeaderForm from "./HeaderForm";
// import { useState } from "react";
function Header() {
  //const [status, setStatus] = useState("none");

  // var modal = document.getElementById("myModal");
  // var span = document.getElementsByClassName("close")[0];

  var tasksTitle = [],
    tasksCreator = [],
    tasksDesc = [];
  var objTask = {};
  function btnAdd() {
    const title = document.getElementById("tittle").value;
    const create = document.getElementById("creator").value;
    const description = document.getElementById("description").value;

    tasksTitle.push(title);
    tasksCreator.push(create);
    tasksDesc.push(description);

    return objTask.push(tasksTitle, tasksCreator, tasksDesc);
  }

  function create() {
    // if (status === "none") {
    //   setStatus("block");
    //   document.getElementById("r").style.display = "none";
    // } else {
    //   setStatus("none");
    //   document.getElementById("r").style.display = "block";
    // }

    document.getElementById("myModal").style.display = "block";
  }
  function close() {
    document.getElementById("myModal").style.display = "none";
  }

  return (
    <div className="Header d-flex justify-content-between p-2">
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <span id="close" className="close" onClick={close}>
              &times;
            </span>
            <div className="modal-body">
              <form>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="tittle"
                    type="text"
                    placeholder="Tittle"
                    data-sb-validations="required"
                  />
                  <label htmlFor="tittle">Tittle</label>
                  {/* {!formValue.title && (
                    <div style={{ color: "red" }}>Tittle is required.</div>
                  )} */}
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="creator"
                    type="text"
                    placeholder="Creator"
                    data-sb-validations="required"
                  />
                  <label htmlFor="creator">Creator</label>
                  {/* {!formValue.author && (
                    <div style={{ color: "red" }}>Creator is required.</div>
                  )} */}
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="description"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    data-sb-validations="required"
                  />
                  <label htmlFor="description">Description</label>
                  {/* {!formValue.description && (
                    <div style={{ color: "red" }}>Description is required.</div>
                  )} */}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="add"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={btnAdd}
              >
                Add
              </button>
              <button
                type="button"
                id="close"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={create}
        type="button"
        className="btn btn-outline-danger "
      >
        CREATE NEW TASK
      </button>

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
