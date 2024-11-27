import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ClientDashboard = () => {
  const { user} = useContext(AuthContext);

  return (
    <div>
       <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Profile Card */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
            <h1 className="text-2xl font-bold">Welcome, {user?.email || "User"}!</h1>
              <p>Height: 5'7"</p>
              <p>Weight: 68 kg</p>
            </div>
          </div>
        </div>

        {/* Distance and Calories */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Distance</h3>
          <p className="text-3xl font-bold">5.6 km</p>
          <p className="text-sm text-gray-400">Goal: 10 km</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Calories</h3>
          <p className="text-3xl font-bold">251 kcal</p>
          <p className="text-sm text-gray-400">Goal: 450 kcal</p>
        </div>

        {/* Heart Rate */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Heart Rate</h3>
          <p className="text-3xl font-bold">89 bpm</p>
        </div>

        {/* Active Time */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-2">
          <h3 className="text-lg font-bold">Active Time</h3>
          <div className="h-32 bg-gray-700 mt-2 rounded-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
             fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </div>

        {/* Sleep */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Sleep</h3>
          <p className="text-xl">8 hrs</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ClientDashboard
