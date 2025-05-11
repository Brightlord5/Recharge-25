import React from 'react';

const Fixtures = () => {
  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-hidden">
      {/* Fun background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-secondary blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-secondary-dark blur-[120px]"></div>
        
        {/* Animated stars/sparkles */}
        <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.7s" }}></div>
        <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "1.2s" }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-28 pb-24 px-4 sm:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-text-gradient animate-pulse-slow">FIXTURES</span>
          <span className="ml-3 inline-block animate-bounce-slow">🏆</span>
        </h1>
        
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-background to-surface p-0.5 transform hover:scale-105 transition-transform duration-500">
          <div className="relative bg-surface/50 backdrop-blur-sm rounded-[10px] p-10 md:p-16 text-center">
            <div className="inline-block rounded-full px-6 py-2 bg-secondary text-text-primary font-bold tracking-wide mb-6 rotate-2 animate-pulse-slow shadow-neon">
              COMING SOON! 🎮
            </div>
            
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              The fixtures for Recharge 2025 will be published here once all registrations are complete.
            </p>
            
            <div className="rounded-xl bg-background/50 p-6 md:p-8 my-12 inline-block max-w-lg w-full transform hover:rotate-1 transition-transform duration-300 hover:shadow-neon">
              <h3 className="font-mono tracking-widest text-secondary text-xl mb-4 animate-pulse-slow">
                EVENT SCHEDULE 📅
              </h3>
              <div className="space-y-6 mt-6">
                <div className="relative pl-10 text-left group hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-secondary/20 text-secondary text-xs font-bold group-hover:animate-spin-slow">17</div>
                  <p className="font-bold text-text-primary">May 17: Kick-off Ceremony 🎮</p>
                  <p className="text-text-secondary text-sm">First day of competitions</p>
                </div>
                
                <div className="relative pl-10 text-left group hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-secondary/20 text-secondary text-xs font-bold group-hover:animate-spin-slow">18</div>
                  <p className="font-bold text-text-primary">May 18: Main Tournaments 🎯</p>
                  <p className="text-text-secondary text-sm">Continuing competitions</p>
                </div>
                
                <div className="relative pl-10 text-left group hover:transform hover:translate-x-2 transition-transform duration-300">
                  <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-secondary/20 text-secondary text-xs font-bold group-hover:animate-spin-slow">19</div>
                  <p className="font-bold text-text-primary">May 19: Finals & Awards 🏆</p>
                  <p className="text-text-secondary text-sm">Finals and award ceremony</p>
                </div>
              </div>
            </div>
            
            <div className="w-20 h-20 mx-auto my-8 animate-float">
              <svg className="animate-spin-slow text-secondary opacity-75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="relative inline-block">
              <p className="text-text-secondary font-medium">
                Check back after May 17, 2025, for a complete schedule of all matches.
              </p>
              <span className="absolute -right-8 -top-1 text-lg animate-bounce-slow">👀</span>
            </div>
          </div>
        </div>
        
        {/* Developer Credit */}
        <div className="text-center mt-16 pt-4 border-t border-surface-light">
          <p className="text-sm font-medium text-text-secondary mb-2">Hosted by Hostel Representatives, Student Council BPDC</p>
          <p className="text-sm text-secondary/80">
            Developed by <a href="https://www.linkedin.com/in/anas-shaik/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">Shaik Anas</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fixtures; 