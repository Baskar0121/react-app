import React from 'react'
import "../App.css"

function Root() {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-4 mx-auto mt-5">
                        <h3 class="text-center mb-5">Select Your Role</h3>
                        <div class="card">
                            <div style={{ display: "flex", flexDirection: "column" }} class="card-body">
                            <a href='/employeeLogin'><button class="btn btn-primary btn-block mb-3" type="button">Employee Login</button></a>
                            <a href='/managerLogin'><button class="btn btn-primary btn-block mb-3" type="button">Manager Login</button></a>
                               <a href='/adminLogin'> <button class="btn btn-primary btn-block" type="button">Admin Login</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Root