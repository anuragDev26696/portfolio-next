import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Helper function to simulate document.execCommand('copy') which works in iframes
// as navigator.clipboard.writeText() might not be available.
interface CopyToClipboard {
  (text: string): void;
}

const copyToClipboard: CopyToClipboard = (text: string): void => {
  const textArea: HTMLTextAreaElement = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Could not copy text: ', err);
  }
  document.body.removeChild(textArea);
};

// Ellipsis vertical icon (for the dropdown)
const MoreVerticalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

// Sun icon (for light mode)
const SunIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
  </svg>
);

// Moon icon (for dark mode)
const MoonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

// The main App component
const App = () => {
  // State for managing dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State for managing dark/light theme
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'dark'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  // Effect to apply theme class to the document body and save to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (isDropdownOpen && (!target || !target.closest('.relative'))) { // Assuming the dropdown is inside a relative parent
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
      <style>{`
        html {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      <nav className="p-4 md:p-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-2xl font-bold rounded-full bg-gray-200 dark:bg-gray-800 px-4 py-2">solo</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#about" className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">About</a>
          <a href="#blog" className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">Blog</a>
          <a href="#projects" className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">Projects</a>
          <a href="#resume" className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">Resume</a>
          
          {/* Dropdown Menu for Desktop */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center focus:outline-none"
              aria-label="More options"
            >
              <MoreVerticalIcon className="h-5 w-5" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-10">
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://threads.net/@yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
                >
                  Threads
                </a>
                <a
                  href="https://dribbble.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
                >
                  Dribbble
                </a>
                <a
                  href="https://www.behance.net/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
                >
                  Behance
                </a>
                <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                <button
                  onClick={toggleTheme}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 flex items-center justify-between transition-colors duration-200"
                >
                  {theme === 'dark' ? (
                    <>
                      Dark Mode <MoonIcon className="h-5 w-5 ml-2" />
                    </>
                  ) : (
                    <>
                      Light Mode <SunIcon className="h-5 w-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown (Hamburger Menu - hidden in desktop) */}
        <div className="md:hidden relative">
          <button
            onClick={toggleDropdown}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <MoreVerticalIcon className="h-6 w-6" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-10">
              <a
                href="#about"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                About
              </a>
              <a
                href="#blog"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Blog
              </a>
              <a
                href="#projects"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Projects
              </a>
              <a
                href="#resume"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(false)}
              >
                Resume
              </a>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <a
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://threads.net/@yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
              >
                Threads
              </a>
              <a
                href="https://dribbble.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
              >
                Dribbble
              </a>
              <a
                href="https://www.behance.net/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
              >
                Behance
              </a>
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              <button
                onClick={toggleTheme}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md mx-2 flex items-center justify-between transition-colors duration-200"
              >
                {theme === 'dark' ? (
                  <>
                    Dark Mode <MoonIcon className="h-5 w-5 ml-2" />
                  </>
                ) : (
                  <>
                    Light Mode <SunIcon className="h-5 w-5 ml-2" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center md:justify-start">
        {/* Profile Image */}
        <div className="mb-8 md:mb-0 md:mr-12 flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Solo's profile" width={160} height={160}
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Hi I&apos;m Solo, <br className="hidden md:block" /> Product Designer and Developer
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-8">
            I am a freelance developer and designer remotely working globally. From 2020, I have
            been living in Thailand. I make <span className="font-semibold text-gray-900 dark:text-gray-100">useful applications</span> for the web. In my spare times, I enjoy
            cooking, reading comics and travelling.
          </p>

          {/* Get in Touch Button */}
          <button
            onClick={() => copyToClipboard('solo@example.com')} // Example: copy email to clipboard
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center mx-auto md:mx-0"
          >
            Get in touch{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8l4 4-4 4" />
              <path d="M8 12h8" />
            </svg>
          </button>
        </div>
      </main>

      {/* A simple footer or additional sections could go here if needed */}
    </div>
  );
};

export default App;