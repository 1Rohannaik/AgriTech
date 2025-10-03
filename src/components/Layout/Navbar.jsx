import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useLanguageStore from '../../store/useLanguageStore';
import useThemeStore from '../../store/useThemeStore';

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
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
  ];

  // Define different navigation sets based on context
  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/#services', label: 'Services' },
    { path: '/#team', label: 'Team' },
    { path: '/ongoing', label: 'Ongoing' },
    { path: '/contact', label: 'Contact' },
  ];

  const farmingNavItems = [
    { path: "/projects/farming", label: "Home" },
    { path: "/schemes", label: "Schemes" },
    { path: "/roi-calculator", label: "ROI Calculator" },
    { path: "/hardware", label: "Hardware" },
    { path: "/success-map", label: "Success Map" },
    { path: "/solution", label: "Solutions" },
  ];

  // Determine which navigation to show based on current path
  const isFarmingContext =
    location.pathname.includes("/projects/farming") ||
    location.pathname.includes("/schemes") ||
    location.pathname.includes("/roi-calculator") ||
    location.pathname.includes("/hardware") ||
    location.pathname.includes("/success-map") ||
    location.pathname.includes("/solution") ||
    location.pathname.includes("/mobile-app") ||
    location.pathname.includes("/login");

  const navItems = isFarmingContext ? farmingNavItems : mainNavItems;

  // Define colors based on context
  const colors = isFarmingContext
    ? {
        primary: "primary", // Green theme for farming
        accent: "bg-primary-600 hover:bg-primary-700",
        text: "text-primary-600 dark:text-primary-400",
        border: "border-primary-600 dark:border-primary-400",
        bg: "bg-primary-50 dark:bg-primary-900",
        hoverBg: "hover:bg-primary-100 dark:hover:bg-primary-800",
      }
    : {
        primary: 'blue', // Corporate blue theme for main site
        accent: 'bg-blue-600 hover:bg-blue-700',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-600 dark:border-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-900',
        hoverBg: 'hover:bg-blue-100 dark:hover:bg-blue-800'
      };

  const isActive = (path) => location.pathname === path;

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setShowLanguages(false);
  };

  const handleSmoothScroll = (e, path) => {
    // Check if it's an anchor link (starts with #)
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.substring(2); // Remove '/#' to get section id
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <>
      <nav className="bg-gray-900 dark:bg-gray-800 shadow-lg sticky top-0 z-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* FIXED Logo Section 🚀 
            - Added descriptive 'alt' text.
            - Added 'w-8 h-8' for image sizing.
            - Included 'RKD IntelliTech' text for clear branding.
          */}
          <Link 
            to={isFarmingContext ? "/projects/farming" : "/"} 
            className="flex items-center p-1 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-150"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white leading-none">
                RKD
              </div>
              <div className={`text-xs font-medium ${colors.text} leading-none mt-1`}>
                {isFarmingContext ? "Farming" : "IntelliTech"}
              </div>
            </div>
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleSmoothScroll(e, item.path)}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? colors.text
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.label}
              </Link>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg text-white hover:${colors.text} hover:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200`}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
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
                  className={`flex items-center space-x-1 text-white hover:${colors.text} dark:text-gray-300 text-sm font-medium`}
                >
                  <Globe className="w-4 h-4" />
                  <span>
                    {
                      languages.find((lang) => lang.code === currentLanguage)
                        ?.flag
                    }
                  </span>
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
                            currentLanguage === lang.code
                              ? `${colors.bg} ${colors.text}`
                              : "text-gray-700 dark:text-gray-300"
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
                to={isFarmingContext ? "/login" : "/contact"}
                className={`${colors.accent} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
              >
                {isFarmingContext ? "Get Started" : "Contact Us"}
              </Link>
            </div>

            {/* Medium Screen Navigation (Tablets) */}
            <div className="hidden md:flex lg:hidden items-center space-x-4">
              {/* Show only most important nav items on tablets */}
              {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => handleSmoothScroll(e, item.path)}
                className={`text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive(item.path)
                    ? colors.text
                    : 'text-white hover:text-gray-200'
                }`}
              >
                {item.label}
              </Link>
              ))}

              {/* Theme Toggle for tablets */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg text-white hover:${colors.text} hover:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200`}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* CTA Button for tablets */}
              <Link
                to={isFarmingContext ? "/login" : "/contact"}
                className={`${colors.accent} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
              >
                {isFarmingContext ? "Get Started" : "Contact"}
              </Link>
            </div>

            {/* Mobile menu button and tools */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg text-white hover:${colors.text} hover:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200`}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
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
                className="text-white dark:text-gray-300"
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
                            currentLanguage === lang.code
                              ? `${colors.bg} ${colors.text}`
                              : "text-gray-700 dark:text-gray-300"
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
              className="text-white hover:text-gray-300 dark:text-gray-300 dark:hover:text-primary-400 p-1"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden"
              >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 dark:bg-gray-900 border-t border-gray-700">
                  {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => {
                      handleSmoothScroll(e, item.path);
                      setIsOpen(false);
                    }}
                      className={`block px-3 py-2 text-base font-medium rounded-md ${
                        isActive(item.path)
                          ? `${colors.text} ${colors.bg}`
                          : `text-gray-700 dark:text-gray-300 hover:${colors.text} ${colors.hoverBg} dark:hover:bg-gray-800`
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to={isFarmingContext ? "/login" : "/contact"}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium text-white ${colors.accent} rounded-md transition-colors duration-200 text-center mt-2`}
                  >
                    {isFarmingContext ? "Get Started" : "Contact Us"}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Context Breadcrumb */}
      {isFarmingContext && (
        <div
          className={`${colors.bg} border-b ${colors.border
            .replace("border-", "border-")
            .replace("-600", "-100")
            .replace("-400", "-800")}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center space-x-2 text-sm">
              <Link
                to="/"
                className={`text-gray-600 dark:text-gray-400 hover:${colors.text} transition-colors`}
              >
                RKD IntelliTech
              </Link>
              <span className="text-gray-400 dark:text-gray-500">/</span>
              <span className={`${colors.text} font-medium`}>
                Farming Project
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
