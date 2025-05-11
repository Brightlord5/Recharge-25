import React from 'react';

const Header = ({ isMobile }) => {
  return (
    <header className={`fixed top-0 right-0 z-50 h-20 flex items-center justify-between px-4 md:px-8 ${isMobile ? 'left-0' : 'left-64'} transition-all duration-300 bg-background/80 backdrop-blur-md shadow-sm border-b border-secondary/10`}>
      <div className="flex items-center space-x-4">
        <img 
          src="/student_council.png" 
          alt="Student Council Logo" 
          className="h-12 md:h-14 w-auto"
        />
      </div>
      
      <div>
        <img 
          src="/recharge_logo.png" 
          alt="Recharge Logo" 
          className="h-12 md:h-14 w-auto"
        />
      </div>
    </header>
  );
};

export default Header; 