"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { createAndStoreToken } from '@/auth'; // Import the auth functions
import { NextApiRequest, NextApiResponse } from 'next';
import sharedData, { updateSharedData } from '@/components/carry';


export default function SignIn() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    password: '',
  });
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };



  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password
    
    
    // Move the useRouter here to ensure it's only used on the client side
    const { push } = require('next/router');

    
    try {
      // Send the email and password to the API to check user credentials
      if(email === "admin@carshipy.com" && password === "Tuneplay1")
      {
        alert("Welcome Admin");
        window.location.href = '/admin?aid="8901"';
      }
      
      const response = await fetch(`https://wza7nsd152.execute-api.us-east-2.amazonaws.com/default/create_carrier?TableName=users&email=rockstartalha12@gmail.com&password=esgpwp8901`);
      const data = await response.json();
      const newdata = sharedData;
      console.log(data.Items[0].email);
      console.log(data[0]);
      console.log(data[0]);


      if ( data.Items[0].email == email && data.Items[0].password == password) {

        const user = data.Items[0].carrier_id;
        //createAndStoreToken(user);
        updateSharedData(data.Items[0].user_id);

        alert("Welcome "+data.Items[0].fullname);
        window.location.href = '/dashboard?id="'+user+'"';
      } else {
        alert('User not found. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome back. Carshipy exists to make Auto transportation easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Rest of your form code */}
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name='email'
                    className="form-input w-full text-gray-300"
                    placeholder="you@yourcompany.com"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    name='password'
                    className="form-input w-full text-gray-300"
                    placeholder="Password (at least 10 characters)"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign in</button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Don’t you have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
