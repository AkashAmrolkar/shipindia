import { useState } from "react";
import { useFormContext } from "react-hook-form";

const DestinationDetails = () => {
  const { register } = useFormContext();
  const [addresses] = useState([
    { id: 1, name: "Akash Amrolkar", email: 'akas@gmail.com', mobileNumber: '8380863314', address: "Chandgad", city: "Kolhapur", state: "Maharashtra", country: "India", pincode: "416508" },
    { id: 2, name: "Amrolkar", email: 'akas@gmail.com', mobileNumber: '9988774455', address: "456 Elm St, Shelbyville, IL", city: "Shelbyville", state: "IL", country: "USA", pincode: "62565" },
    { id: 3, name: "Test", email: 'akas@gmail.com', mobileNumber: '8844556633', address: "789 Oak St, Capital City, IL", city: "Capital City", state: "IL", country: "USA", pincode: "62701" },
  ]);
  const [selectedAddr, setSelectedAddr] = useState()
  const handleAddressChange = (e) => {
    const selectedId = parseInt(e.target.value, 10);
    const selectedAddress = addresses.find((addr) => addr.id === selectedId);
    setSelectedAddr(selectedAddress)
  };
  return (
    <div className="px-5 py-10 bg-white shadow-custom rounded-3xl">
      <div className="grid md:grid-cols-6 gap-5">
        {/* Address Selection */}
        <div className="md:col-span-3">
          <label htmlFor="selectedAddress" className="block text-sm font-medium text-gray-400 mb-2">
            Select Destination Address
          </label>
          <select
            id="selectedAddress"
            {...register("selectedAddress", { required: "Pickup Address is required" })}
            onChange={handleAddressChange}
            className="w-full p-3 border rounded-lg text-sm text-secondary outline-primary border-gray-300"
          >
            <option value="">-- Select Address --</option>
            {addresses.map((address) => (
              <option key={address.id} value={address.id} className="text-black">
                {address.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {
        selectedAddr &&
        <div className="mt-6 text-secondary">
          <strong>{selectedAddr.name}</strong>
          <p>{selectedAddr.mobileNumber}</p>
          <p>{selectedAddr.email}</p>
          <p>{selectedAddr.pincode},{selectedAddr.address},{selectedAddr.city},{selectedAddr.state}</p>
        </div>
      }
    </div>
  )
}

export default DestinationDetails