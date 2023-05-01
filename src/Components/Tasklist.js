import React, {useState} from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([ //estado inicial de la lista de tareas. Lo inicializo con una array de objetos
    { id: 1, text: "Tomar b12", completed: false }, 
    { id: 2, text: "Tomar Vitamina D", completed: false },
    { id: 3, text: "Pasear a Anita", completed: false },
    { id: 4, text: "Buscar vida extraterrestre", completed: false }
]);


  const [newTaskText, setNewTaskText] = useState(""); //almacenar una nueva tarea

  const handleAct = (id) => { //actualizar el estado de una tarea
    setTasks(tasks.map(task => { //map crea una matriz nueva, con las tareas actualizadas
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    }));
  };


  const handleDelete = (id) => { //eliminar una tarea de la lista
    setTasks(tasks.filter(task => task.id !== id)); //filter crea una nueva matriz de tareas que excluye la tarea tomando el id
  };


  const handleSubmit = (event) => { //agegar una tarea a la lista con un formulario (e)
    event.preventDefault(); 
    if (newTaskText.trim() === "") return; 
    setTasks([ //si contiene una tarea válida, crea un nuevo objeto de tarea con un id único,
      ...tasks,
      { id: Date.now(), text: newTaskText, completed: false }
    ]);
    setNewTaskText(""); //reinicia
  };

  
  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTaskText} onChange={(event) => setNewTaskText(event.target.value)} />
        <button type="submit">Agregar tarea</button>
      </form>
      {tasks.map(task => ( //todas las tareas que se pueden eliminar o cambiar el estado
        <Task key={task.id} task={task} handleAct={handleAct} handleDelete={handleDelete} /> 
      ))} 
    </div>
  );
}

export default TaskList;