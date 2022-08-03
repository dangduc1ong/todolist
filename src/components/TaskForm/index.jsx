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
    });
  };
  const handleChangeForm = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(formValue);
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
        {!formValue.title && (
          <div style={{ color: "red" }}>Tittle is required.</div>
        )}
      </div>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          name="author"
          id="author"
          type="text"
          placeholder="author"
          data-sb-validations="required"
          value={formValue.author}
          onChange={handleChangeFile}
        />
        <label htmlFor="author">Creator</label>
        {!formValue.author && (
          <div style={{ color: "red" }}>Creator is required.</div>
        )}
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
          value={formValue.description}
          onChange={handleChangeFile}
        />
        <label htmlFor="description">Description</label>
        {!formValue.description && (
          <div style={{ color: "red" }}>Description is required.</div>
        )}
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
