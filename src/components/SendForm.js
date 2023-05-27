import React from "react";

const SendForm = ({ scroll, openForm, onSubmit }) => {
  const handleClick = () => {
    openForm(); // Call the openForm callback to open the form
  };

  const submitForm = (formData) => {
    if (onSubmit) {
      onSubmit(formData); // Call the onSubmit callback with the form data
    }
  };

  return (
    <div className="create-form">
      <button onClick={handleClick}>Create new Form</button>
      {/* Rest of the component code */}
    </div>
  );
};

export default SendForm;
