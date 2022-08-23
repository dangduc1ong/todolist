import TodoItem from "../TodoItem/TaskItem";
import "./list.css";
import React from "react";
import { useEffect, useState } from "react";
import { Get } from "../../api/methodApi";
TodoList.propTypes = {};

function TodoList(props) {
  const [data, setData] = useState([]);
  

  //FETCH DATA API
  useEffect(() => {
    Get().then((result) => setData(result));
  }, []);



  return (
    <ul className="card-list">
      {data.map((card) => (
        <li key={card.id}>
          <TodoItem key={card.id}  card={card} />
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
