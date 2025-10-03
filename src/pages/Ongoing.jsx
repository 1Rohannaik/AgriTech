import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Users, 
  TrendingUp,
  Leaf,
  ArrowRight,
  Clock
} from 'lucide-react';

const Ongoing = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Farming IoT Solutions",
      description: "Revolutionizing agriculture in India with IoT-powered smart farming solutions for water optimization, crop monitoring, and yield enhancement.",
      category: "Agriculture Technology",
      status: "Active Development",
      startDate: "January 2024",
      location: "Karnataka, India",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg",
      features: [
        "Water optimization systems saving up to 40% water usage",
        "Real-time crop monitoring and disease detection",
        "Precision irrigation with sensor networks",
        "Mobile app for farmers in local languages",
        "Data analytics for yield prediction"
      ],
      stats: {
        farmers: "1,000+",
        coverage: "5,000 acres",
        waterSaved: "40%"
      },
      link: "/projects/farming",
      color: "text-green-600"
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Ongoing Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Discover our current innovative projects transforming technology across agriculture, 
            defense, and semiconductor industries with cutting-edge solutions.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center space-x-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Active Development' ? 'bg-green-100 text-green-800' :
                          project.status === 'Phase 2' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          <Clock className="w-4 h-4 inline mr-1" />
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${project.color} bg-opacity-10 mb-4`}>
                        {project.category}
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Started: {project.startDate}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <ArrowRight className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      {Object.entries(project.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {value}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={project.link}
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your innovative ideas to life with our expertise 
            in cutting-edge technology solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Ongoing;