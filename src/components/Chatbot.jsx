import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User, Minimize2, Mic, MicOff } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hello! I\'m your RKD IntelliTech assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setSpeechSupported(true);
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      
      recognitionRef.current.onstart = () => {
        setIsListening(true);
      };
      
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        setIsListening(false);
      };
      
      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const quickResponses = [
    "How does smart irrigation work?",
    "What are the pricing plans?",
    "How to install IoT sensors?",
    "Government scheme information",
    "Technical support"
  ];

  const botResponses = {
    'hello': 'Hello! Welcome to RKD IntelliTech. I\'m here to help you with all your smart farming questions.',
    'pricing': 'Our IoT farming solutions start from ₹25,000 per acre. This includes sensors, controllers, and mobile app access. Would you like to know more about specific packages?',
    'irrigation': 'Smart irrigation uses soil moisture sensors and weather data to automatically water your crops only when needed. This can save up to 40% water while increasing yields by 30%.',
    'sensors': 'Our IoT sensors are easy to install with plug-and-play technology. Installation typically takes under 2 hours and includes soil moisture sensors, weather stations, and pump controllers.',
    'schemes': 'There are several government schemes available for farmers including PM-KISAN (₹6,000/year), Crop Insurance, and Credit Card facilities. I can help you find relevant schemes for your state.',
    'support': 'We provide 24/7 technical support through phone, chat, and field visits. Our experts speak local languages and understand regional farming practices.',
    'benefits': 'Key benefits include: 40% water savings, 30% yield increase, automated irrigation, real-time monitoring, weather alerts, and expert support in local languages.',
    'states': 'We currently serve farmers across all Indian states with localized support in regional languages. Each state has specific crop recommendations and government schemes.',
    'crops': 'Our system works with all major crops including wheat, rice, cotton, sugarcane, vegetables, and fruits. The AI adapts to your specific crop requirements.',
    'default': 'I understand you\'re asking about farming solutions. Could you be more specific? You can ask about pricing, irrigation, sensors, government schemes, or technical support.'
  };

  const generateBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.hello;
    } else if (message.includes('price') || message.includes('cost') || message.includes('plan')) {
      return botResponses.pricing;
    } else if (message.includes('irrigation') || message.includes('water')) {
      return botResponses.irrigation;
    } else if (message.includes('sensor') || message.includes('install') || message.includes('setup')) {
      return botResponses.sensors;
    } else if (message.includes('scheme') || message.includes('government') || message.includes('subsidy')) {
      return botResponses.schemes;
    } else if (message.includes('support') || message.includes('help') || message.includes('contact')) {
      return botResponses.support;
    } else if (message.includes('benefit') || message.includes('advantage') || message.includes('why')) {
      return botResponses.benefits;
    } else if (message.includes('state') || message.includes('location') || message.includes('area')) {
      return botResponses.states;
    } else if (message.includes('crop') || message.includes('wheat') || message.includes('rice') || message.includes('cotton')) {
      return botResponses.crops;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      message: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        message: generateBotResponse(inputMessage),
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickResponse = (response) => {
    setInputMessage(response);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleMicrophoneClick = () => {
    if (!speechSupported) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-gray-600 text-white' : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className={`fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-40 overflow-hidden transition-all duration-300 ${isMinimized ? 'h-16' : 'h-auto'}`}
          >
            {/* Header */}
            <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">RKD IntelliTech Assistant</h3>
                  <p className="text-xs text-primary-100">Online • Instant replies</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white hover:bg-opacity-20 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                      }`}>
                        <div className="flex items-start space-x-2">
                          {message.type === 'bot' && (
                            <Bot className="w-4 h-4 mt-1 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm">{message.message}</p>
                            <p className={`text-xs mt-1 opacity-70 ${
                              message.type === 'user' ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                          {message.type === 'user' && (
                            <User className="w-4 h-4 mt-1 text-primary-100 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm max-w-xs px-4 py-2 rounded-2xl">
                        <div className="flex items-center space-x-2">
                          <Bot className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Responses */}
                {messages.length === 1 && (
                  <div className="p-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-1">
                      {quickResponses.slice(0, 3).map((response, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickResponse(response)}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          {response}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
                  {isListening && (
                    <div className="mb-3 p-2 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Listening...</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message or click the mic..."
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    />
                    {speechSupported && (
                      <button
                        onClick={handleMicrophoneClick}
                        className={`p-2 rounded-lg transition-colors ${
                          isListening 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        title={isListening ? 'Stop listening' : 'Start voice input'}
                      >
                        {isListening ? (
                          <MicOff className="w-4 h-4" />
                        ) : (
                          <Mic className="w-4 h-4" />
                        )}
                      </button>
                    )}
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                      className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;