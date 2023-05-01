import React from "react";

function Task (props){
  const {task, handleAct, handleDelete} = props;


  return(
      <div className="task">
          <input type="checkbox" checked={task.completed} onChange={() => handleAct(task.id)} />
          <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</p>
          <button onClick={() => handleDelete(task.id)}>Eliminar tarea</button>
      </div>

  )
}

export default Task;