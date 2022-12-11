
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import AddTaskForm from './components/AddTaskForm';
import UpdateTaskForm from './components/UpdateTaskForm';
import ToDo from "./components/ToDo"

function App() {

  // tasks state
  const [toDo, setToDo] = React.useState([
    {id : 1, title: "Task 1", status : true},
    {id : 2, title: "Task 2", status : false},
  ]);

  //temp state 
  const [newTask, setNewTask] = React.useState('');

  const [updateData, setUpdateData] = React.useState('');

  //add task 
  const addTask = () => {
    if(newTask){
      let num = toDo.length +1;
      let newEntry = {
        id: num, title: newTask, status: false,
      }
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  }
  //delete task 
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id );
    setToDo(newTasks);
  }


  //mark task as done 
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if(task.id === id) {
        return ({...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTask);
  }
 
  //cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  }


  //Change Task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id, 
      title: e.target.value, 
      status: updateData.status ? true : false, 
    }
    setUpdateData(newEntry);
  }

  //Change Task
  const updateTask = () => {
    let filterRecord = [...toDo].filter( task => task.id !== updateData.id);
    let updatedObject = [...filterRecord, updateData];
    setToDo(updatedObject);
    setUpdateData("")
  }

  return (
    <div className="container App">
      <br/><br/>
      <h2>To Do List App (ReactJS)</h2>
      <br/><br/>

      {updateData && updateData ? (
          <>  

          {/** Update task */}
          <UpdateTaskForm
            updateData = {updateData} 
            changeTask = {changeTask} 
            updateTask = {updateTask} 
            cancelUpdate = {cancelUpdate}
          />
          </>

      ) : (
        <>
          {/** Add Task */}
          <AddTaskForm
            newTask = {newTask}
            setNewTask = {setNewTask}
            addTask = {addTask}
          />
        </>
      )}

      { /* Display Todos*/}

      {toDo && toDo.length ? '' : "No Tasks" }

      <ToDo
        toDo = {toDo} 
        setUpdateData = {setUpdateData} 
        deleteTask = {deleteTask} 
        markDone = {markDone}
      />
    </div>
  );
}

export default App;
