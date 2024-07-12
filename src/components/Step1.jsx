import React, { useState, useEffect } from "react";

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  const [countryCodes] = useState([
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+81", country: "Japan" },
    { code: "+7", country: "Russia" },
    { code: "+61", country: "Australia" },
    { code: "+55", country: "Brazil" },
    { code: "+92", country: "Pakistan" },
    { code: "+234", country: "Nigeria" },
    { code: "+27", country: "South Africa" },
    { code: "+82", country: "South Korea" },
    { code: "+62", country: "Indonesia" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+52", country: "Mexico" },
    { code: "+31", country: "Netherlands" },
    { code: "+880", country: "Bangladesh" },
    { code: "+20", country: "Egypt" },
    { code: "+251", country: "Ethiopia" },
    { code: "+254", country: "Kenya" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+46", country: "Sweden" },
    { code: "+255", country: "Tanzania" },
    { code: "+66", country: "Thailand" },
    { code: "+90", country: "Turkey" },
    { code: "+256", country: "Uganda" },
    { code: "+380", country: "Ukraine" },
    { code: "+84", country: "Vietnam" },
    { code: "+260", country: "Zambia" },
    { code: "+263", country: "Zimbabwe" },
  ]);

  useEffect(() => {
    // Clear formData when the component mounts to ensure all fields are empty
    setFormData({
      name: "",
      email: "",
      phone: "",
      countryCode: countryCodes[0]?.code, // Default to the first country code
    });
  }, [setFormData, countryCodes]);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is invalid.";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone))
      tempErrors.phone = "Phone number is invalid. It should be 10 digits.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    let tempErrors = { ...errors };

    if (field === "phone") {
      if (!value || !/^\d{10}$/.test(value)) {
        tempErrors.phone = "Phone number is invalid. It should be 10 digits.";
      } else {
        delete tempErrors.phone;
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
      <h2>Personal Information</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Phone</label>
        <div className="phone-input">
          <select
            value={formData.countryCode}
            onChange={(e) => handleChange("countryCode", e.target.value)}
          >
            {countryCodes.map((code, index) => (
              <option key={index} value={code.code}>
                {`${code.country} (${code.code})`}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            maxLength={10} // Enforces maximum length of 10 digits
            pattern="\d{10}" // Ensures only digits are allowed
          />
        </div>
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
