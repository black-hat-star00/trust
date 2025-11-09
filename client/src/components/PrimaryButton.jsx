import React from 'react';

const PrimaryButton = ({ children, icon, onClick, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="group relative flex w-full items-center justify-center rounded-lg bg-primary h-12 px-6 text-base font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark overflow-hidden"
    >
      <span className="absolute left-0 w-full h-full bg-white opacity-0 transition-opacity group-hover:opacity-10"></span>
      {icon && <span className="material-symbols-outlined mr-2">{icon}</span>}
      <span className="relative">{children}</span>
    </button>
  );
};

export default PrimaryButton;
