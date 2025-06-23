import React, { useState } from "react";
import axios from "axios";

// URL endpoint API untuk membuat user baru
const API_URL = "https://gorest.co.in/public/v2/users";
// Token otorisasi untuk akses API
const TOKEN =
  "Bearer e3015e9bbb65a10329c370b8c4367342a37891a8060c0cfd63449ff81fca8a25";

// Data awal untuk form user
const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  gender: "male",
  status: "inactive",
};

// Header yang digunakan pada request API
const HEADERS = {
  Authorization: TOKEN,
  "Content-Type": "application/json",
};

// Komponen form untuk membuat user baru
const UserForm = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // Fungsi untuk menangani perubahan input pada form
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mengirim data user baru ke API
      await axios.post(API_URL, formData, { headers: HEADERS });
      alert("User created successfully!");
      // Reset form setelah berhasil
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      alert("Error creating user.");
      console.error(error);
    }
  };

  return (
    // Form input user baru
    <form onSubmit={handleSubmit}>
      <h2>Create New User</h2>
      {/* Input nama */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      {/* Input email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      {/* Pilihan gender */}
      <select name="gender" value={formData.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br />
      {/* Pilihan status */}
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <br />
      {/* Tombol submit */}
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
