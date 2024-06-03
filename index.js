import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import AddCandidets from './AddCandidets';
import Orientation from './Orientation';
import HrDashbord from './HrDashbord';
import EmpDashboard from './EmpDashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       
       <Routes>
     
        {/* <Route path='/' element={<AddCandidets/>}/> */}
        {/* <Route path='/' element={<HrDashbord/>}/> */}
        <Route path='/Orientation' element={<Orientation/>}/>
        <Route path='/' element={<EmpDashboard/>}/>
        
        

       </Routes>
      
    </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();
