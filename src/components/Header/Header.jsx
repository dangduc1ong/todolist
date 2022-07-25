import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import React from "react";

// import HeaderForm from "./HeaderForm";
// import { useState } from "react";
function Header() {
  //const [status, setStatus] = useState("none");

  // var modal = document.getElementById("myModal");
  // var span = document.getElementsByClassName("close")[0];

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
                <div className="form-group row">
                  <label  className="col-sm-2 col-form-label">
                    Tittle
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control-plaintext"
                      id="staticEmail"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
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
