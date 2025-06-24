import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://gorest.co.in/public/v2/users";
const TOKEN =
  "Bearer e3015e9bbb65a10329c370b8c4367342a37891a8060c0cfd63449ff81fca8a25";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  gender: "male",
  status: "inactive",
};

const HEADERS = {
  Authorization: TOKEN,
  "Content-Type": "application/json",
};

const UserForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, formData, { headers: HEADERS });
      alert("User created successfully!");
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      alert("Error creating user.");
      console.error(error);
    }
  };

  return (
    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 h-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Create New User
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
