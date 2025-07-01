import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Enquire', path: '/enquire' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="text-2xl transform transition-all duration-300 group-hover:scale-110">
              <img src="src/asset/images/logo text.png" alt="" style={{ width: '130px', height: 'auto' }} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isActive(item.path)
                    ? 'text-blue-800 bg-blue-50 shadow-md'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50 hover:shadow-md'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none focus:text-blue-800 transition-all duration-300 transform hover:scale-110"
            >
              <svg className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                  isActive(item.path)
                    ? 'text-blue-800 bg-blue-50 shadow-md'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50 hover:shadow-md'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease-in-out ${index * 0.1}s`
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
