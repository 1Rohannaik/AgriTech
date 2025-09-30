import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLanguageStore = create(
  persist(
    (set, get) => ({
      currentLanguage: 'en',
      setLanguage: (language) => set({ currentLanguage: language }),
      
      // Translation function
      t: (key) => {
        const { currentLanguage } = get();
        const translations = get().translations;
        return translations[currentLanguage]?.[key] || key;
      },
      
      translations: {
        en: {
          // Navigation
          'nav.home': 'Home',
          'nav.roi': 'ROI Calculator',
          'nav.hardware': 'Hardware',
          'nav.map': 'Success Stories',
          'nav.solution': 'Solution',
          'nav.app': 'Mobile App',
          
          // Hero Section
          'hero.title': 'Smart Farming for India\'s Future',
          'hero.subtitle': 'IoT-powered precision agriculture that saves water, increases yield, and maximizes profits',
          'hero.cta': 'Book Field Demo',
          'hero.stats.farmers': '10,000+ Farmers',
          'hero.stats.saved': '₹50 Crore Saved',
          'hero.stats.water': '40% Water Savings',
          
          // ROI Calculator
          'roi.title': 'Calculate Your Savings',
          'roi.subtitle': 'See how much you can save with smart farming',
          'roi.land.label': 'Land Size (Acres)',
          'roi.water.label': 'Monthly Water Cost (₹)',
          'roi.crop.label': 'Primary Crop',
          'roi.calculate': 'Calculate Savings',
          'roi.result.title': 'Your Projected Annual Savings',
          'roi.result.water': 'Water Cost Reduction',
          'roi.result.yield': 'Increased Yield Value',
          'roi.result.total': 'Total Annual Savings',
          
          // Hardware
          'hardware.title': 'Military-Grade IoT Sensors',
          'hardware.subtitle': 'Built to withstand India\'s harsh weather conditions',
          'hardware.features.solar': 'Solar Powered',
          'hardware.features.waterproof': 'IP67 Waterproof',
          'hardware.features.range': '10km Range',
          'hardware.features.battery': '2 Year Battery',
          
          // Mobile App
          'app.home.title': 'Farm Dashboard',
          'app.soil.title': 'Soil Moisture',
          'app.water.title': 'Water Supply',
          'app.alerts.title': 'Active Alerts',
          'app.pump.start': 'START PUMP',
          'app.pump.stop': 'STOP PUMP',
          'app.ai.recommend': 'AI Recommends',
          'app.report.generate': 'Generate Monthly Report',
          
          // Status
          'status.optimal': 'Optimal',
          'status.low': 'Low',
          'status.critical': 'Critical',
          'status.good': 'Good',
          'status.warning': 'Warning',
          'status.none': 'No Alerts',
          
          // Crops
          'crop.wheat': 'Wheat',
          'crop.rice': 'Rice', 
          'crop.cotton': 'Cotton',
          'crop.sugarcane': 'Sugarcane',
          'crop.maize': 'Maize',
        },
        
        pa: {
          // Navigation (Indiai)
          'nav.home': 'ਘਰ',
          'nav.roi': 'ROI ਕੈਲਕੁਲੇਟਰ',
          'nav.hardware': 'ਹਾਰਡਵੇਅਰ',
          'nav.map': 'ਸਫਲਤਾ ਦੀਆਂ ਕਹਾਣੀਆਂ',
          'nav.solution': 'ਹੱਲ',
          'nav.app': 'ਮੋਬਾਈਲ ਐਪ',
          
          // Hero Section
          'hero.title': 'ਭਾਰਤ ਦੇ ਭਵਿੱਖ ਲਈ ਸਮਾਰਟ ਖੇਤੀ',
          'hero.subtitle': 'IoT-ਸੰਚਾਲਿਤ ਸਟੀਕ ਖੇਤੀ ਜੋ ਪਾਣੀ ਬਚਾਉਂਦੀ ਹੈ, ਪੈਦਾਵਾਰ ਵਧਾਉਂਦੀ ਹੈ, ਅਤੇ ਮੁਨਾਫੇ ਨੂੰ ਵੱਧ ਤੋਂ ਵੱਧ ਬਣਾਉਂਦੀ ਹੈ',
          'hero.cta': 'ਫੀਲਡ ਡੈਮੋ ਬੁੱਕ ਕਰੋ',
          'hero.stats.farmers': '10,000+ ਕਿਸਾਨ',
          'hero.stats.saved': '₹50 ਕਰੋੜ ਬਚਾਏ',
          'hero.stats.water': '40% ਪਾਣੀ ਦੀ ਬਚਤ',
          
          // ROI Calculator
          'roi.title': 'ਆਪਣੀ ਬਚਤ ਦੀ ਗਣਨਾ ਕਰੋ',
          'roi.subtitle': 'ਦੇਖੋ ਕਿ ਤੁਸੀਂ ਸਮਾਰਟ ਖੇਤੀ ਨਾਲ ਕਿੰਨੀ ਬਚਤ ਕਰ ਸਕਦੇ ਹੋ',
          'roi.land.label': 'ਜ਼ਮੀਨ ਦਾ ਆਕਾਰ (ਏਕੜ)',
          'roi.water.label': 'ਮਾਸਿਕ ਪਾਣੀ ਦੀ ਲਾਗਤ (₹)',
          'roi.crop.label': 'ਮੁੱਖ ਫਸਲ',
          'roi.calculate': 'ਬਚਤ ਦੀ ਗਣਨਾ ਕਰੋ',
          'roi.result.title': 'ਤੁਹਾਡੀ ਅਨੁਮਾਨਿਤ ਸਾਲਾਨਾ ਬਚਤ',
          'roi.result.water': 'ਪਾਣੀ ਦੀ ਲਾਗਤ ਵਿੱਚ ਕਮੀ',
          'roi.result.yield': 'ਵਧੀ ਹੋਈ ਪੈਦਾਵਾਰ ਦਾ ਮੁੱਲ',
          'roi.result.total': 'ਕੁੱਲ ਸਾਲਾਨਾ ਬਚਤ',
          
          // Hardware  
          'hardware.title': 'ਮਿਲਟਰੀ-ਗ੍ਰੇਡ IoT ਸੈਂਸਰ',
          'hardware.subtitle': 'ਭਾਰਤ ਦੀਆਂ ਕਠੋਰ ਮੌਸਮੀ ਸਥਿਤੀਆਂ ਦਾ ਸਾਮਣਾ ਕਰਨ ਲਈ ਬਣਾਏ ਗਏ',
          'hardware.features.solar': 'ਸੋਲਰ ਸੰਚਾਲਿਤ',
          'hardware.features.waterproof': 'IP67 ਵਾਟਰਪ੍ਰੂਫ',
          'hardware.features.range': '10km ਰੇਂਜ',
          'hardware.features.battery': '2 ਸਾਲ ਬੈਟਰੀ',
          
          // Mobile App
          'app.home.title': 'ਫਾਰਮ ਡੈਸ਼ਬੋਰਡ',
          'app.soil.title': 'ਮਿੱਟੀ ਦੀ ਨਮੀ',
          'app.water.title': 'ਪਾਣੀ ਦੀ ਸਪਲਾਈ',
          'app.alerts.title': 'ਸਰਗਰਮ ਚੇਤਾਵਨੀਆਂ',
          'app.pump.start': 'ਪੰਪ ਸ਼ੁਰੂ ਕਰੋ',
          'app.pump.stop': 'ਪੰਪ ਬੰਦ ਕਰੋ',
          'app.ai.recommend': 'AI ਸਿਫਾਰਸ਼',
          'app.report.generate': 'ਮਾਸਿਕ ਰਿਪੋਰਟ ਤਿਆਰ ਕਰੋ',
          
          // Status
          'status.optimal': 'ਸਰਵੋਤਮ',
          'status.low': 'ਘੱਟ',
          'status.critical': 'ਗੰਭੀਰ',
          'status.good': 'ਚੰਗਾ',
          'status.warning': 'ਚੇਤਾਵਨੀ',
          'status.none': 'ਕੋਈ ਅਲਰਟ ਨਹੀਂ',
          
          // Crops
          'crop.wheat': 'ਕਣਕ',
          'crop.rice': 'ਚਾਵਲ',
          'crop.cotton': 'ਕਪਾਹ',
          'crop.sugarcane': 'ਗੰਨਾ',
          'crop.maize': 'ਮੱਕੀ',
        },
        
        hi: {
          // Navigation (Hindi)
          'nav.home': 'होम',
          'nav.roi': 'ROI कैलकुलेटर',
          'nav.hardware': 'हार्डवेयर',
          'nav.map': 'सफलता की कहानियां',
          'nav.solution': 'समाधान',
          'nav.app': 'मोबाइल ऐप',
          
          // Hero Section
          'hero.title': 'भारत के भविष्य के लिए स्मार्ट खेती',
          'hero.subtitle': 'IoT-संचालित सटीक कृषि जो पानी बचाती है, उत्पादन बढ़ाती है, और मुनाफे को अधिकतम करती है',
          'hero.cta': 'फील्ड डेमो बुक करें',
          'hero.stats.farmers': '10,000+ किसान',
          'hero.stats.saved': '₹50 करोड़ बचाए',
          'hero.stats.water': '40% पानी की बचत',
          
          // ROI Calculator
          'roi.title': 'अपनी बचत की गणना करें',
          'roi.subtitle': 'देखें कि स्मार्ट खेती से आप कितनी बचत कर सकते हैं',
          'roi.land.label': 'भूमि का आकार (एकड़)',
          'roi.water.label': 'मासिक पानी की लागत (₹)',
          'roi.crop.label': 'मुख्य फसल',
          'roi.calculate': 'बचत की गणना करें',
          'roi.result.title': 'आपकी अनुमानित वार्षिक बचत',
          'roi.result.water': 'पानी की लागत में कमी',
          'roi.result.yield': 'बढ़ी हुई उत्पादन का मूल्य',
          'roi.result.total': 'कुल वार्षिक बचत',
          
          // Hardware
          'hardware.title': 'मिलिट्री-ग्रेड IoT सेंसर',
          'hardware.subtitle': 'भारत की कठोर मौसमी परिस्थितियों का सामना करने के लिए बनाए गए',
          'hardware.features.solar': 'सोलर संचालित',
          'hardware.features.waterproof': 'IP67 वॉटरप्रूफ',
          'hardware.features.range': '10km रेंज',
          'hardware.features.battery': '2 साल बैटरी',
          
          // Mobile App
          'app.home.title': 'फार्म डैशबोर्ड',
          'app.soil.title': 'मिट्टी की नमी',
          'app.water.title': 'पानी की आपूर्ति',
          'app.alerts.title': 'सक्रिय अलर्ट',
          'app.pump.start': 'पंप शुरू करें',
          'app.pump.stop': 'पंप बंद करें',
          'app.ai.recommend': 'AI सिफारिश',
          'app.report.generate': 'मासिक रिपोर्ट बनाएं',
          
          // Status
          'status.optimal': 'उत्तम',
          'status.low': 'कम',
          'status.critical': 'गंभीर',
          'status.good': 'अच्छा',
          'status.warning': 'चेतावनी',
          'status.none': 'कोई अलर्ट नहीं',
          
          // Crops
          'crop.wheat': 'गेहूं',
          'crop.rice': 'चावल',
          'crop.cotton': 'कपास',
          'crop.sugarcane': 'गन्ना',
          'crop.maize': 'मक्का',
        }
      }
    }),
    {
      name: 'language-storage',
    }
  )
);

export default useLanguageStore;