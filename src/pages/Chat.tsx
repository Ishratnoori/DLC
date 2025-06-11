import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/outline';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface KnowledgeBase {
  keywords: string[];
  responses: string[];
  followUp?: string;
}

const knowledgeBase: Record<string, KnowledgeBase> = {
  general: {
    keywords: ['all', 'everything', 'help', 'start', 'begin', 'hi', 'hello'],
    responses: [
      "I can help you learn about various digital tools! Here are some topics we can explore:\n\n" +
      "1. 📱 Messaging Apps (WhatsApp, Telegram)\n" +
      "2. 💳 Digital Payments (Paytm, UPI)\n" +
      "3. 🗺️ Navigation (Google Maps)\n" +
      "4. 📧 Email (Gmail)\n" +
      "5. 🎥 Video Calls (Zoom, Google Meet)\n" +
      "6. 🎨 Basic Design Tools\n\n" +
      "Which topic interests you the most?",
      "Let's start with the basics! Would you like to learn about:\n\n" +
      "• Social Media & Messaging\n" +
      "• Online Payments & Banking\n" +
      "• Video Calls & Meetings\n" +
      "• Basic Computer Skills\n\n" +
      "Just let me know what you'd like to explore!",
    ],
    followUp: "Is there a specific aspect of this topic you'd like to learn more about?"
  },
  design: {
    keywords: ['design', 'graphic', 'photoshop', 'canva', 'draw', 'edit'],
    responses: [
      "Great choice! Let's explore digital design tools. Here are some beginner-friendly options:\n\n" +
      "1. Canva - Perfect for beginners\n" +
      "   • Create social media posts\n" +
      "   • Design presentations\n" +
      "   • Make simple graphics\n\n" +
      "2. Basic Photo Editing\n" +
      "   • Crop and resize images\n" +
      "   • Add text and filters\n" +
      "   • Create collages\n\n" +
      "Would you like to start with Canva? It's free and very user-friendly!",
      "I'd be happy to guide you through digital design! Let's begin with:\n\n" +
      "• Basic design principles\n" +
      "• Free design tools for beginners\n" +
      "• Simple photo editing\n" +
      "• Creating social media graphics\n\n" +
      "Which of these interests you the most?"
    ],
    followUp: "Would you like to see some examples of what you can create with these tools?"
  },
  messaging: {
    keywords: ['whatsapp', 'message', 'chat', 'telegram', 'social'],
    responses: [
      "Let's learn about messaging apps! Here's what we can cover:\n\n" +
      "1. WhatsApp Basics\n" +
      "   • Sending messages and photos\n" +
      "   • Making voice and video calls\n" +
      "   • Creating groups\n" +
      "   • Using WhatsApp Web\n\n" +
      "2. Telegram Features\n" +
      "   • Secure messaging\n" +
      "   • File sharing\n" +
      "   • Channels and groups\n\n" +
      "Which app would you like to learn about first?",
    ],
    followUp: "Would you like a step-by-step guide for any specific feature?"
  },
  payments: {
    keywords: ['pay', 'payment', 'paytm', 'upi', 'bank', 'money', 'transfer'],
    responses: [
      "Let's explore digital payments! Here's what we can learn:\n\n" +
      "1. UPI Payments\n" +
      "   • Setting up UPI\n" +
      "   • Making secure transfers\n" +
      "   • Using QR codes\n\n" +
      "2. Paytm Features\n" +
      "   • Mobile recharges\n" +
      "   • Bill payments\n" +
      "   • Money transfers\n\n" +
      "Which payment method would you like to learn about?",
    ],
    followUp: "Would you like to know about safety tips for digital payments?"
  },
  navigation: {
    keywords: ['map', 'location', 'direction', 'travel', 'google maps'],
    responses: [
      "Let's learn about navigation tools! Here's what we can explore:\n\n" +
      "1. Google Maps Basics\n" +
      "   • Finding places\n" +
      "   • Getting directions\n" +
      "   • Saving locations\n" +
      "   • Using offline maps\n\n" +
      "2. Travel Planning\n" +
      "   • Public transport routes\n" +
      "   • Traffic updates\n" +
      "   • Nearby places\n\n" +
      "What would you like to learn first?",
    ],
    followUp: "Would you like to know how to save your favorite places?"
  },
  videoCalls: {
    keywords: ['zoom', 'meet', 'google meet', 'video call', 'video chat', 'online meeting'],
    responses: [
      "Let's learn about video calling tools! Here's what we can cover:\n\n" +
      "1. Google Meet Basics\n" +
      "   • Starting a meeting\n" +
      "   • Joining a meeting\n" +
      "   • Using chat during calls\n" +
      "   • Screen sharing\n" +
      "   • Managing participants\n\n" +
      "2. Zoom Features\n" +
      "   • Creating a meeting\n" +
      "   • Joining with a link\n" +
      "   • Using virtual backgrounds\n" +
      "   • Breakout rooms\n" +
      "   • Recording meetings\n\n" +
      "Which platform would you like to learn about first?",
      "I'd be happy to guide you through video calling! Let's start with:\n\n" +
      "• Setting up your first video call\n" +
      "• Basic controls (mute, camera, chat)\n" +
      "• Inviting others to join\n" +
      "• Screen sharing and presentations\n" +
      "• Troubleshooting common issues\n\n" +
      "What would you like to learn first?"
    ],
    followUp: "Would you like a step-by-step guide for any specific feature?"
  }
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm DigiBuddy, your digital literacy assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check each category in the knowledge base
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        // Randomly select a response from the category
        const response = data.responses[Math.floor(Math.random() * data.responses.length)];
        return response;
      }
    }

    // Default response if no category matches
    return "I understand you're interested in learning digital tools. Could you please specify which area you'd like to explore? For example:\n\n" +
           "• Messaging apps (WhatsApp, Telegram)\n" +
           "• Digital payments (Paytm, UPI)\n" +
           "• Navigation (Google Maps)\n" +
           "• Basic design tools\n" +
           "• Video calls (Zoom, Google Meet)";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
            <SparklesIcon className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Chat with DigiBuddy
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Your friendly AI assistant for digital literacy
          </p>
        </motion.div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-[600px] flex flex-col">
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-4 ${
                          message.sender === 'user'
                            ? 'bg-primary-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-900 shadow-sm'
                        }`}
                      >
                        <p className="whitespace-pre-line text-[15px] leading-relaxed">
                          {message.text}
                        </p>
                        <p className={`text-xs mt-2 ${
                          message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isLoading && (
                  <motion.div 
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="bg-gray-100 rounded-2xl p-4 shadow-sm">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input form */}
              <form onSubmit={handleSubmit} className="border-t border-gray-100 p-4 bg-white">
                <div className="flex space-x-4">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className={`inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-medium transition-all duration-200 ${
                      isLoading || !input.trim()
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <PaperAirplaneIcon className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 