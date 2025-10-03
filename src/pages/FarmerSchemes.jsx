import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, DollarSign, Calendar, ExternalLink, Filter, Search } from 'lucide-react';

const FarmerSchemes = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const schemes = [
    {
      id: 1,
      name: 'PM-KISAN Samman Nidhi',
      category: 'Direct Benefit',
      amount: '₹6,000 per year',
      eligibility: 'All landholding farmers',
      description: 'Direct income support to farmers. ₹2,000 paid in three installments.',
      launched: '2019',
      beneficiaries: '11+ Crore',
      status: 'Active',
      link: 'https://pmkisan.gov.in/'
    },
    {
      id: 2,
      name: 'Pradhan Mantri Fasal Bima Yojana',
      category: 'Insurance',
      amount: 'Up to ₹2 Lakh coverage',
      eligibility: 'All farmers growing notified crops',
      description: 'Crop insurance scheme providing financial support to farmers in case of crop loss.',
      launched: '2016',
      beneficiaries: '5.5+ Crore',
      status: 'Active',
      link: 'https://pmfby.gov.in/'
    },
    {
      id: 3,
      name: 'Kisan Credit Card (KCC)',
      category: 'Credit',
      amount: 'Up to ₹3 Lakh at 4% interest',
      eligibility: 'Farmers with land records',
      description: 'Easy access to credit for agriculture and allied activities.',
      launched: '1998',
      beneficiaries: '7+ Crore',
      status: 'Active',
      link: 'https://www.india.gov.in/spotlight/kisan-credit-card-kcc'
    },
    {
      id: 4,
      name: 'PM Kisan Mandhan Yojana',
      category: 'Pension',
      amount: '₹3,000 monthly pension',
      eligibility: 'Small & marginal farmers (18-40 years)',
      description: 'Pension scheme for small and marginal farmers.',
      launched: '2019',
      beneficiaries: '22+ Lakh',
      status: 'Active',
      link: 'https://maandhan.in/'
    },
    {
      id: 5,
      name: 'Soil Health Card Scheme',
      category: 'Technology',
      amount: 'Free soil testing',
      eligibility: 'All farmers',
      description: 'Promotes soil health through issue of Soil Health Cards to farmers.',
      launched: '2015',
      beneficiaries: '22+ Crore cards issued',
      status: 'Active',
      link: 'https://soilhealth.dac.gov.in/'
    },
    {
      id: 6,
      name: 'National Agriculture Market (e-NAM)',
      category: 'Marketing',
      amount: 'Better price discovery',
      eligibility: 'All farmers',
      description: 'Online trading platform for agricultural commodities.',
      launched: '2016',
      beneficiaries: '1.7+ Crore farmers',
      status: 'Active',
      link: 'https://enam.gov.in/'
    },
    {
      id: 7,
      name: 'Paramparagat Krishi Vikas Yojana',
      category: 'Organic Farming',
      amount: '₹50,000 per ha for 3 years',
      eligibility: 'Farmers adopting organic farming',
      description: 'Promotes organic farming and certification.',
      launched: '2015',
      beneficiaries: '8+ Lakh farmers',
      status: 'Active',
      link: 'https://pgsindia-ncof.gov.in/'
    },
    {
      id: 8,
      name: 'Rashtriya Gokul Mission',
      category: 'Livestock',
      amount: 'Varies by component',
      eligibility: 'Dairy farmers and cooperatives',
      description: 'Development and conservation of indigenous bovine breeds.',
      launched: '2014',
      beneficiaries: '50+ Lakh farmers',
      status: 'Active',
      link: 'https://dahd.nic.in/'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Schemes' },
    { id: 'Direct Benefit', name: 'Direct Benefit' },
    { id: 'Insurance', name: 'Insurance' },
    { id: 'Credit', name: 'Credit' },
    { id: 'Technology', name: 'Technology' },
    { id: 'Marketing', name: 'Marketing' }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'Closed':
        return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
      default:
        return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Direct Benefit': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
      'Insurance': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
      'Credit': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
      'Technology': 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
      'Marketing': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
      'Pension': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
      'Organic Farming': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
      'Livestock': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
    };
    return colors[category] || 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Award className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Government Farmer Schemes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover and apply for various government schemes designed to support Indian farmers
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">25+</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Active Schemes</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">14+ Cr</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Beneficiaries</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-colors duration-200">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">₹2.5+ Lakh Cr</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Outlay</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search schemes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme, index) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {scheme.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(scheme.category)}`}>
                        {scheme.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(scheme.status)}`}>
                        {scheme.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {scheme.amount}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {scheme.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">{scheme.beneficiaries} beneficiaries</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">Launched in {scheme.launched}</span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">Eligibility:</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{scheme.eligibility}</p>
                </div>

                {/* Action Button */}
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredSchemes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No schemes found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Need Help with Applications?</h2>
          <p className="text-primary-100 text-lg mb-6">
            Our RKD IntelliTech experts can help you navigate and apply for the right schemes
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get Expert Assistance
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default FarmerSchemes;