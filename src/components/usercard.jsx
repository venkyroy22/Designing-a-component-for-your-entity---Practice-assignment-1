// write the component code here
import React from "react";

const Usercard = () => {
  
  const user = {
    profilePhoto: "data:image/jpeg;base64,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",
    name: "Venky Roy",
    email: "venkyroy@gmail.com",
    phone: "+91 7396894938",
    address: "Alliance University, Banglore, India"
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg p-6 bg-white border border-gray-200">
      <img
        className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
        src={user.profilePhoto}
        alt="User Profile"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.phone}</p>
        <p className="text-gray-600 mt-2">{user.address}</p>
      </div>
    </div>
  );
};

export default Usercard;

