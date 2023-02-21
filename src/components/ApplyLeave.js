import React, { useState } from "react";



function ApplyLeave() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        reason: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
    };


    return (
        <div>
            <div class="container my-5">
  <h2 class="text-center mb-5">Leave Application</h2>
  <form>
    <div class="form-group row">
      <label for="name" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="email"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="startDate" class="col-sm-2 col-form-label">Start Date</label>
      <div class="col-sm-10">
        <input type="date" class="form-control" id="startDate"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="endDate" class="col-sm-2 col-form-label">End Date</label>
      <div class="col-sm-10">
        <input type="date" class="form-control" id="endDate"/>
      </div>
    </div>
    <div class="form-group row">
      <label for="reason" class="col-sm-2 col-form-label">Reason for Leave</label>
      <div class="col-sm-10">
        <textarea class="form-control" id="reason" rows="3"></textarea>
      </div>
    </div>
    <div style={{
        textAlign:"center",
        
    }}>
    <button style={{width:"30%"}}  type="submit" class="btn btn-primary btn-lg">Submit</button>
    </div>
    
  </form>
</div>


        </div>
    )
}

export default ApplyLeave