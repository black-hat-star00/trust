import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email });
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
        <div className="flex size-12 shrink-0 items-center justify-start text-text-light dark:text-text-dark">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-text-light dark:text-text-dark">Reset Password</h2>
        <div className="size-12 shrink-0"></div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="w-full">
          <h1 className="text-text-light dark:text-text-dark tracking-tight text-[32px] font-bold leading-tight text-left pb-2 pt-6">Forgot Password?</h1>
          <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal pb-8 pt-1">Enter your registered email or phone number to receive a password reset code.</p>
          <form onSubmit={handleSubmit}>
            <div className="flex max-w-full flex-wrap items-end gap-4 py-3">
              <label className="flex w-full flex-col min-w-40 flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Email or Phone Number</p>
                <div className="relative flex items-center">
                  <span className="material-symbols-outlined absolute left-4 text-subtle-light dark:text-subtle-dark">mail</span>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white dark:bg-gray-800 focus:border-primary h-14 placeholder:text-subtle-light dark:placeholder:text-subtle-dark pl-12 pr-4 py-[15px] text-base font-normal leading-normal"
                    placeholder="Enter your email or phone"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div className="flex py-3">
              <button className="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
                <span className="truncate">Send Reset Code</span>
              </button>
            </div>
          </form>
        </div>
        <div className="w-full pb-4">
          <div className="flex items-center justify-center py-4">
            <a className="text-primary text-base font-medium leading-normal hover:underline" href="#">Back to Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
