import React, { useState } from 'react';
import './Off_Checklist.css';

const Off_Checklist = () => {
  // Define state for each checkbox
  const [formState, setFormState] = useState({
    knowledgeTransfer: false,
    assetRecovery: false,
    systemAccess: false,
    fnf: false,
    departmentNOC: false,
    exitInterview: false,
  });

  // Handle checkbox change
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
  };

  return (
    <form className='dd_form_oCh' onSubmit={handleSubmit}>
      <h1 className='dd_h1_och'>offboardingChecklist</h1>
      <div className='dd_div_Offche'>
        <label className='dd_label_offcje'>
          <input
            className='dd_input_OffCheck'
            type="checkbox"
            name="knowledgeTransfer"
            checked={formState.knowledgeTransfer}
            onChange={handleChange}
          />
          Knowledge Transfer (Soft Dev)
        </label>
      </div>
      <div className='dd_div_Offche'>
        <label className='dd_label_offcje'>
          <input
          className='dd_input_OffCheck'
            type="checkbox"
            name="assetRecovery"
            checked={formState.assetRecovery}
            onChange={handleChange}
          />
          Asset Recovery (IT)
        </label>
      </div>
      <div className='dd_div_Offche'>
        <label className='dd_label_offcje'>
          <input
          className='dd_input_OffCheck'
            type="checkbox"
            name="systemAccess"
            checked={formState.systemAccess}
            onChange={handleChange}
          />
          System Access (IT)
        </label>
      </div>
      <div className='dd_div_Offche'>
        <label className='dd_label_offcje'>
          <input
          className='dd_input_OffCheck'
            type="checkbox"
            name="fnf"
            checked={formState.fnf}
            onChange={handleChange}
          />
          FnF (Acct)
        </label>
      </div>
      <div className='dd_div_Offche'>
        <label className='dd_label_offcje'>
          <input
          className='dd_input_OffCheck'
            type="checkbox"
            name="departmentNOC"
            checked={formState.departmentNOC}
            onChange={handleChange}
          />
          Department NOC (IT)
        </label>
      </div>
      <div className='dd_div_Offche'>
        <label className='dd_label_offcje'>
          <input
          className='dd_input_OffCheck'
            type="checkbox"
            name="exitInterview"
            checked={formState.exitInterview}
            onChange={handleChange}
          />
          Exit Interview (HR)
        </label>
      </div>
      <button className='dd_butn_offCheck' type="submit">Submit</button>
    </form>
  );
};

export default Off_Checklist;
