import React from "react";

function Task({ text, category, onDelete }) {

  // const handleDelete = (event) => {
  //   console.log(event.target);
  // }
  
  
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>onDelete(text)}>X</button>
    </div>
  );
}

export default Task;
