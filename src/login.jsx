import React, { useState } from "react";
import { Link } from "react-router-dom";  
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    alert("Submitted successfully!");
    window.location.assign("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[url('/img.jpg')]">
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-transparent rounded-2xl shadow-lg p-6 w-full max-w-xs border-2 border-white/20 backdrop-blur-[20px] shadow-black/20 text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4 relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="white" viewBox="0 0 448 512" stroke="white">
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>
          </span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-10 py-2 border-2 border-white/20 rounded-3xl focus:outline-none focus:ring-1 focus:ring-purple-400"
            required
            placeholder="Email"
          />
        </div>
        <div className="mb-6 relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m6-6V9a6 6 0 10-12 0v2m12 0a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2m12 0H6" />
            </svg>
          </span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-10 py-2 border-2 border-white/20 rounded-3xl focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-3xl text-sm hover:bg-neutral-200 transition font-bold">
          Login
        </button>
        <div className="mt-4 text-center text-sm text-white">
          Don&apos;t have an account?{" "}
          <Link
        to="/register"
        className="text-white hover:underline font-medium"
      >
        Register
      </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;