import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Droplets, DollarSign } from 'lucide-react';
import toast from 'react-hot-toast';
import useLanguageStore from '../store/useLanguageStore';
import { cropOptions, calculateROI } from '../data/mockData';

const ROICalculator = () => {
  const { t } = useLanguageStore();
  const [formData, setFormData] = useState({
    landSize: '',
    waterCost: '',
    cropType: 'wheat'
  });
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    
    if (!formData.landSize || !formData.waterCost) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const calculatedResults = calculateROI(
        parseFloat(formData.landSize),
        parseFloat(formData.waterCost),
        formData.cropType
      );
      
      setResults(calculatedResults);
      setIsCalculating(false);
      toast.success('Calculations complete!');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Calculator className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('roi.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('roi.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-200"
          >
            <form onSubmit={handleCalculate} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('roi.land.label')}
                </label>
                <input
                  type="number"
                  name="landSize"
                  value={formData.landSize}
                  onChange={handleInputChange}
                  placeholder="Enter land size"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('roi.water.label')}
                </label>
                <input
                  type="number"
                  name="waterCost"
                  value={formData.waterCost}
                  onChange={handleInputChange}
                  placeholder="Enter monthly water cost"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg transition-colors duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('roi.crop.label')}
                </label>
                <select
                  name="cropType"
                  value={formData.cropType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg transition-colors duration-200"
                >
                  {cropOptions.map((crop) => (
                    <option key={crop.value} value={crop.value}>
                      {t(`crop.${crop.value}`)}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isCalculating}
                className="w-full bg-primary-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCalculating ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                    Calculating...
                  </div>
                ) : (
                  t('roi.calculate')
                )}
              </button>
            </form>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-200"
          >
            {results ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t('roi.result.title')}
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Droplets className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {t('roi.result.water')}
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      ₹{results.waterSavings.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {t('roi.result.yield')}
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      ₹{results.yieldIncrease.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg border-2 border-primary-200 dark:border-primary-700">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">
                        {t('roi.result.total')}
                      </span>
                    </div>
                    <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                      ₹{results.totalSavings.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    <strong>Note:</strong> These calculations are estimates based on average performance data from India farms using our IoT solutions.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400">
                <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Fill in the form to see your potential savings</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How We Calculate Your Savings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Water Savings</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Our precision irrigation system reduces water usage by 40% through real-time soil moisture monitoring and weather data integration.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Yield Increase</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Data-driven farming decisions lead to 25-30% yield improvements through optimal planting, watering, and harvesting timing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROICalculator;