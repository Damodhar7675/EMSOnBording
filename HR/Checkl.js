
import React, { useState } from 'react';
import './Checklist.css';

const Checkl = () => {
  const [checkedItems, setCheckedItems] = useState({
    knowledgeTransfer: false,
    assetRecovery: false,
    systemAccess: false,
    fnf: false,
    departmentNoc: false,
    exitInterview: false,
    returnIdCard: false,
    clearDesk: false,
    notifyTeam: false,
    returnLaptop: false,
    clearEmail: false,
    logoutAccounts: false,
    handoverDocuments: false,
    completeProjects: false,
    updateContacts: false,
  });

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    console.log('Checked items:', checkedItems);
  };

  return (
    <div className="HRApprove_fullscreen">
      <div className="HRApprove_header">Checklist</div>
      <p className="HRApprove_description">
        Please ensure that all the following tasks are completed before submitting the form.
        This checklist is crucial for ensuring a smooth transition and proper handling of resources.
      </p>
      <div className="HRApprove_centeredContainer">
        {Object.keys(checkedItems).map((item) => (
          <div className="HRApprove_item" key={item}>
            <input
              type="checkbox"
              id={item}
              name={item}
              checked={checkedItems[item]}
              onChange={handleChange}
            />
            <label htmlFor={item} className="HRApprove_itemLabel">
              <span className="HRApprove_text">{item.split(/(?=[A-Z])/).join(' ')}</span>
              <span className="HRApprove_itemDepartment">{getDepartment(item)}</span>
            </label>
          </div>
        ))}
        <div className="HRApprove_submit">
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

const getDepartment = (item) => {
  switch (item) {
    case 'knowledgeTransfer':
      return 'Soft Dev';
    case 'assetRecovery':
    case 'systemAccess':
    case 'departmentNoc':
    case 'returnLaptop':
    case 'clearEmail':
    case 'logoutAccounts':
      return 'IT';
    case 'fnf':
      return 'Acct';
    case 'exitInterview':
    case 'notifyTeam':
      return 'HR';
    case 'returnIdCard':
    case 'clearDesk':
      return 'Admin';
    case 'handoverDocuments':
    case 'completeProjects':
    case 'updateContacts':
      return 'General';
    default:
      return '';
  }
};

export default Checkl;