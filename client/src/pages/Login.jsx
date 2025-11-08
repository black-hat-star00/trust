import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', {
        email,
        password,
      });
      // Handle successful login, e.g., store token and redirect
      console.log('Login successful', response.data);
    } catch (error) {
      // Handle login error
      console.error('Error logging in', error);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <span className="material-symbols-outlined text-3xl">health_and_safety</span>
          </div>
          <h1 className="text-charcoal dark:text-gray-200 text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-medium-grey dark:text-gray-400 text-center">Log in to your TrustNet Health+ account.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-charcoal dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="email">Email or Phone Number</label>
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined absolute left-4 text-medium-grey">person</span>
              <input
                className="form-input flex w-full flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 text-charcoal dark:text-white placeholder:text-medium-grey dark:placeholder:text-gray-500 focus:border-primary focus:ring-primary h-12 py-2 pl-12 pr-4 text-base font-normal"
                id="email"
                placeholder="Enter your email or phone"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between pb-2">
              <label className="text-charcoal dark:text-gray-300 text-sm font-medium leading-normal" htmlFor="password">Password</label>
              <a className="text-sm font-medium text-primary hover:underline" href="#">Forgot Password?</a>
            </div>
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined absolute left-4 text-medium-grey">lock</span>
              <input
                className="form-input flex w-full flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 text-charcoal dark:text-white placeholder:text-medium-grey dark:placeholder:text-gray-500 focus:border-primary focus:ring-primary h-12 py-2 pl-12 pr-12 text-base font-normal"
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button aria-label="Toggle password visibility" className="absolute right-0 flex h-full w-12 items-center justify-center text-medium-grey" type="button">
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
          <button className="flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
            Login
          </button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300 dark:border-gray-600"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background-light dark:bg-background-dark px-2 text-medium-grey dark:text-gray-400">Or continue with</span>
          </div>
        </div>
        <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 h-12 px-6 text-base font-medium text-charcoal dark:text-white transition-colors hover:bg-light-blue-grey dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
          <img alt="Google logo" className="mr-3 h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_VX_uy2o5L8dF79hHIGowtdU7WkfizbGMKK8gHuCG2pbNkI_Iull_v3XudC_AsnnXUbujxxiFdkZ9roi2CkE6iATDWCXxXRYI1MESbpKDGJS1jQ0nEMvOX1IokKrHG35KrCJx37hAuZfBJ-E0IqOZR0WRAGTkqRH2h4JAMgp6dojQx3GokfaX2qgPxjQuYmIO1-vPHGfUWzxPWjNrGnuzInHpeaa6FDPhgfFOSUWbPy2Rn-cUYRekfpUclcqumm4s-pyPMp--1cY" />
          Continue with Google
        </button>
        <div className="text-center">
          <p className="text-sm text-medium-grey dark:text-gray-400">
            Don't have an account? <a className="font-medium text-primary hover:underline" href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
