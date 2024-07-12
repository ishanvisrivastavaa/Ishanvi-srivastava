import React, { useState, useEffect } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Navigation from "./components/Navigation";
import "./App.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Remove formData from state but not from localStorage on initial render
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const submitForm = () => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      if (Math.random() < 0.8) {
        localStorage.setItem("submittedFormData", JSON.stringify(formData));
        localStorage.removeItem("formData");
        setLoading(false);
        alert("Form Submitted Successfully!");
        setCurrentStep(1);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        });
      } else {
        setLoading(false);
        setError("Error submitting form. Please try again.");
      }
    }, 2000); // Simulate network request delay
  };

  const steps = ["Step 1", "Step 2", "Step 3"];

  return (
    <div className="App">
      <h1 className="heading">
        Welcome to MultiPageForm! Guruji Astro Assignment
      </h1>
      <Navigation currentStep={currentStep} steps={steps} />
      {error && <p className="error">{error}</p>}
      {currentStep === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          prevStep={prevStep}
          submitForm={submitForm}
          loading={loading}
        />
      )}
    </div>
  );
};

export default App;
