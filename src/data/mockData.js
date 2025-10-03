// Mock data for the RKD IntelliTech IoT platform

export const farmSensorData = {
  soilMoisture: {
    current: 65,
    status: 'optimal', // optimal, low, critical
    lastUpdated: '2 mins ago'
  },
  waterSupply: {
    current: 80,
    status: 'good', // good, warning, critical
    lastUpdated: '1 min ago'
  },
  alerts: [
    {
      id: 1,
      type: 'warning',
      message: 'Soil moisture dropping in Field A',
      timestamp: '10 mins ago',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'info',
      message: 'Irrigation completed in Field B',
      timestamp: '1 hour ago',
      priority: 'low'
    },
    {
      id: 3,
      type: 'critical',
      message: 'Water pump pressure low',
      timestamp: '2 hours ago',
      priority: 'high'
    }
  ]
};

export const successStories = [
  {
    id: 1,
    farmer: 'Harpreet Singh',
    location: 'Ludhiana',
    coordinates: [30.9010, 75.8573],
    savings: '₹2,50,000',
    crop: 'Rice',
    improvement: '45% water savings, 25% yield increase',
    image: 'https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg'
  },
  {
    id: 2,
    farmer: 'Jasbir Kaur',
    location: 'Amritsar',
    coordinates: [31.6340, 74.8723],
    savings: '₹1,80,000',
    crop: 'Wheat',
    improvement: '40% water savings, 30% yield increase',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
  },
  {
    id: 3,
    farmer: 'Kuldeep Singh',
    location: 'Patiala',
    coordinates: [30.3398, 76.3869],
    savings: '₹3,20,000',
    crop: 'Cotton',
    improvement: '50% water savings, 35% yield increase',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
  },
  {
    id: 4,
    farmer: 'Simran Jeet',
    location: 'Bathinda',
    coordinates: [30.2118, 74.9455],
    savings: '₹2,90,000',
    crop: 'Sugarcane',
    improvement: '42% water savings, 28% yield increase',
    image: 'https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg'
  }
];

export const cropOptions = [
  { value: 'wheat', multiplier: 1.2 },
  { value: 'rice', multiplier: 1.5 },
  { value: 'cotton', multiplier: 1.8 },
  { value: 'sugarcane', multiplier: 2.1 },
  { value: 'maize', multiplier: 1.3 }
];

export const calculateROI = (landSize, waterCost, cropType) => {
  const crop = cropOptions.find(c => c.value === cropType) || cropOptions[0];
  
  const waterSavings = waterCost * 12 * 0.4; // 40% water savings annually
  const yieldIncrease = landSize * 25000 * crop.multiplier * 0.3; // 30% yield increase
  const totalSavings = waterSavings + yieldIncrease;
  
  return {
    waterSavings: Math.round(waterSavings),
    yieldIncrease: Math.round(yieldIncrease),
    totalSavings: Math.round(totalSavings)
  };
};