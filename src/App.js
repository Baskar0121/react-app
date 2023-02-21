// import Login from "./components/Login";
// import Root from "./components/Root";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Profile from "./components/Profile";
// import ApplyLeave from "./components/ApplyLeave";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Tasks from "./components/Employee/Tasks";
// import AssignTasks from "./components/Manager/AssignTasks";

import Tasks from "./components/Employee/Tasks";
import AssignTasks from "./components/Manager/AssignTasks";
import ApplyLeave from "./components/ApplyLeave";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Root from "./components/Root";
import AdminLogin from './components/Admin/AdminLogin';
import EmployeeLogin from './components/Employee/EmployeeLogin';
import ManagerAdmin from './components/Manager/ManagerAdmin';




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
            <Route path='/login' element={<Login></Login>}/>
            <Route path='/tasks' element={<Tasks></Tasks>}/>
            <Route path='/assignTasks' element={<AssignTasks></AssignTasks>}/>
            <Route path='/applyLeave' element={<ApplyLeave></ApplyLeave>}/>
            <Route path='/profile' element={<Profile></Profile>}/>
            <Route path='/' element={<Root></Root>}/>
            <Route path='/adminLogin' element={<AdminLogin></AdminLogin>}/>
            <Route path='/employeeLogin' element={<EmployeeLogin></EmployeeLogin>}/>
            <Route path='/managerLogin' element={<ManagerAdmin></ManagerAdmin>}/>
        </Routes>
    </div>
  );
}

export default App;
