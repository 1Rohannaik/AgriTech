import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Droplets, 
  Gauge, 
  Bell, 
  Power, 
  FileText, 
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';
import toast from 'react-hot-toast';
import useLanguageStore from '../store/useLanguageStore';
import { farmSensorData } from '../data/mockData';

const MobileApp = () => {
  const { t } = useLanguageStore();
  const [currentScreen, setCurrentScreen] = useState('home');
  const [pumpStatus, setPumpStatus] = useState(false);

  const screens = [
    { id: 'home', title: t('app.home.title'), icon: <Gauge className="w-5 h-5" /> },
    { id: 'alerts', title: t('app.alerts.title'), icon: <Bell className="w-5 h-5" /> },
    { id: 'control', title: 'Control Panel', icon: <Power className="w-5 h-5" /> },
    { id: 'reports', title: 'Reports', icon: <FileText className="w-5 h-5" /> },
  ];

  const handlePumpToggle = () => {
    setPumpStatus(!pumpStatus);
    toast.success(pumpStatus ? 'Pump stopped' : 'Pump started');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'optimal':
      case 'good':
        return 'from-green-500 to-green-600';
      case 'low':
      case 'warning':
        return 'from-yellow-500 to-yellow-600';
      case 'critical':
        return 'from-red-500 to-red-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status) => {
    return t(`status.${status}`);
  };

  const renderHomeScreen = () => (
    <div className="space-y-6">
      {/* Status Cards */}
      <div className="grid grid-cols-1 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`bg-gradient-to-r ${getStatusColor(farmSensorData.soilMoisture.status)} p-6 rounded-2xl text-white`}
        >
          <div className="flex items-center justify-between mb-4">
            <Droplets className="w-8 h-8" />
            <span className="text-sm font-medium opacity-90">{farmSensorData.soilMoisture.lastUpdated}</span>
          </div>
          <div className="text-3xl font-bold mb-2">{farmSensorData.soilMoisture.current}%</div>
          <div className="text-lg font-medium">{t('app.soil.title')}</div>
          <div className="text-sm opacity-90">{getStatusText(farmSensorData.soilMoisture.status)}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className={`bg-gradient-to-r ${getStatusColor(farmSensorData.waterSupply.status)} p-6 rounded-2xl text-white`}
        >
          <div className="flex items-center justify-between mb-4">
            <Gauge className="w-8 h-8" />
            <span className="text-sm font-medium opacity-90">{farmSensorData.waterSupply.lastUpdated}</span>
          </div>
          <div className="text-3xl font-bold mb-2">{farmSensorData.waterSupply.current}%</div>
          <div className="text-lg font-medium">{t('app.water.title')}</div>
          <div className="text-sm opacity-90">{getStatusText(farmSensorData.waterSupply.status)}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl text-white"
        >
          <div className="flex items-center justify-between mb-4">
            <Bell className="w-8 h-8" />
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {farmSensorData.alerts.length}
            </span>
          </div>
          <div className="text-3xl font-bold mb-2">{farmSensorData.alerts.length}</div>
          <div className="text-lg font-medium">{t('app.alerts.title')}</div>
          <div className="text-sm opacity-90">
            {farmSensorData.alerts.length > 0 ? 'Needs Attention' : t('status.none')}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setCurrentScreen('control')}
            className="bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300 p-4 rounded-xl text-center hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-200"
          >
            <Power className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">Control Pump</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('reports')}
            className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 p-4 rounded-xl text-center hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200"
          >
            <FileText className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">View Reports</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderAlertsScreen = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Alerts</h2>
      {farmSensorData.alerts.map((alert, index) => (
        <motion.div
          key={alert.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-4 rounded-xl border-l-4 ${
            alert.type === 'critical' ? 'bg-red-50 dark:bg-red-900 border-red-500' :
            alert.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900 border-yellow-500' :
            'bg-blue-50 dark:bg-blue-900 border-blue-500'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className={`font-medium ${
                alert.type === 'critical' ? 'text-red-800 dark:text-red-200' :
                alert.type === 'warning' ? 'text-yellow-800 dark:text-yellow-200' :
                'text-blue-800 dark:text-blue-200'
              }`}>
                {alert.message}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{alert.timestamp}</p>
            </div>
            <div className={`px-2 py-1 rounded text-xs font-medium ${
              alert.type === 'critical' ? 'bg-red-100 text-red-800' :
              alert.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {alert.priority}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderControlScreen = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pump Control</h2>
      
      {/* Pump Status */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center">
        <div className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${
          pumpStatus ? 'bg-green-100 dark:bg-green-900' : 'bg-gray-100 dark:bg-gray-700'
        }`}>
          <Power className={`w-12 h-12 ${pumpStatus ? 'text-green-600 dark:text-green-400' : 'text-gray-400 dark:text-gray-500'}`} />
        </div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Water Pump {pumpStatus ? 'ON' : 'OFF'}
        </div>
        <div className={`text-sm font-medium ${pumpStatus ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}>
          {pumpStatus ? 'Currently Running' : 'Currently Stopped'}
        </div>
      </div>

      {/* Control Button */}
      <button
        onClick={handlePumpToggle}
        className={`w-full py-6 rounded-2xl text-white text-xl font-bold transition-all duration-200 ${
          pumpStatus 
            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
            : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
        }`}
      >
        {pumpStatus ? t('app.pump.stop') : t('app.pump.start')}
      </button>

      {/* AI Recommendation */}
      <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-xl">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="font-semibold text-blue-900 dark:text-blue-200">{t('app.ai.recommend')}</span>
        </div>
        <p className="text-blue-800 dark:text-blue-300">Run pump for 45 minutes based on current soil moisture levels</p>
      </div>
    </div>
  );

  const renderReportsScreen = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Farm Reports</h2>
      
      {/* Monthly Report */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Monthly Summary</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">December 2024</p>
          </div>
          <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">₹45,000</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Water Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">35%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Efficiency Gain</div>
          </div>
        </div>

        <button 
          onClick={() => toast.success('Report downloaded!')}
          className="w-full bg-primary-600 text-white py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
        >
          <Download className="w-5 h-5 mr-2" />
          {t('app.report.generate')}
        </button>
      </div>

      {/* Usage Statistics */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Usage Statistics</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Total Irrigation Time</span>
            <span className="font-semibold text-gray-900 dark:text-white">142 hours</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Water Used</span>
            <span className="font-semibold text-gray-900 dark:text-white">2,340 liters</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Average Soil Moisture</span>
            <span className="font-semibold text-gray-900 dark:text-white">68%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Alerts Resolved</span>
            <span className="font-semibold text-gray-900 dark:text-white">24</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return renderHomeScreen();
      case 'alerts':
        return renderAlertsScreen();
      case 'control':
        return renderControlScreen();
      case 'reports':
        return renderReportsScreen();
      default:
        return renderHomeScreen();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Smartphone className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            RKD IntelliTech Mobile App Preview
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the power of smart farming in the palm of your hand
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Mobile Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="sticky top-8"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-gray-900 dark:bg-gray-800 p-2 rounded-[3rem] shadow-2xl">
                <div className="bg-black p-1 rounded-[2.5rem]">
                  <div className="bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden h-[600px]">
                    {/* Status Bar */}
                    <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-between items-center text-xs font-medium text-gray-900 dark:text-gray-100">
                      <span>9:41</span>
                      <span>RKD IntelliTech</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-1 h-2 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4 h-[calc(100%-48px)] overflow-y-auto">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentScreen}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {renderScreen()}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 px-4 py-2">
                      <div className="flex justify-between items-center">
                        {screens.map((screen) => (
                          <button
                            key={screen.id}
                            onClick={() => setCurrentScreen(screen.id)}
                            className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200 ${
                              currentScreen === screen.id
                                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                            }`}
                          >
                            {screen.icon}
                            <span className="text-xs mt-1 font-medium">{screen.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Shadow */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] transform translate-y-2 -z-10 opacity-20"></div>
            </div>
          </motion.div>

          {/* App Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Everything You Need in One App
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Monitor your farm, control irrigation, and get AI-powered insights - all from your smartphone in your preferred language.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Track soil moisture, water supply, and weather conditions 24/7 with live updates every 5 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Smart Alerts</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get instant notifications about critical farm conditions in regional languages, Hindi, or English.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Power className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Remote Control</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start and stop irrigation pumps remotely with one tap, or set automatic schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Detailed Reports</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Generate comprehensive monthly reports showing water savings, efficiency gains, and cost reductions.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Download the RKD IntelliTech App</h3>
              <p className="text-primary-100 mb-6">
                Available for Android and iOS. Works offline and syncs when connected.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => toast.success('Redirecting to Google Play Store...')}
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Google Play
                </button>
                <button 
                  onClick={() => toast.success('Redirecting to App Store...')}
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  App Store
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;