import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useLanguageStore from '../../store/useLanguageStore';
import useThemeStore from '../../store/useThemeStore';
import logo from '../../assets/logo.png'; // Ensure you have a logo image at this path
// import BrainLogo from '../ui/BrainLogo'; // Commented out as it wasn't used, but can be used for your actual logo component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const location = useLocation();
  // Ensure your useLanguageStore provides 't' (translation function)
  const { currentLanguage, setLanguage, t } = useLanguageStore(); 
  const { isDark, toggleTheme, initializeTheme } = useThemeStore();

  useEffect(() => {
    // Initialize theme on component mount
    initializeTheme();
  }, [initializeTheme]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  ];

  // Note: The 'Schemes' label is hardcoded, consider wrapping it in t() if translated.
  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/schemes', label: 'Schemes' }, 
    { path: '/roi-calculator', label: t('nav.roi') },
    { path: '/hardware', label: t('nav.hardware') },
    { path: '/success-map', label: t('nav.map') },
    { path: '/solution', label: t('nav.solution') },
    { path: '/mobile-app', label: t('nav.app') },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setShowLanguages(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* FIXED Logo Section 🚀 
            - Added descriptive 'alt' text.
            - Added 'w-8 h-8' for image sizing.
            - Included 'RKD IntelliTech' text for clear branding.
          */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 md:space-x-3 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150"
          >
            <img 
              // IMPORTANT: Replace this placeholder URL with your actual logo image URL
              src={logo} 
              alt="RKD IntelliTech Company Logo" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              RKD IntelliTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
              </button>
              
              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${
                          currentLanguage === lang.code ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              to="/login"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button and tools */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="text-gray-700 dark:text-gray-300"
                aria-label="Select language"
              >
                {/* Use Globe icon if flag isn't clear enough on small screens */}
                <Globe className="w-5 h-5" /> 
              </button>
              
              <AnimatePresence>
                {showLanguages && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 ${
                          currentLanguage === lang.code ? 'bg-primary-50 dark:bg-primary-900 text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Open/Close Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 p-1"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md ${
                      isActive(item.path)
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors duration-200 text-center mt-2"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;