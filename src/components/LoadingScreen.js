import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ isLoading = true }) => {
  // Animation state for the loading screen
  const [opacity, setOpacity] = useState(0);
  
  useEffect(() => {
    // Fade in animation when component mounts
    setOpacity(1);
    
    // Fade out animation when isLoading becomes false
    if (!isLoading) {
      setOpacity(0);
    }
  }, [isLoading]);
  
  return (
    <div 
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
      style={{ 
        transition: 'opacity 0.5s ease-in-out',
        opacity: opacity
      }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary blur-[100px] opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary-dark blur-[120px] opacity-10"></div>
        
        {/* Animated stars/sparkles */}
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.8s" }}></div>
      </div>
      
      {/* Main logo with loading spinner */}
      <div className="relative z-10">
        {/* Loading spinner surrounding the logo */}
        <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
          {/* Spinning loader ring */}
          <div className="absolute inset-0 rounded-full border-4 border-secondary/20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-secondary animate-spin"></div>
          
          {/* Logo */}
          <img 
            src="/recharge_logo.png" 
            alt="Recharge Logo" 
            className="h-40 md:h-48 w-auto animate-pulse-slow"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 