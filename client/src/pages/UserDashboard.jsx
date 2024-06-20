import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaCog, FaBars, FaUpload } from 'react-icons/fa';

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed z-30 inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white shadow-md w-64`}>
        <div className="px-8 py-4">
          <h2 className="text-2xl font-bold mb-8">User Dashboard</h2>
          <nav className="space-y-4">
            <a href="#profile" className="flex items-center text-gray-700 hover:text-gray-900" onClick={closeSidebar}>
              <FaUser className="w-6 h-6 mr-2" />
              <span>Profile</span>
            </a>
            <a href="#orders" className="flex items-center text-gray-700 hover:text-gray-900" onClick={closeSidebar}>
              <FaShoppingCart className="w-6 h-6 mr-2" />
              <span>Orders</span>
            </a>
            <a href="#settings" className="flex items-center text-gray-700 hover:text-gray-900" onClick={closeSidebar}>
              <FaCog className="w-6 h-6 mr-2" />
              <span>Settings</span>
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
          <h1 className="text-2xl font-bold">User Dashboard</h1>
        </header>

        {/* Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-8">Welcome, User</h1>

          {/* Profile Section */}
          <div id="profile" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Profile</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                {previewImage ? (
                  <img src={previewImage} alt="Profile" className="w-20 h-20 rounded-full" />
                ) : (
                  <FaUser className="w-20 h-20 text-gray-500" />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="profile-image-upload"
                />
                <label
                  htmlFor="profile-image-upload"
                  className="cursor-pointer text-blue-500 hover:text-blue-700 flex items-center"
                >
                  <FaUpload className="mr-2" />
                  Upload Image
                </label>
              </div>
              <p className="text-gray-700">Name: John Doe</p>
              <p className="text-gray-700">Email: john.doe@example.com</p>
            </div>
          </div>

          {/* Orders Section */}
          <div id="orders" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Orders</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Order ID</th>
                    <th className="py-2 px-4 border-b">Product</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">1234</td>
                    <td className="py-2 px-4 border-b">Tent</td>
                    <td className="py-2 px-4 border-b">Shipped</td>
                    <td className="py-2 px-4 border-b">01/01/2024</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">1235</td>
                    <td className="py-2 px-4 border-b">Backpack</td>
                    <td className="py-2 px-4 border-b">Processing</td>
                    <td className="py-2 px-4 border-b">02/01/2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Settings Section */}
          <div id="settings" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">Account Settings will go here.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
