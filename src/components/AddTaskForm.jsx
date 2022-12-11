const AddTaskForm = ({newTask, addTask, setNewTask}) => {
    return (
        <>
        <div className="row">
              <div className="col">
                <input className="form-control form-control-lg" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
              </div>
              <div className="col-auto">
                <button className="btn btn-lg btn-success" onClick={addTask}>Add Task</button>
              </div>
            </div>

          <br/>
        </>
    );
}

export default AddTaskForm;