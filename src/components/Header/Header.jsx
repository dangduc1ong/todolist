import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"
import React from "react";
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <button className="btn btn-outline-danger" href="#">
          CREATE NEW TASK
        </button>

        <div className="r" id="">
          <form className="form-inline mt-2 mt-md-0 ">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Type something to search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
export default Header;
