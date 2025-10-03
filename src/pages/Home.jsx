import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Users, TrendingUp, Droplets, ChevronRight } from 'lucide-react';
import useLanguageStore from '../store/useLanguageStore';
import Chatbot from '../components/Chatbot';

const Home = () => {
  const { t } = useLanguageStore();

  const features = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Optimization",
      description: "Save up to 40% water with precision irrigation"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increased Yield", 
      description: "Boost crop production by 30% with data insights"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "24/7 agricultural expert guidance in multiple Indian languages"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg" 
            alt="India Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <Link
              to="/login"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">{t('hero.stats.farmers')}</div>
              <div className="text-gray-300">Happy Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">{t('hero.stats.saved')}</div>
              <div className="text-gray-300">Money Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400 mb-2">{t('hero.stats.water')}</div>
              <div className="text-gray-300">Water Conservation</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose RKD IntelliTech?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced IoT technology designed specifically for India's agricultural needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of Indian farmers who are already saving money and increasing yields
          </p>
            <Link
            to="/login"
            className="inline-flex items-center bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            Get Started Today
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
      
      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Home;
