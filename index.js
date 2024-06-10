import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AddCandidets from './HR/AddCandidets';
import Orientation from './HR/Orientation';
import HrDashbord from './HR/HrDashbord';
import EmpDashboard from './EMP/EmpDashboard';
import OnBordingList from './HR/OnBordingList';
import Basicinfo from './EMP/Basicinfo';
import Declaresubmit from './EMP/Declare&submit';
import Documentsubmission from './EMP/Documentsubmission';
import NewEmployee from './EMP/NewEmployee';
import Resign from './EMP/Resign';
import HRsystem from './HR/HRsystem';
import DescriptionBox from './HR/DescriptionBox';
import Checkl from './HR/Checkl';
import Reliving from './HR/Reliving';
import Lap from './Admin/Lap';
import Branch from './Admin/Branch';
import Dashboard from './Admin/Dashboard';
import EmployeeList from './HR/EmployeeList';
import Department from './Admin/Department';
import Roles from './Admin/Roles';
import SubDepartment from './Admin/SubDepartment';
import Forgot from './Admin/Forgot';
import Change from './Admin/Change';
import Off_Checklist from './HR/Off_Checklist';
import On_Checklist from './HR/On_Checklist';
import On_requestForm from './HR/On_requestForm';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       
       <Routes>
     
        <Route path='/AddCandidets' element={<AddCandidets/>}/>
        <Route path='/' element={<HrDashbord/>}/>
        <Route path='/Orientation' element={<Orientation/>}/>
        <Route path='/EmpDashboard' element={<EmpDashboard/>}/>
        <Route path='/OnBordingList' element={<OnBordingList/>}/>
        <Route path='/Basicinfo' element={<Basicinfo/>}></Route>
        <Route path='/Declaresubmit' element={<Declaresubmit/>}></Route>
        <Route path='/Documentsubmission' element={<Documentsubmission/>}></Route>
        <Route path='/NewEmployee' element={<NewEmployee/>}></Route>
        <Route path='/Resign' element={<Resign/>}/>
        <Route path='/HRsystem' element={<HRsystem/>}/>
        <Route path='/DescriptionBox' element={<DescriptionBox/>}/>
        <Route path='/Checkl' element={<Checkl/>}/>
        <Route path='/Reliving' element={<Reliving/>}/>
        <Route path='/Lap' element={<Lap/>}/>
        <Route path='/Branch' element={<Branch/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/EmployeeList' element={<EmployeeList/>}/>
        <Route path='/Department' element={<Department/>}/>
        <Route path='/Roles' element={<Roles/>}/>
        <Route path='/SubDepartment' element={<SubDepartment/>}/>
        <Route path='/Forgot' element={<Forgot/>}/>
        <Route path='/Change' element={<Change/>}/>
        <Route path='/Off_Checklist' element={<Off_Checklist/>}/>
        <Route path='/On_Checklist' element={<On_Checklist/>}/>
        <Route path='/On_requestForm' element={<On_requestForm/>}/>
        
       
        
        

       </Routes>
      
    </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();
