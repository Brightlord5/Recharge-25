import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Fixtures from './pages/Fixtures';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loading, setLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  // Handle resize effect
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Loading screen effect with delay and smooth transition
  useEffect(() => {
    // First start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    // Then completely remove the component after fade out animation (0.5s)
    const removeTimer = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showLoadingScreen && <LoadingScreen isLoading={loading} />}
      
      <div className={`transition-opacity duration-500 ${showLoadingScreen ? 'opacity-0' : 'opacity-100'}`}>
        <Router>
          <div className="flex min-h-screen bg-background">
            <Sidebar />
            <div className={`flex-1 transition-all duration-300 ${isMobile ? 'ml-0' : 'ml-64'}`}>
              <Header isMobile={isMobile} />
              <main className="relative">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/fixtures" element={<Fixtures />} />
                </Routes>
              </main>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App; 