import React, { useState } from 'react';
import { FaUsers, FaBox, FaChartLine, FaCog, FaBars, FaSignOutAlt, Famu } from 'react-icons/fa';

function AdminDashboard() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };


  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <div className={`fixed z-30 h-3/4 inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white shadow-md w-64`}>
        <div className="px-8 py-4">
          <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
          <span className=''></span>
          <nav className="space-y-4">
            <a href="#users" className="flex items-center text-gray-700 hover:text-gray-900" onClick={closeSidebar}>
              <FaUsers className="w-6 h-6 mr-2" />
              <span>Users</span>
            </a>
            <a href="#products" className="flex items-center text-gray-700 hover:text-gray-900" onClick={closeSidebar}>
              <FaBox className="w-6 h-6 mr-2" />
              <span>Products</span>
            </a>
            <a href="#analytics" className="flex items-center text-gray-700 hover:text-gray-900" onClick={closeSidebar}>
              <FaChartLine className="w-6 h-6 mr-2" />
              <span>Analytics</span>
            </a>
            <a href="#settings" className="flex items-center text-gray-700 hover:text-gray-900" onClick={closeSidebar}>
              <FaCog className="w-6 h-6 mr-2" />
              <span>Settings</span>
            </a>
            <a href="#settings" className="flex items-center text-gray-700 hover:text-gray-900" onClick={closeSidebar}>
              <FaSignOutAlt className="w-6 h-6 mr-2" />
              <span>Logout</span>
            </a>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md flex items-center justify-between p-4">
          <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
            <FaBars className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-8">Welcome, Admin</h1>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaUsers className="text-blue-500 w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold">Users</h2>
              <p className="text-gray-600">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaBox className="text-green-500 w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold">Products</h2>
              <p className="text-gray-600">567</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaChartLine className="text-red-500 w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold">Sales</h2>
              <p className="text-gray-600">$12,345</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCog className="text-yellow-500 w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold">Settings</h2>
              <p className="text-gray-600">Configure</p>
            </div>
          </div>

          {/* Users Section */}
          <div id="users" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Users</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">John Doe</td>
                    <td className="py-2 px-4 border-b">john@example.com</td>
                    <td className="py-2 px-4 border-b">Admin</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Jane Smith</td>
                    <td className="py-2 px-4 border-b">jane@example.com</td>
                    <td className="py-2 px-4 border-b">User</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Products Section */}
          <div id="products" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Products</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Category</th>
                    <th className="py-2 px-4 border-b">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Tent</td>
                    <td className="py-2 px-4 border-b">Camping Gear</td>
                    <td className="py-2 px-4 border-b">$100</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Backpack</td>
                    <td className="py-2 px-4 border-b">Accessories</td>
                    <td className="py-2 px-4 border-b">$50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Analytics Section */}
          <div id="analytics" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Analytics</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Placeholder for analytics charts */}
              <p className="text-gray-700">Analytics charts and data will go here.</p>
            </div>
          </div>

          {/* Settings Section */}
          <div id="settings" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Placeholder for settings options */}
              <p className="text-gray-700">Settings options will go here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;