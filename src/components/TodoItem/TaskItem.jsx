import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

TodoItem.propTypes = {
  // taskName: PropTypes.string,
  // taskAuthor: PropTypes.string,
  // taskStatus: PropTypes.string,
  // taskDescription: PropTypes.string,
  card: PropTypes.object.isRequired,
};

// TodoItem.defaultProps = {
//   taskName: "Task name",
//   taskAuthor: "Task author",
//   taskStatus: "New",
//   taskDescription: "Task description",
// };
function TodoItem({card}) {
//  const { taskName, taskAuthor, taskStatus, taskDescription } = props;
  const [status, setStatus] = useState("New");
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
  function handleStateChange(e){
    setStatus(e.target.value);
    if(e.target.value === "New"){
      setColor("#33FF99");
    }
    if(e.target.value === "Doing"){
      setColor("orange");
    }
    if(e.target.value === "Done"){
      setColor("blue");
    }
  }
  return (
    <div className="con">
      <div className="card ">
        <div className="card-top">
          <p className="card-title">
            <b>Title: {card.taskName}</b>
          </p>
          <p className="card-text">Creator: {card.taskAuthor}</p>
          <p className="card-text " style={{ color: `${statusColor}` }} >
            Status: {status}
          </p>
          {/* <p style={{ color: `${statusColor}` }}>Status: {status}</p> */}
        </div>
        <div className="task-description">
          <b>Description:</b>
          <p>{card.taskDescription}</p>
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
        
        <div className="p-1">
          <select onChange={handleStateChange}>
            <option value="New">New</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
