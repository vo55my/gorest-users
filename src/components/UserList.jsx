import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://gorest.co.in/public/v2/users";
const TOKEN =
  "Bearer e3015e9bbb65a10329c370b8c4367342a37891a8060c0cfd63449ff81fca8a25";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(API_URL, {
          headers: {
            Authorization: TOKEN,
            "Content-Type": "application/json",
          },
        });
        setUsers(res.data);
      } catch (err) {
        setError("Failed to fetch users.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6 h-full">
        <p className="text-gray-500">Loading users...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex-1 bg-white rounded-xl shadow-lg p-6 h-full">
        <p className="text-red-500">{error}</p>
      </div>
    );

  return (
    <div className="flex-1 bg-white rounded-xl shadow-lg p-6 h-full overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        User List
      </h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-gray-50 border border-gray-200 rounded-md hover:shadow transition"
          >
            <p className="text-lg font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <div className="text-sm text-gray-500 capitalize">
              {user.gender}, {user.status}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
