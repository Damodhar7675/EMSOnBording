import React from 'react';

const EmployeeList = ({ employees, onApprove, onDecline }) => {
  return (
    <table className="EmployeeList">
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.id}</td>
            <td>
              <button className="approve" onClick={() => onApprove(employee.id)}>Approve</button>
              <button className="decline" onClick={() => onDecline(employee.id)}>Decline</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
