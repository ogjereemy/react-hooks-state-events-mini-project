import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index)=>(
        <Task text={task.text} 
        key={index} 
        category={task.category} 
        onDelete={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
