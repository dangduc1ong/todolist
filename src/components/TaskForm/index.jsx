import React, { useState } from "react";
import PropTypes from "prop-types";
TaskForm.propTypes = {};
function TaskForm(props) {
  const [formValue, setFormValue] = useState({
    title: "",
    author: "",
    description: "",
    status: "New",
  });
  const handleChangeFile = (e) => {
    // const title = setTitleValue(e.target.value);
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  };
  const handleChangeForm = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(formValue)
    localStorage.setItem("data", JSON.stringify(data));
  };
  return (
    <form onSubmit={handleChangeForm}>
      <div className="form-floating mb-3">
        <input
          name="title"
          className="form-control"
          id="tittle"
          type="text"
          value={formValue.title}
          onChange={handleChangeFile}
          placeholder="Tittle"
          data-sb-validations="required"
        />
        <label htmlFor="tittle">Tittle</label>
        <div className="invalid-feedback" data-sb-feedback="tittle:required">
          Tittle is required.
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          name="author"
          id="creator"
          type="text"
          placeholder="Creator"
          data-sb-validations="required"
        />
        <label htmlFor="creator">Creator</label>
        <div className="invalid-feedback" data-sb-feedback="creator:required">
          Creator is required.
        </div>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          id="description"
          name="description"
          type="text"
          placeholder="Enter your message here..."
          style={{ height: "10rem" }}
          data-sb-validations="required"
        />
        <label htmlFor="description">Description</label>
        <div
          className="invalid-feedback"
          data-sb-feedback="description:required"
        >
          Description is required.
        </div>
      </div>

      <div className="">
        <button
          type="Submit"
          id="add"
          className="btn btn-success"
          data-dismiss="modal"
        >
          Add
        </button>
        <button
          type="button"
          id="close"
          className="btn btn-danger"
          data-dismiss="modal"
        >
          Close
        </button>
      </div>
    </form>
  );
}


export default TaskForm;
