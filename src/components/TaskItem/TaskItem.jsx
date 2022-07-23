import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

TaskItem.propTypes = {
  taskName: PropTypes.string,
  taskAuthor: PropTypes.string,
  taskStatus: PropTypes.string,
  taskDescription: PropTypes.string,
};

TaskItem.defaultProps = {
  taskName: "Task name",
  taskAuthor: "Task author",
  taskStatus: "New",
  taskDescription: "Task description",
};
function TaskItem(props) {
  const { taskName, taskAuthor, taskStatus, taskDescription } = props;
  const [status, setStatus] = useState(taskStatus);
  const [btnStatus, setBtnStatus] = useState("Start");
  const [statusColor, setColor] = useState("#33FF99");
  function changeValueFunction() {
    if (status === "New") {
      setStatus("Doing");
      setBtnStatus("Done");
      setColor("orange");
    } else if (status === "Doing") {
      setStatus("Done");
      setBtnStatus("Renew");
      setColor("blue");
    } else if (status === "Done") {
      setStatus("New");
      setBtnStatus("Start");
      setColor("#33FF99");
    }
  }
  return (
    <div className="con">
      <div className="card">
        <div className="card-top">
          <p className="card-title">
            <b>Title: {taskName}</b>
          </p>
          <p className="card-text">Creator: {taskAuthor}</p>
          <p className="card-text " style={{ color: statusColor }}>
            Status: {status}
          </p>
        </div>
        <div className="task-description">
          <b>Description:</b>
          <p>{taskDescription}</p>
        </div>
        <div className="d-flex text-center m-auto">
          <button
            className="btn draw-border "
            // {() => setStatus("Doing")}
            onClick={changeValueFunction}
          >
            {btnStatus}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
