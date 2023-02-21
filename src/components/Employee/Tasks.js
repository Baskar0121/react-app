import React from "react";

function Tasks() {
  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center font-weight-bold mb-3">Assigned Tasks</h2>
            <table class="table table-striped table-bordered">
              <thead>
                <tr class="bg-primary text-white">
                  <th className="align-middle text-center">Task Name</th>
                  <th className="align-middle text-center">Due Date</th>
                  <th className="align-middle text-center">Progress</th>
                  <th className="align-middle text-center">Update Progress</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="align-middle text-center">Task 2</td>
                  <td className="align-middle text-center">01/01/2022</td>
                  <td className="align-middle text-center">50%</td>
                  <td className="align-middle text-center">
                    <div className="form-group col-5 ">
                      <select className="form-control" id="progress">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Complete">Complete</option>
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
