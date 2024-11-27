// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch users from the backend
//     const fetchUsers = async () => {
//       try {
//         const token = localStorage.getItem("authToken"); // Assume token is stored in localStorage
//         const response = await axios.get("http://localhost:5000/api/auth/", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUsers(response.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold text-gray-700 mb-6">Admin Dashboard</h1>

//       {error && <p className="text-red-500">Error: {error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {users.map((user) => (
//           <div
//             key={user._id}
//             className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
//           >
//             <h2 className="text-xl font-semibold text-gray-800">
//               {user.name || "Name Not Available"}
//             </h2>
//             <p className="text-gray-600">Email: {user.email}</p>
//             <p className="text-gray-600">Role: {user.role || "User"}</p>
//             <button className="mt-4 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React from 'react'

const AdminDashboard = () => {
  return (
    <div>
      <button>Create Classes</button>
    </div>
  )
}

export default AdminDashboard


