import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sun, Wifi, Battery, Droplets, Thermometer, Zap, CircleCheck as CheckCircle } from 'lucide-react';
import useLanguageStore from '../store/useLanguageStore';

const Hardware = () => {
  const { t } = useLanguageStore();

  const features = [
    {
      icon: <Sun className="w-8 h-8" />,
      title: t('hardware.features.solar'),
      description: "Self-powered with efficient solar panels, no electricity bills"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('hardware.features.waterproof'),
      description: "Completely weatherproof, works in monsoons and extreme heat"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: t('hardware.features.range'),
      description: "Long-range connectivity covers large farm areas seamlessly"
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: t('hardware.features.battery'),
      description: "Built-in backup battery ensures 24/7 monitoring"
    }
  ];

  const sensors = [
    {
      name: "Soil Moisture Sensor",
      icon: <Droplets className="w-6 h-6" />,
      description: "Multi-depth soil moisture monitoring with 95% accuracy"
    },
    {
      name: "Weather Station",
      icon: <Thermometer className="w-6 h-6" />,
      description: "Temperature, humidity, and rainfall measurement"
    },
    {
      name: "Pump Controller",
      icon: <Zap className="w-6 h-6" />,
      description: "Smart pump automation with remote control capability"
    }
  ];

  const specifications = [
    "Operating Temperature: -10°C to 60°C",
    "Humidity Range: 0-100% RH",
    "Data Transmission: 4G/WiFi/LoRaWAN",
    "Power Consumption: <5W",
    "Installation: Plug & Play",
    "Warranty: 3 Years"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Shield className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('hardware.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('hardware.subtitle')}
          </p>
        </motion.div>

        {/* Main Hardware Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* 3D Hardware Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="relative">
                {/* Stylized IoT Device */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white bg-opacity-20 rounded-xl p-8 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      {/* Main Device Body */}
                      <div className="w-32 h-20 bg-gray-800 rounded-lg shadow-2xl"></div>
                      
                      {/* Solar Panel */}
                      <div className="absolute -top-2 left-2 w-28 h-6 bg-blue-900 rounded grid grid-cols-4 gap-1 p-1">
                        <div className="bg-blue-700 rounded-sm"></div>
                        <div className="bg-blue-700 rounded-sm"></div>
                        <div className="bg-blue-700 rounded-sm"></div>
                        <div className="bg-blue-700 rounded-sm"></div>
                      </div>
                      
                      {/* Antenna */}
                      <div className="absolute -top-6 right-4 w-1 h-6 bg-gray-600"></div>
                      <div className="absolute -top-8 right-3 w-3 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      
                      {/* Sensor Probes */}
                      <div className="absolute bottom-0 left-4 w-1 h-8 bg-gray-600 transform translate-y-full"></div>
                      <div className="absolute bottom-0 right-4 w-1 h-8 bg-gray-600 transform translate-y-full"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">RKD IntelliTech IoT Hub</h3>
                    <p className="text-primary-100">All-in-one smart farming solution</p>
                  </div>
                </motion.div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
                >
                  <Sun className="w-8 h-8 text-yellow-800" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center"
                >
                  <Droplets className="w-6 h-6 text-blue-800" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary-600 dark:text-primary-400">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sensor Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16 transition-colors duration-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Integrated Sensor Suite
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sensors.map((sensor, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 dark:border-gray-600 rounded-xl hover:border-primary-300 dark:hover:border-primary-500 transition-colors duration-200">
                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">{sensor.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{sensor.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{sensor.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Specs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Specifications</h3>
            <div className="space-y-3">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Installation Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-primary-600 text-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Installation Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Quick Setup</h4>
                  <p className="text-primary-100 text-sm">Professional installation completed in under 2 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Zero Maintenance</h4>
                  <p className="text-primary-100 text-sm">Self-cleaning sensors with automatic calibration</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-primary-100 text-sm">Remote monitoring and troubleshooting support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Farm?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Get started with a free consultation and custom farm analysis
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Schedule Farm Visit
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hardware;