import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Cpu,
  Shield,
  Brain,
  Bot,
  Lightbulb,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

const MainHome = () => {
  const services = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "IoT & Embedded Systems",
      description:
        "End-to-end IoT solutions from sensor design to cloud integration with 20+ years of embedded expertise.",
      features: [
        "Custom sensor development",
        "Edge computing solutions",
        "Wireless communication protocols",
        "Real-time data processing",
      ],
      path: "/projects/farming",
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "VLSI Design & Verification",
      description:
        "Advanced chip design and verification services leveraging expertise from NVIDIA and Microsoft accelerator projects.",
      features: [
        "DFT implementation",
        "Verification protocols",
        "Accelerator chip design",
        "Nanotechnology applications",
      ],
      path: "/services/vlsi",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Defense & Government Solutions",
      description:
        "Military-grade systems and government supply solutions backed by Indian Army expertise and strategic planning.",
      features: [
        "Secure communication systems",
        "Military equipment supply",
        "Strategic system design",
        "Compliance & certification",
      ],
      path: "/services/defense",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description:
        "Cutting-edge artificial intelligence solutions and data analytics powered by industry veterans from Merkle and BMS.",
      features: [
        "Predictive analytics",
        "Machine learning models",
        "Data visualization",
        "Automated decision systems",
      ],
      path: "/services/ai",
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "Robotics & Automation",
      description:
        "Next-generation robotic systems and industrial automation solutions from IIT Hyderabad expertise.",
      features: [
        "Industrial automation",
        "Robotic control systems",
        "Process optimization",
        "Human-robot interaction",
      ],
      path: "/services/robotics",
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Consulting & Innovation",
      description:
        "Strategic technology consulting and innovation services combining academic research with real-world implementation.",
      features: [
        "Technology roadmapping",
        "Innovation strategy",
        "Research collaboration",
        "Technical mentoring",
      ],
      path: "/services/consulting",
    },
  ];

const teamMembers = [
  {
    name: "Dr. Kiran A. Gupta",
    role: "Technical Director",
    experience: "20+ years",
    description:
      "Professor with two decades of academic and industry experience, holding an M.Tech in VLSI & Embedded Design and a Ph.D. with substantial industry collaboration. Currently leading innovation in AI and Robotics.",
    specialties: ["IoT & Edge Computing", "AI", "Robotics"],
  },
  {
    name: "Jyoti Prakash Gupta",
    role: "Founder & CEO",
    experience: "15+ years",
    description:
      "Entrepreneur with both a B.E. and M.B.A., specializing in high-value, turn-key projects for automation in the government and defense sectors in Bangalore.",
    longTermAssociations: ["BSF", "EME", "GTRE", "CMP"],
    specialties: [
      "Business Development",
      "Turn-Key Project Execution",
      "Defense Sector Automation",
    ],
  },
  {
    // UPDATED: Role and Description for Col. Mahajan
    name: "Col. Shiv Shakti Mahajan",
    role: "Administrative & Defense Consultant", // New combined role
    experience: "25+ years",
    description:
      "Retired Colonel from Indian Army and MSc Physics gold medalist. Brings military precision and advanced physics knowledge, serving as our Administrative Execution Officer and Defense consultant.", // Clarified role
    specialties: ["Military Systems", "Strategic Planning", "Administrative Execution"],
  },
  {
    name: "Niharika J",
    role: "VLSI Lead",
    experience: "8+ years",
    almaMater: "IIT Roorkee (Nanotechnology)",
    description:
      "VLSI Chip Expert and Gold Medalist in ECE (Institute Level). IIT Roorkee Nanotechnology alumni, specializing in high-performance VLSI chip design and verification.",
    specialties: [
      "DFT Implementation",
      "Complex Chip Verification",
      "Accelerator Chip Design",
    ],
  },
  {
    name: "Mayanka Gupta",
    role: "AI Specialist",
    experience: "3+ years",
    description:
      "AI and Data Analytics specialist with an M.Tech in Artificial Intelligence & ML (2nd Topper at VTU Level). Former Senior Data Analyst with significant industry experience.",
    specialties: ["AI/ML", "Data Analytics", "BMS Systems"],
  },
  {
    // UPDATED: Alma Mater, Description, and Specialties for Divyanshu Goel
    name: "Divyanshu Goel",
    role: "Robotics Engineer",
    experience: "10+ years",
    description:
      "IIIT Hyderabad alumni specializing in Robotics and Automation. Executes national and international level projects in advanced **Drone** technology and industrial automation solutions.", // Added drone focus
    specialties: ["Robotics", "Drones & UAVs", "Control Systems"], // Updated specialties
  },
];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Advanced Technology
            <span className="block text-blue-400">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto"
          >
            Expert team delivering cutting-edge solutions in IoT, VLSI, AI,
            Defense Systems, and Robotics with decades of combined experience
            from industry leaders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("team")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200 flex items-center space-x-2 cursor-pointer"
            >
              <span>Meet Our Team</span>
            </a>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions spanning IoT, VLSI, AI,
              Defense, and Robotics. We transform complex challenges into
              innovative, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-500 dark:text-gray-400 flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our diverse team combines academic excellence, industry
              experience, and military precision to deliver world-class
              technology solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {member.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {member.experience}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your next project? Contact our expert team for a
              consultation and discover how we can transform your technology
              challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 p-8 rounded-xl text-white">
              <Mail className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100 mb-4">Send us your inquiries</p>
              <a
                href="mailto:solutions@rkdintellitech.in"
                className="text-blue-200 hover:text-white transition-colors"
              >
                solutions@rkdintellitech.in
              </a>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl text-white">
              <Phone className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100 mb-4">Speak with our team directly</p>
              <a
                href="tel:+919480478469"
                className="text-blue-200 hover:text-white transition-colors"
              >
                +91 9480478469
              </a>
            </div>

            <div className="bg-white bg-opacity-10 p-8 rounded-xl text-white">
              <MapPin className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100 mb-4">Our office address</p>
              <address className="text-blue-200 not-italic">
                Chunchungatta, Konankunte
                <br />
                Bangalore - 560062
                <br />
                Karnataka, India
              </address>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start a Project
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
