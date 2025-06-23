import React, { useEffect, useState } from "react";
import axios from "axios";

// URL endpoint API untuk mengambil data user
const API_URL = "https://gorest.co.in/public/v2/users";
// Token akses API (sebaiknya disimpan di environment variable untuk keamanan)
const TOKEN =
  "Bearer e3015e9bbb65a10329c370b8c4367342a37891a8060c0cfd63449ff81fca8a25";

// Komponen utama untuk menampilkan daftar user
const UserList = () => {
  // State untuk menyimpan data user, status loading, dan error
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mengambil data user dari API saat komponen pertama kali dirender
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Mengirim request GET ke API dengan header otorisasi
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: TOKEN,
            "Content-Type": "application/json",
          },
        });
        // Menyimpan data user ke state
        setUsers(res.data);
      } catch (err) {
        // Menyimpan pesan error jika request gagal
        setError("Failed to fetch users.");
        console.error(err);
      } finally {
        // Mengubah status loading menjadi false setelah request selesai
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Menampilkan pesan loading jika data masih diambil
  if (loading) return <div>Loading users...</div>;
  // Menampilkan pesan error jika terjadi error saat fetch data
  if (error) return <div>{error}</div>;

  // Menampilkan daftar user dalam elemen <ul>
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((u) => (
          <React.Fragment key={u.id}>
            <li>
              <strong>{u.name}</strong> - {u.email} ({u.gender}, {u.status})
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
