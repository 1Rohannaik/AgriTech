import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, TrendingUp, Droplets, DollarSign } from 'lucide-react';
import useLanguageStore from '../store/useLanguageStore';
import { successStories } from '../data/mockData';

const SuccessMap = () => {
  const { t } = useLanguageStore();
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <MapPin className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success Stories Across India
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real farmers, real results. See how RKD iNTELLI-TECH is transforming agriculture across India
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8 transition-colors duration-200"
        >
          <div className="relative w-full h-96 bg-gradient-to-br from-green-100 dark:from-green-900 to-green-200 dark:to-green-800 rounded-xl overflow-hidden">
            {/* Simplified India Map Background */}
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <path
                  d="M50,50 L350,50 L350,80 L320,100 L350,120 L350,200 L300,250 L100,250 L50,200 Z"
                  fill="currentColor"
                  className="text-primary-300 dark:text-primary-600"
                />
              </svg>
            </div>

            {/* Success Story Markers */}
            {successStories.map((story, index) => (
              <motion.button
                key={story.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedStory(story)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white rounded-full p-3 shadow-lg hover:bg-primary-700 transition-colors duration-200"
                style={{
                  left: `${(story.coordinates[1] - 74) * 15 + 20}%`,
                  top: `${(31.5 - story.coordinates[0]) * 20 + 20}%`
                }}
              >
                <MapPin className="w-6 h-6" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {story.location}
                </div>
              </motion.button>
            ))}

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Legend</h3>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Success Story</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => setSelectedStory(story)}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-32 bg-gradient-to-br from-primary-400 to-primary-600 relative">
                <img
                  src={story.image}
                  alt={story.location}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white">
                  <div className="text-lg font-bold">{story.savings}</div>
                  <div className="text-sm">Annual Savings</div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{story.farmer}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{story.location}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{story.crop} • {story.improvement}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Story Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedStory(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-lg w-full transition-colors duration-200"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 rounded-t-2xl">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.location}
                    className="w-full h-full object-cover rounded-t-2xl opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-2xl font-bold">{selectedStory.farmer}</h2>
                    <p className="text-primary-100">{selectedStory.location}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <DollarSign className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{selectedStory.savings}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Saved Annually</div>
                    </div>
                    
                    <div className="text-center">
                      <Droplets className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">40%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Water Savings</div>
                    </div>
                    
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">30%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Yield Increase</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Crop: {selectedStory.crop}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{selectedStory.improvement}</p>
                  </div>

                  <div className="mt-4 text-center">
                    <button 
                      onClick={() => setSelectedStory(null)}
                      className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      Contact This Farmer
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Impact Across India</h2>
            <p className="text-primary-100 text-lg">
              Our technology is making a real difference in farmers' lives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-200">Farmers Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹50 Cr</div>
              <div className="text-primary-200">Total Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-primary-200">Water Saved</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="text-primary-200">Yield Increase</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessMap;