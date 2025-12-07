"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CRMHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);

  // Simulated real-life visitor count - replace with backend later
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (email === "test@gmail.com" && password === "pass123") {
      setLoggedIn(true);
    } else {
      alert("Invalid login credentials");
    }
  };

  if (!loggedIn) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg p-10 rounded-xl w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-5">CRM Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full border p-2 rounded"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full border p-2 rounded"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // After login – CRM dashboard
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">CRM Dashboard</h1>
        <button
          className="text-red-600 font-semibold"
          onClick={() => setLoggedIn(false)}
        >
          Logout
        </button>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow mt-4 mx-4 p-4 rounded-lg flex space-x-6 text-lg font-medium">
        <Link href="/CRM" className="hover:text-blue-600">Dashboard</Link>
        <Link href="/CRM/inquiries" className="hover:text-blue-600">Inquiries</Link>
        <Link href="/CRM/users" className="hover:text-blue-600">Users</Link>
        <Link href="/CRM/settings" className="hover:text-blue-600">Settings</Link>
      </nav>

      {/* Dashboard Content */}
      <main className="mx-4 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Visitors Card */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-bold mb-2">Real-Time Visitors</h2>
            <p className="text-4xl font-semibold text-blue-600">{visitorCount}</p>
            <p className="text-sm text-gray-500 mt-1">
              Auto-updating every 3 seconds
            </p>
          </div>

          {/* Inquiries */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-bold mb-2">Total Inquiries</h2>
            <p className="text-4xl font-semibold text-green-600">0</p>
            <p className="text-sm text-gray-500 mt-1">Connect DB later</p>
          </div>

          {/* Users */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-bold mb-2">Registered Users</h2>
            <p className="text-4xl font-semibold text-purple-600">1</p>
            <p className="text-sm text-gray-500 mt-1">Admin only for now</p>
          </div>
        </div>
      </main>
    </div>
  );
}
