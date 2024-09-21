import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      const existingSubmissions =
        JSON.parse(localStorage.getItem("submissions")) || [];
      const updatedSubmissions = [...existingSubmissions, formData];
      localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));

      setLoading(false);
    }, 1000); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 relative">
      <form
        className="w-full max-w-lg bg-black p-8 rounded-2xl shadow-gray-800 shadow-lg border-2 border-blue-600 bg-opacity-50"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          User Form
        </h2>

        <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </div>

        <div className="mb-4">
          <input
            className="w-full p-2 border rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email Id"
          />
        </div>

        <div className="mb-4">
          <textarea
            className="w-full p-2 border rounded"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Address"
          ></textarea>
        </div>

        <div className="mb-6">
          <input
            className="w-full p-2 border rounded"
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
            placeholder="Contact Number"
          />
        </div>

        <button
          className="w-full bg-blue-500 font-medium text-lg text-white p-2 rounded hover:bg-blue-600"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-8 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <button
        className="shadow-gray-800 shadow-md w-full max-w-md mt-12 bg-blue-500 font-medium text-lg text-white p-2 rounded hover:bg-blue-600"
        onClick={() => navigate("/display")}
      >
        Display User Data Submitted Locally
      </button>
    </div>
  );
}

export default Form;
