import React, { useState } from 'react';
import EmployeeList from './EmployeeList';

import Checkl from './Checkl';
import './HRsystem.css'; // Import the CSS file
import DescriptionBox from './DescriptionBox';

const HRsystem = () => {
  const [employees] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [action, setAction] = useState(null);

  const handleApprove = (id) => {
    setSelectedEmployee(id);
    setAction('approve');
  };

  const handleDecline = (id) => {
    setSelectedEmployee(id);
    setAction('decline');
  };

  return (
    <div className="Approve_main">
      <h1 className="Approve_header">Employee Approval</h1>
      {action === null && (
        <EmployeeList 
          employees={employees}
          onApprove={handleApprove}
          onDecline={handleDecline}
        />
      )}
      {action === 'approve' && <Checkl id={selectedEmployee} />}
      {action === 'decline' && <DescriptionBox id={selectedEmployee} />}
    </div>
  );
};

export default HRsystem;
