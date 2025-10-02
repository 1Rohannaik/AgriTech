import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import useLanguageStore from '../../store/useLanguageStore';

const Footer = () => {
  const { t } = useLanguageStore();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-white">RKD iNTELLI-TECH</span>
            </div>
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              Revolutionizing agriculture in India with IoT-powered smart farming solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors duration-200" />
              <Twitter className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors duration-200" />
              <Instagram className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors duration-200" />
              <Linkedin className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200">
                {t('nav.home')}
              </Link>
              <Link to="/roi-calculator" className="block text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200">
                {t('nav.roi')}
              </Link>
              <Link to="/hardware" className="block text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200">
                {t('nav.hardware')}
              </Link>
              <Link to="/success-map" className="block text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200">
                {t('nav.map')}
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#" className="block hover:text-white">Help Center</a>
              <a href="#" className="block hover:text-white">Training</a>
              <a href="#" className="block hover:text-white">Documentation</a>
              <a href="#" className="block hover:text-white">Community</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>hello@RKD iNTELLI-TECH.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Ludhiana, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 RKD iNTELLI-TECH. All rights reserved. Built for India's farmers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;