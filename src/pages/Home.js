import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-hidden">
      {/* Background subtle pattern for depth */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary-dark blur-[120px]"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-28 pb-24 px-4 sm:px-8">
        {/* Hero section */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 py-20">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-text-gradient animate-pulse-slow">RECHARGE</span>
            <span className="text-text-primary"> 2025</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-text-secondary">
            The ultimate sports festival for hostel students of BITS Pilani Dubai Campus
          </p>
          
          <div className="font-mono tracking-widest text-secondary text-xl md:text-2xl">
            MAY 17-19, 2025
          </div>
          
          <div className="flex space-x-4 pt-6">
            <Link 
              to="/registration" 
              className="bg-secondary hover:bg-secondary-light px-8 py-4 rounded-full text-text-primary font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              REGISTER NOW
            </Link>
            <Link 
              to="/fixtures" 
              className="bg-transparent border border-secondary hover:bg-secondary/10 px-8 py-4 rounded-full text-secondary font-bold text-lg transition-all duration-300"
            >
              FIXTURES
            </Link>
          </div>
        </div>
        
        {/* About section */}
        <div className="my-24 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="bg-clip-text text-transparent bg-hero-gradient">ABOUT RECHARGE</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-hero-gradient"></div>
          </h2>
          
          <div className="space-y-6 text-center">
            <p className="text-xl text-text-secondary italic">
              "Recharge is not just a sports event; it's a celebration of friendship, competition, and the vibrant hostel life at BITS Pilani Dubai Campus."
            </p>
            <p className="text-text-secondary leading-relaxed">
              Recharge brings together students from all hostels for friendly competition, camaraderie, and unforgettable experiences. This website is your one-stop destination for all information regarding Recharge 2025.
            </p>
          </div>
        </div>
        
        {/* Important dates */}
        <div className="my-24 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="bg-clip-text text-transparent bg-hero-gradient">EVENT SCHEDULE</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-hero-gradient"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="group relative p-6 rounded-lg bg-gradient-to-br from-background to-surface hover:shadow-inner-glow transition-all duration-500">
              <div className="absolute -top-10 left-0 text-4xl font-bold opacity-20 group-hover:opacity-60 transition-opacity duration-300">01</div>
              <h3 className="text-secondary text-2xl font-bold mb-2">Kick-off</h3>
              <p className="text-text-secondary mb-2">May 17, 2025</p>
              <p className="text-text-secondary text-sm">Opening ceremony and first day of competitions.</p>
            </div>
            
            <div className="group relative p-6 rounded-lg bg-gradient-to-br from-background to-surface hover:shadow-inner-glow transition-all duration-500">
              <div className="absolute -top-10 left-0 text-4xl font-bold opacity-20 group-hover:opacity-60 transition-opacity duration-300">02</div>
              <h3 className="text-secondary text-2xl font-bold mb-2">Award Ceremony</h3>
              <p className="text-text-secondary mb-2">May 19, 2025</p>
              <p className="text-text-secondary text-sm">Finals, closing ceremony and prize distribution.</p>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="relative overflow-hidden mt-24 rounded-xl bg-gradient-to-r from-secondary-dark to-secondary p-2">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzAgMEMxMy40MzEgMCAwIDEzLjQzMSAwIDMwYzAgMTYuNTY5IDEzLjQzMSAzMCAzMCAzMCAxNi41NjkgMCAzMC0xMy40MzEgMzAtMzBDNjAgMTMuNDMxIDQ2LjU2OSAwIDMwIDB6bTAgNDhjLTkuOTQxIDAtMTgtOC4wNTktMTgtMThoNmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyczEyLTUuMzczIDEyLTEyaDZjMCA5Ljk0MS04LjA1OSAxOC0xOCAxOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="relative bg-background rounded-lg px-6 py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Action?</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">Don't miss out on the biggest hostel event of the year! Register now to participate in your favorite sports events.</p>
            <Link 
              to="/registration" 
              className="inline-block bg-secondary hover:bg-secondary-light px-8 py-4 rounded-full text-text-primary font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 