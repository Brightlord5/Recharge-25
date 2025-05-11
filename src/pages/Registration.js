import React, { useState } from 'react';

const Registration = () => {
  // Real registration links for sports events
  const sportsEvents = [
    { name: "Throwball", link: "https://forms.gle/y1ca6XxySpZJNM6f6", emoji: "🏐" },
    { name: "Super 6's Boys", link: "https://forms.gle/LtfFMFv2Kqc8vjTr7", emoji: "🏏" },
    { name: "Super 6's Girls", link: "https://forms.gle/gEmZuwZJasG5V6X39", emoji: "🏏" },
    { name: "Galli Cricket Girls", link: "https://forms.gle/LZUMr6c8WfRceAL19", emoji: "🏏" },
    { name: "Galli Cricket Boys", link: "https://forms.gle/PLC5qbvcbxqwrupm6", emoji: "🏏" },
    { name: "Volleyball", link: "https://forms.gle/9VaMraHqNbxAVMb88", emoji: "🏐" },
    { name: "Football", link: "https://forms.gle/NXKnfmCu567VJuN88", emoji: "⚽" },
    { name: "Dodge Ball Boys", link: "https://forms.gle/M9H8xusBfWofX3KJ7", emoji: "🔴" },
    { name: "Dodge Ball Girls", link: "https://forms.gle/iLWg3K6ZEiDjqfmb7", emoji: "🔴" },
    { name: "Handball Boys", link: "https://forms.gle/AuFbCUDivEtA4T8e9", emoji: "🤾" },
    { name: "Handball Girls", link: "https://forms.gle/z54qtmkpMcGgw2VP6", emoji: "🤾‍♀️" },
    { name: "Kabaddi Boys", link: "https://forms.gle/kV6xribgXNeKBk8f9", emoji: "🤼" },
    { name: "Kabaddi Girls", link: "https://forms.gle/EM2orfwTmpyoRavE9", emoji: "🤼‍♀️" },
    { name: "Kho Kho Boys", link: "https://forms.gle/9mHJX6tMnddCafTk7", emoji: "🏃" },
    { name: "Kho Kho Girls", link: "https://forms.gle/bRDZFY4snR2p3Apw5", emoji: "🏃‍♀️" },
    { name: "Pittu Boys", link: "https://forms.gle/CfWdeZrU5ctRjrKD7", emoji: "🎯" },
    { name: "Pittu Girls", link: "https://forms.gle/cTNrr7xibfVjhcdZ7", emoji: "🎯" },
    { name: "Footvolley", link: "https://forms.gle/ju8pg3nc3p2mgGgUA", emoji: "🦶" },
    { name: "Badminton", link: "https://forms.gle/NmhqKMkdVAqbBai96", emoji: "🏸" },
    { name: "Basketball", link: "https://forms.gle/DSuvDkmHqJQD1Vu17", emoji: "🏀" },
    { name: "Tennis", link: "https://forms.gle/mACq4payV2rPSPeJ8", emoji: "🎾" },
    { name: "Table Tennis", link: "https://forms.gle/4AAQXWXVxXH3EpdG7", emoji: "🏓" },
    { name: "Chess", link: "https://forms.gle/LmkDJ8tJJNSHDKK28", emoji: "♟️" },
    { name: "Pool", link: "https://forms.gle/v2eMmubcVpBvk9vs8", emoji: "🎱" },
  ];

  const [filter, setFilter] = useState('all'); // 'all', 'boys', 'girls'
  const [searchTerm, setSearchTerm] = useState('');
  const [animationPlaying, setAnimationPlaying] = useState(false);

  // Play a fun animation when searching
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setAnimationPlaying(true);
    setTimeout(() => setAnimationPlaying(false), 500);
  };

  // Filter sports based on filter and search term
  const filteredSports = sportsEvents.filter(sport => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'boys' && sport.name.toLowerCase().includes('boys')) ||
      (filter === 'girls' && sport.name.toLowerCase().includes('girls'));
    
    const matchesSearch = 
      sport.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-hidden">
      {/* Fun background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-secondary-dark blur-[120px]"></div>
        
        {/* Animated stars/sparkles */}
        <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: "1.1s" }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto pt-28 pb-24 px-4 sm:px-8">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-12 text-center">
          <span className="bg-clip-text text-transparent bg-text-gradient animate-pulse-slow">REGISTRATION</span>
          <span className="ml-2 inline-block animate-wiggle">🎮</span>
        </h1>
        
        {/* Rulebook Button */}
        <div className="mb-16 flex justify-center">
          <a 
            href="https://shorturl.at/7CflN" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative overflow-hidden bg-gradient-to-r from-secondary-dark to-secondary text-text-primary font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-1 hover:shadow-neon flex items-center"
          >
            <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzAgMEMxMy40MzEgMCAwIDEzLjQzMSAwIDMwYzAgMTYuNTY5IDEzLjQzMSAzMCAzMCAzMCAxNi41NjkgMCAzMC0xMy40MzEgMzAtMzBDNjAgMTMuNDMxIDQ2LjU2OSAwIDMwIDB6bTAgNDhjLTkuOTQxIDAtMTgtOC4wNTktMTgtMThoNmMwIDYuNjI3IDUuMzczIDEyIDEyIDEyczEyLTUuMzczIDEyLTEyaDZjMCA5Ljk0MS04LjA1OSAxOC0xOCAxOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 group-hover:animate-wiggle" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="relative">VIEW RULEBOOK! 📖</span>
          </a>
        </div>
        
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-background to-surface p-0.5 mb-16 transform hover:scale-105 transition-transform duration-500">
          <div className="relative bg-surface/50 backdrop-blur-sm rounded-[10px] p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 relative">
              <span className="bg-clip-text text-transparent bg-hero-gradient">Sports Event Registration</span>
              {/* Decorative elements */}
              <span className="absolute -top-6 -left-2 text-2xl animate-bounce-slow hidden md:inline-block">🏀</span>
              <span className="absolute -top-4 -right-2 text-2xl animate-float hidden md:inline-block">⚽</span>
            </h2>
            <p className="text-text-secondary mb-10 text-center max-w-2xl mx-auto">
              Register for your favorite sports events by clicking on the registration buttons below.
              Make sure to submit your details before the registration deadline!
            </p>

            <div className={`bg-background/40 backdrop-blur-sm rounded-lg p-6 mb-10 ${animationPlaying ? 'animate-wiggle' : ''}`}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label htmlFor="search" className="block text-sm font-medium text-text-secondary mb-2">Search Sports</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      className="w-full p-3 pl-10 border-0 bg-surface rounded-lg focus:ring-2 focus:ring-secondary text-text-primary"
                      placeholder="Type to search..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className={`h-5 w-5 text-text-secondary ${searchTerm ? 'text-secondary animate-pulse-slow' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:w-48">
                  <label htmlFor="filter" className="block text-sm font-medium text-text-secondary mb-2">Filter By</label>
                  <select
                    id="filter"
                    className="w-full p-3 border-0 bg-surface rounded-lg focus:ring-2 focus:ring-secondary text-text-primary"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">All Sports</option>
                    <option value="boys">Boys Events</option>
                    <option value="girls">Girls Events</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredSports.map((sport, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-surface p-0.5 transition-transform duration-300 hover:scale-110 hover:rotate-1 hover:shadow-neon"
                >
                  <div className="bg-surface/50 backdrop-blur-sm rounded-[10px] p-5 h-full flex flex-col">
                    <h3 className="text-lg font-bold text-text-primary mb-4 text-center flex-grow flex items-center justify-center gap-2">
                      <span>{sport.name}</span> 
                      <span className="inline-block group-hover:animate-bounce-slow">{sport.emoji}</span>
                    </h3>
                    <a 
                      href={sport.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-secondary hover:bg-secondary-light text-text-primary py-2 px-4 rounded-lg transition-colors duration-200 w-full text-center font-medium transform group-hover:animate-pulse-slow"
                    >
                      Register Now!
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredSports.length === 0 && (
              <div className="text-center py-16 text-text-secondary">
                <svg className="w-12 h-12 mx-auto mb-4 text-surface-light animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xl">No sports found matching your search criteria.</p>
                <p className="mt-2 animate-pulse-slow">Try a different search term!</p>
              </div>
            )}
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

export default Registration; 