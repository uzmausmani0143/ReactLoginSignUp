import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    console.log('Logging in with:', username, password);
    alert('Login Succesfully')
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-96 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
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
        <button onClick={handleLogin} className="w-full bg-orange-800 text-white py-2 rounded hover:bg-orange-500">Login</button>
      </div>
    </div>
  );
};

export default Login;
