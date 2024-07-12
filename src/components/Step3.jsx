import React from "react";

const Step3 = ({ formData, prevStep, submitForm, loading }) => {
  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.address1 &&
      formData.city &&
      formData.state &&
      formData.zip
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      submitForm();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="form-container">
      <h2>Confirmation</h2>
      <div>
        <strong>Name:</strong> {formData.name}
      </div>
      <div>
        <strong>Email:</strong> {formData.email}
      </div>
      <div>
        <strong>Phone:</strong> {formData.phone}
      </div>
      <div>
        <strong>Address Line 1:</strong> {formData.address1}
      </div>
      <div>
        <strong>Address Line 2:</strong> {formData.address2}
      </div>
      <div>
        <strong>City:</strong> {formData.city}
      </div>
      <div>
        <strong>State:</strong> {formData.state}
      </div>
      <div>
        <strong>Zip Code:</strong> {formData.zip}
      </div>
      <button onClick={prevStep} disabled={loading}>
        Back
      </button>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default Step3;
