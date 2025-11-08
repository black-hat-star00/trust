import React, { useState } from 'react';

const CreateNewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ password, confirmPassword });
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-gray-200">
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="flex size-12 shrink-0 items-center justify-center">
          <span className="material-symbols-outlined text-charcoal dark:text-gray-200">arrow_back</span>
        </div>
        <h2 className="text-charcoal dark:text-gray-200 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Create New Password</h2>
        <div className="size-12 shrink-0"></div>
      </div>
      <main className="flex-grow px-4">
        <div className="flex flex-col items-center pt-6 pb-4 text-center">
          <div className="flex items-center justify-center size-16 bg-primary/20 rounded-full mb-4">
            <span className="material-symbols-outlined text-primary text-4xl leading-none">lock_reset</span>
          </div>
          <p className="text-charcoal dark:text-gray-300 text-base font-normal leading-normal max-w-sm">Your new password must be different from previous passwords and meet the requirements below.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex max-w-[480px] mx-auto flex-wrap items-end gap-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-charcoal dark:text-gray-300 text-base font-medium leading-normal pb-2">New Password</p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                  placeholder="Enter new password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-gray-500 dark:text-gray-400 flex border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                  <span className="material-symbols-outlined cursor-pointer">visibility_off</span>
                </div>
              </div>
            </label>
          </div>
          <div className="flex max-w-[480px] mx-auto flex-wrap items-end gap-4 pt-1 pb-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-charcoal dark:text-gray-300 text-base font-medium leading-normal pb-2">Confirm New Password</p>
              <div className="flex w-full flex-1 items-stretch rounded-lg">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-charcoal dark:text-gray-200 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-success dark:border-success bg-white dark:bg-gray-800 focus:border-primary dark:focus:border-primary h-14 placeholder:text-gray-500 dark:placeholder:text-gray-400 p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                  placeholder="Confirm new password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="text-gray-500 dark:text-gray-400 flex border border-success dark:border-success bg-white dark:bg-gray-800 items-center justify-center pr-[15px] rounded-r-lg border-l-0">
                  <span className="material-symbols-outlined cursor-pointer">visibility_off</span>
                </div>
              </div>
              <div className="flex items-center pt-2">
                <span className="material-symbols-outlined text-success text-base mr-1">check_circle</span>
                <p className="text-success text-sm">Passwords match.</p>
              </div>
            </label>
          </div>
          <div className="max-w-[480px] mx-auto pt-4 pb-2">
            <h3 className="text-charcoal dark:text-gray-200 text-base font-bold leading-tight tracking-[-0.015em] pb-3">Password Requirements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex items-center text-sm text-success">
                <span className="material-symbols-outlined text-base mr-2">check_circle</span>
                <span>Minimum 8 characters</span>
              </div>
              <div className="flex items-center text-sm text-success">
                <span className="material-symbols-outlined text-base mr-2">check_circle</span>
                <span>One uppercase letter</span>
              </div>
              <div className="flex items-center text-sm text-success">
                <span className="material-symbols-outlined text-base mr-2">check_circle</span>
                <span>One lowercase letter</span>
              </div>
              <div className="flex items-center text-sm text-success">
                <span className="material-symbols-outlined text-base mr-2">check_circle</span>
                <span>One number</span>
              </div>
              <div className="flex items-center text-sm text-success">
                <span className="material-symbols-outlined text-base mr-2">check_circle</span>
                <span>One special character</span>
              </div>
            </div>
          </div>
          <div className="p-4 pt-8 pb-6 bg-background-light dark:bg-background-dark sticky bottom-0">
            <button className="w-full max-w-[480px] mx-auto flex items-center justify-center h-14 px-6 bg-primary text-white font-bold text-base rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30 transition-colors">
              Reset Password
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateNewPassword;
