import React, { useState, useEffect } from "react";

const Step2 = ({ formData, setFormData, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [setFormData]);

  const validate = () => {
    let tempErrors = {};
    if (!formData.address1) tempErrors.address1 = "Address Line 1 is required.";
    if (!formData.city) tempErrors.city = "City is required.";
    if (!formData.state) tempErrors.state = "State is required.";
    if (!formData.zip || !/^\d{6}$/.test(formData.zip))
      tempErrors.zip = "Zip Code is invalid. It should be 6 digits.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    let tempErrors = { ...errors };

    if (field === "zip") {
      if (!value || !/^\d{6}$/.test(value)) {
        tempErrors.zip = "Zip Code is invalid. It should be 6 digits.";
      } else {
        delete tempErrors.zip;
      }
    } else {
      if (!value) {
        tempErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required.`;
      } else {
        delete tempErrors[field];
      }
    }

    setErrors(tempErrors);
  };

  const handleNext = () => {
    if (validate()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      nextStep();
    }
  };

  return (
    <div className="form-container">
      <h2>Address Information</h2>
      <div>
        <label>Address Line 1</label>
        <input
          type="text"
          value={formData.address1}
          onChange={(e) => handleChange("address1", e.target.value)}
        />
        {errors.address1 && <p className="error">{errors.address1}</p>}
      </div>
      <div>
        <label>Address Line 2</label>
        <input
          type="text"
          value={formData.address2}
          onChange={(e) => handleChange("address2", e.target.value)}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => handleChange("city", e.target.value)}
        />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => handleChange("state", e.target.value)}
        />
        {errors.state && <p className="error">{errors.state}</p>}
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          value={formData.zip}
          onChange={(e) => handleChange("zip", e.target.value)}
        />
        {errors.zip && <p className="error">{errors.zip}</p>}
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
