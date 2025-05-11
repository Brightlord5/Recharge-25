import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(true);
      else setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        className="lg:hidden fixed top-6 left-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-secondary/30 text-secondary"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-40 bg-gradient-to-b from-background to-surface w-64 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } backdrop-blur-sm bg-opacity-80 border-r border-secondary/20`}
      >
        <div className="p-6 flex justify-center">
          <img 
            src="/bits%20logo.png" 
            alt="BITS Pilani Logo" 
            className="w-28 h-auto"
          />
        </div>
        
        <div className="mt-6 mx-4 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        
        <nav className="mt-8">
          <ul className="space-y-1 px-2">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block py-3 px-4 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-secondary/20 to-background text-secondary' 
                      : 'hover:bg-surface-light text-text-secondary hover:text-text-primary'
                  }`
                }
                onClick={() => isMobile && setIsOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Home</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/registration" 
                className={({ isActive }) => 
                  `block py-3 px-4 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-secondary/20 to-background text-secondary' 
                      : 'hover:bg-surface-light text-text-secondary hover:text-text-primary'
                  }`
                }
                onClick={() => isMobile && setIsOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>Registration</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/fixtures" 
                className={({ isActive }) => 
                  `block py-3 px-4 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-secondary/20 to-background text-secondary' 
                      : 'hover:bg-surface-light text-text-secondary hover:text-text-primary'
                  }`
                }
                onClick={() => isMobile && setIsOpen(false)}
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span>Fixtures</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Overlay when sidebar is open on mobile */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-30 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar; 