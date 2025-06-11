import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChatBubbleLeftRightIcon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-600/90 to-primary-600/50" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl font-bold tracking-tight text-white sm:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Empowering Digital Literacy!
            </motion.h1>
            <motion.p 
              className="mt-8 text-xl leading-8 text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Learn essential digital tools and skills in a simple, friendly way. 
              Perfect for parents and elderly users who want to stay connected in today's digital world.
            </motion.p>
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link 
                to="/tutorials" 
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-primary-600 bg-white rounded-xl hover:bg-primary-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start Learning
                <AcademicCapIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/chat" 
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-white/10 rounded-xl hover:bg-white/20 transition-colors duration-200 backdrop-blur-sm"
              >
                Chat with DigiBuddy
                <ChatBubbleLeftRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Digital Literacy Course?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We've designed our platform with your needs in mind, making digital learning accessible and enjoyable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8">
                <div className="h-12 w-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Tutorials</h3>
                <p className="text-gray-600 leading-relaxed">
                  Step-by-step guides for popular apps like WhatsApp, Paytm, and Google Maps.
                  Learn at your own pace with clear instructions and visual aids.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8">
                <div className="h-12 w-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Assistant</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant help from DigiBuddy, our friendly AI assistant.
                  Ask questions anytime and get clear, simple answers tailored to your needs.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8">
                <div className="h-12 w-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                  <SparklesIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Designed for everyone with adjustable text sizes, voice commands,
                  and multiple language support. Your comfort is our priority.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 