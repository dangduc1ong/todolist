import TodoItem from "../TodoItem/TaskItem";
import "./list.css";
import React from "react";
TodoList.propTypes = {};
function TodoList(props) {
  // const cardList = [
  //   {
  //     id:1,
  //     taskName:"Afternoon - Go to school",
  //     taskAuthor:"Duc Long" ,
  //     taskDescription:"Learn React",
  //   },
  //   {
  //     id:2,
  //     taskName:"Afternoon - Go to school",
  //     taskAuthor:"Duc Long" ,
  //     taskDescription:"Learn React",
  //   },
  //   {
  //     id:3,
  //     taskName:"Afternoon - Go to school",
  //     taskAuthor:"Duc Long" ,
  //     taskDescription:"Learn React",
  //   },
  //   {
  //     id:4,
  //     taskName:"Afternoon - Go to school",
  //     taskAuthor:"Duc Long" ,
  //     taskDescription:"Learn React",
  //   },
  //   {
  //     id:5,
  //     taskName:"Afternoon - Go to school",
  //     taskAuthor:"Duc Long" ,
  //     taskDescription:"Learn React",
  //   },
  //   {
  //     id:6,
  //     taskName:"Afternoon - Go to school",
  //     taskAuthor:"Duc Long" ,
  //     taskDescription:"Learn React",
  //   },
  //   {
  //     id:7,
  //     taskName:"Afternoon - Go to school",
  //     taskAuthor:"Duc Long" ,
  //     taskDescription:"Learn React",
  //   },
  //   {
  //     id:8,
  //     taskName:"Afternoon - Go to school",
  //     taskAuthor:"Duc Long" ,
  //     taskDescription:"Learn React",
  //   },

  // ];

  // localStorage.setItem("data", JSON.stringify(cardList))

  const cardList = JSON.parse(localStorage.getItem("data"));
  return (
    <ul className="card-list">
      {cardList &&
        cardList.map((card) => (
          <li key={card.id}>
            <TodoItem card={card} />
          </li>
        ))}
    </ul>
  );
}
export default TodoList;

{
  /* <ul className="tasks">
    {tasksList.length && tasksList.map((item, index) =>(
        <TodoItem item={item} idx={index} key={item.id}/>
    ))}
</ul> */
}
