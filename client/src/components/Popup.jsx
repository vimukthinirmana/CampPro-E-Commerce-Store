import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Popup = ({ onClose, addShippingAddress }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [aptSuite, setAptSuite] = useState('');
  const [country, setCountry] = useState('SriLanka');
  const [province, setProvince] = useState('Central');
  const [zipCode, setZipCode] = useState('');
  const [isDefault, setIsDefault] = useState(false);

  const handleConfirm = () => {
    if (name && phoneNumber && streetAddress && zipCode) {
      const newAddress = {
        name,
        phoneNumber,
        streetAddress,
        aptSuite,
        country,
        province,
        zipCode,
        isDefault
      };
      addShippingAddress(newAddress);
      toast.success("Address confirmed!");
      onClose();
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">My Shipping Address</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Contact</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 w-full rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="+94"
                className="border p-2 w-16 rounded-md"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-2 w-full rounded-md"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Example: Charith Akalanka</p>
          </div>
          <div>
            <label className="block text-sm font-semibold">Address</label>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Street, house/apartment/unit*"
                className="border p-2 w-full rounded-md"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Apt, Suite, Unit, etc. (Optional)"
                className="border p-2 w-full rounded-md"
                value={aptSuite}
                onChange={(e) => setAptSuite(e.target.value)}
              />
            </div>
          </div>
          <div className="flex space-x-2">
            <select
              className="border p-2 w-full rounded-md"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>SriLanka</option>
            </select>
            <select
              className="border p-2 w-full rounded-md"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              <option>Central</option>
              <option>Eastern</option>
              <option>North Central</option>
              <option>Northern</option>
              <option>North Western</option>
              <option>Sabaragamuwa</option>
              <option>Southern</option>
              <option>Uva</option>
              <option>Western</option>
            </select>
            <input
              type="text"
              placeholder="Zip Code"
              className="border p-2 w-full rounded-md"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={isDefault}
              onChange={(e) => setIsDefault(e.target.checked)}
            />
            <label className="text-sm">Set as default</label>
          </div>
          <div className="flex space-x-2">
            <button onClick={handleConfirm} className="bg-red-500 text-white p-2 rounded-md w-full">Confirm</button>
            <button onClick={onClose} className="border p-2 rounded-md w-full">Cancel</button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Popup;
