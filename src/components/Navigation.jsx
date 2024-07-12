import React from "react";

const Navigation = ({ currentStep, steps }) => {
  return (
    <div className="nav-container">
      {steps.map((step, index) => (
        <button
          key={index}
          className={`nav-button ${currentStep === index + 1 ? "active" : ""}`}
          disabled
        >
          {step}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
