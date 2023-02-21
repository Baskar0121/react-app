import React, { useState } from "react";

function AssignTasks() {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // handle form submit action, such as sending data to the server or saving it to local state
    console.log(taskName, dueDate, assignedTo);
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 mx-auto mt-5 p-5 bg-light">
      <h2 className="text-center font-weight-bold mb-3">Create Task</h2>
      <div className="form-group">
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          className="form-control"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="assignedTo">Assigned To</label>
        <select
          className="form-control"
          id="assignedTo"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        >
          <option value="">Select Employee</option>
          <option value="Employee 1">Employee 1</option>
          <option value="Employee 2">Employee 2</option>
          <option value="Employee 3">Employee 3</option>
        </select>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-primary w-100">
          Create Task
        </button>
      </div>
    </form>
  );
}

export default AssignTasks;
