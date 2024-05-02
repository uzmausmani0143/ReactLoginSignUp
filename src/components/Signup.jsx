// SignUp.jsx
import React, { useState } from 'react';


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement your signup logic here
    console.log('Signing up with:', username, password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-3 py-2 border rounded"
        />
        <button onClick={handleSignUp} className="w-full bg-orange-800 text-white py-2 rounded hover:bg-orange-600">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
