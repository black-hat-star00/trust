import React, { useState } from 'react';

const InteractiveCard = ({ summary, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`card-summary bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-md transition-all duration-300 ease-in-out ${isExpanded ? 'z-20 scale-105' : 'z-10'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {summary}
      </div>
      <div
        className={`card-details bg-white dark:bg-gray-800 rounded-b-xl shadow-lg transition-all duration-300 ease-in-out absolute w-full top-full left-0 ${isExpanded ? 'opacity-100 translate-y-2' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="p-4 pt-6">
          {details}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
