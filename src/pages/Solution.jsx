import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, Smartphone, ChartBar as BarChart3, ArrowRight } from 'lucide-react';
import useLanguageStore from '../store/useLanguageStore';

const Solution = () => {
  const { t } = useLanguageStore();

  const steps = [
    {
      id: 1,
      title: 'SENSE',
      subtitle: 'Data Collection',
      icon: <Zap className="w-12 h-12" />,
      description: 'IoT sensors continuously monitor soil moisture, weather conditions, and crop health',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'ANALYZE',
      subtitle: 'AI Processing',
      icon: <Brain className="w-12 h-12" />,
      description: 'Advanced AI algorithms analyze data to predict optimal irrigation and farming decisions',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'ALERT',
      subtitle: 'Real-time Notifications',
      icon: <Smartphone className="w-12 h-12" />,
      description: 'Instant alerts sent to your mobile phone in your preferred language',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'ACT',
      subtitle: 'Automated Control',
      icon: <BarChart3 className="w-12 h-12" />,
      description: 'Smart irrigation systems automatically water crops at the perfect time',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const benefits = [
    'Save 40% on water costs',
    'Increase crop yield by 30%',
    'Reduce manual labor',
    'Prevent crop damage',
    'Optimize fertilizer usage',
    'Real-time farm monitoring'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Brain className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How AgriTech Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A simple, intelligent approach to modern farming that puts technology to work for India's farmers
          </p>
        </motion.div>

        {/* Solution Flow */}
        <div className="relative mb-20">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 dark:from-blue-600 via-purple-300 dark:via-purple-600 via-green-300 dark:via-green-600 to-orange-300 dark:to-orange-600 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-gray-200 dark:border-gray-600 flex items-center justify-center text-sm font-bold text-gray-700 dark:text-gray-300 z-20">
                  {step.id}
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-4">{step.subtitle}</div>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>

                {/* Arrow (visible on mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16 transition-colors duration-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Complete Farm Automation Workflow
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Morning Data Collection</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Sensors collect overnight soil moisture and weather data</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">AI Analysis</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Machine learning algorithms predict optimal irrigation timing</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-green-600 dark:bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Smart Notifications</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Receive alerts in regional languages, Hindi, or English on your phone</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-orange-600 dark:bg-orange-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Automatic Irrigation</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Pumps activate automatically or with one-tap manual control</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 mx-auto relative"
              >
                <div className="absolute inset-0 border-4 border-dashed border-gray-300 dark:border-gray-600 rounded-full"></div>
                
                {/* Center Hub */}
                <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>

                {/* Orbiting Elements */}
                {steps.map((step, index) => {
                  const angle = (index * 90) * (Math.PI / 180);
                  const radius = 100;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={step.id}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center"
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`
                      }}
                    >
                      <div className="w-6 h-6 text-primary-600 dark:text-primary-400">
                        {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Farmers Choose AgriTech</h2>
            <p className="text-primary-100 text-lg">
              Real benefits that impact your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white bg-opacity-10 rounded-lg p-4"
              >
                <div className="w-2 h-2 bg-primary-200 rounded-full"></div>
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Modernize Your Farm?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of successful farmers across India
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
              Schedule Farm Visit
            </button>
            <button className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors duration-200">
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;