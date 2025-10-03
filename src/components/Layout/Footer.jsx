import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  BookOpen,
} from "lucide-react";
import useLanguageStore from "../../store/useLanguageStore";

const Footer = () => {
  const { t } = useLanguageStore();
  const location = useLocation();

  // Determine if we're in farming context
  const isFarmingContext = location.pathname.includes('/projects/farming') || 
                          location.pathname.includes('/schemes') ||
                          location.pathname.includes('/roi-calculator') ||
                          location.pathname.includes('/hardware') ||
                          location.pathname.includes('/success-map') ||
                          location.pathname.includes('/solution') ||
                          location.pathname.includes('/mobile-app') ||
                          location.pathname.includes('/login');

  const mainQuickLinks = [
    { path: '/', label: 'Home' },
    { path: '/#services', label: 'Services' },
    { path: '/#team', label: 'Team' },
    { path: '/ongoing', label: 'Ongoing' },
    { path: '/contact', label: 'Contact' },
  ];

  const farmingQuickLinks = [
    { path: '/projects/farming', label: 'Home' },
    { path: '/schemes', label: 'Schemes' },
    { path: '/roi-calculator', label: 'ROI Calculator' },
    { path: '/hardware', label: 'Hardware' },
    { path: '/success-map', label: 'Success Map' },
  ];

  const quickLinks = isFarmingContext ? farmingQuickLinks : mainQuickLinks;

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white leading-none">
                RKD
              </div>
              <div className={`text-sm font-medium ${isFarmingContext ? 'text-green-400' : 'text-blue-400'} leading-none mt-1`}>
                {isFarmingContext ? "Farming" : "IntelliTech"}
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              {isFarmingContext 
                ? "Revolutionizing agriculture in India with IoT-powered smart farming solutions."
                : "Advanced technology solutions in IoT, VLSI, AI, Defense Systems, and Robotics. Transforming innovative ideas into scalable reality."
              }
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors duration-200" />
              <Twitter className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors duration-200" />
              <Instagram className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors duration-200" />
              <Linkedin className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 cursor-pointer transition-colors duration-200" />
              <a 
                href="https://niharikajgupta.medium.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
              >
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="block text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-gray-100 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="#" className="block hover:text-white">
                Help Center
              </a>
              <a href="#" className="block hover:text-white">
                Training
              </a>
              <a href="#" className="block hover:text-white">
                Documentation
              </a>
              <a href="#" className="block hover:text-white">
                Community
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91 9480478469</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>solutions@rkdintellitech.in</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  Chunchungatta, Konankunte<br />
                  Bangalore - 560062<br />
                  Karnataka, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2025 RKD IntelliTech. All rights reserved.
            Delivering excellence through innovation and expertise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
