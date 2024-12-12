import React from 'react';
import Image from 'next/image';
import Foto from './assets/Pict Inventory.png';
import Logo from './assets/Logo23.jpg'; // Import logo Anda di sini

function Login() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="w-full bg-blue-500 text-white py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src={Logo} 
              alt="Logo Tekno Jaya" 
              width={120}
              height={40} 
              className="object-contain"
            />
          </div>
          <nav className="flex space-x-4">
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </nav>
        </div>
      </header>

      {}
      <div className="flex justify-center items-center flex-grow">
        <div className="w-full lg:w-1/2 bg-white p-11 rounded-lg shadow-md flex">
          {}
          <Image 
            src={Foto} 
            width={300} 
            alt="Inventory Logo" 
            className="mr-10 object-contain" 
          />

          <div className=" flex-col w-full max-w-md flex items-center">
            <h2 className="text-2xl font-bold mb-4 flex">Login</h2>
            <div className="mb-4">
              <input 
                type="text" 
                className="w-full bg-slate-200 text-dark p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Username" 
              />
            </div>
            <div className="mb-4">
              <input 
                type="password" 
                className="w-full bg-slate-200 text-dark p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Password" 
              />
            </div>
            <button 
              className="text-base font-semibold text-white bg-primary px-8 py-4 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500 mt-4">
              Login
            </button>
            <p className="text-sm mt-2 flex items-center">
              New user? <a href="#" className="text-blue-500">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;