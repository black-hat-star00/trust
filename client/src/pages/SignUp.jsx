import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/register', {
        fullName,
        email,
        password,
      });
      // Handle successful registration, e.g., redirect to login or dashboard
      console.log('Registration successful', response.data);
    } catch (error) {
      // Handle registration error
      console.error('Error signing up', error);
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
            <span className="material-symbols-outlined text-3xl">health_and_safety</span>
          </div>
          <h1 className="text-charcoal dark:text-gray-200 text-3xl font-bold tracking-tight">Create Account</h1>
          <p className="text-medium-grey dark:text-gray-400 text-center">Join TrustNet Health+ to manage your health.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-charcoal dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="fullname">Full Name</label>
            <div className="relative flex w-full items-center">
              <span className="material-symbols-outlined absolute left-4 text-medium-grey">badge</span>
              <input
                className="form-input flex w-full flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-800 text-charcoal dark:text-white placeholder:text-medium-grey dark:placeholder:text-gray-500 focus:border-primary focus:ring-primary h-12 py-2 pl-12 pr-4 text-base font-normal"
                id="fullname"
                placeholder="Enter your full name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
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
            <label className="text-charcoal dark:text-gray-300 text-sm font-medium leading-normal pb-2" htmlFor="password">Password</label>
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
          <PrimaryButton type="submit" icon="login">
            Sign Up
          </PrimaryButton>
        </form>
        <div className="text-center">
          <p className="text-xs text-medium-grey dark:text-gray-400">
            By signing up, you agree to our <br /> <a className="font-medium text-primary hover:underline" href="#">Terms of Service</a> and <a className="font-medium text-primary hover:underline" href="#">Privacy Policy</a>.
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-medium-grey dark:text-gray-400">
            Already have an account? <a className="font-medium text-primary hover:underline" href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
