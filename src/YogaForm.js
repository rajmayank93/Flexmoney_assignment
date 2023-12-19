// YogaForm.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const YogaForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: 18,
    email: "",
    batch: "6-7AM", // Default value
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Basic form validation
      if (!formData.name || !formData.age || !formData.email) {
        throw new Error("Please fill in all fields.");
      }

      // Make API call to your backend
      const response = await fetch("http://localhost:4000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error submitting form data.");
      }

      // Get the response from the server
      const responseData = await response.json();
      console.log(response);

      // Assuming CompletePayment() is a mock function for payment processing
      //   const paymentResponse = CompletePayment(formData);

      //   // Handle the payment response and update the UI accordingly
      //   console.log("Payment Response:", paymentResponse);

      // You can also handle responseData from the server if needed
      console.log("Server Response:", responseData);
      alert("User is added");
    } catch (error) {
      console.error("Form submission error:", error.message);
    }
  };

  function handleSearchPage() {
    navigate("/find");
  }

  return (
    <div>
      <h2>Yoga Class Enrollment Form</h2>
      <button onClick={handleSearchPage}>Already a User?Modify Here</button>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Age:
          <select name="age" value={formData.age} onChange={handleInputChange}>
            {[...Array(48).keys()].map((num) => (
              <option key={num + 18} value={num + 18}>
                {num + 18}
              </option>
            ))}
          </select>
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <label>
          Batch:
          <select
            name="batch"
            value={formData.batch}
            onChange={handleInputChange}
          >
            <option value="6-7AM">6-7AM</option>
            <option value="7-8AM">7-8AM</option>
            <option value="8-9AM">8-9AM</option>
            <option value="5-6PM">5-6PM</option>
          </select>
        </label>

        <button type="submit">Pay Now Rs.500</button>
      </form>
    </div>
  );
};

export default YogaForm;
