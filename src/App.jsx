import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useThemeStore from './store/useThemeStore';

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import Home from './pages/Home';
import ROICalculator from './pages/ROICalculator';
import Hardware from './pages/Hardware';
import SuccessMap from './pages/SuccessMap';
import Solution from './pages/Solution';
import MobileApp from './pages/MobileApp';

function App() {
  const { initializeTheme } = useThemeStore();
  
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roi-calculator" element={<ROICalculator />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/success-map" element={<SuccessMap />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/mobile-app" element={<MobileApp />} />
          </Routes>
        </main>

        <Footer />
        
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;