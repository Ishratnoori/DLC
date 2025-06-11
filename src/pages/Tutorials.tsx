import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface TutorialCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  videoUrl?: string;
  category: 'messaging' | 'payments' | 'navigation' | 'video-calls' | 'social' | 'utilities';
}

const tutorials: TutorialCard[] = [
  {
    id: 1,
    title: 'WhatsApp Basics',
    description: 'Learn to send messages, make calls, and share media with your loved ones.',
    icon: '💬',
    category: 'messaging',
    videoUrl: 'https://www.youtube.com/embed/placeholder1'
  },
  {
    id: 2,
    title: 'Paytm Payments',
    description: 'Master digital payments, bill payments, and money transfers safely.',
    icon: '💰',
    category: 'payments',
    videoUrl: 'https://www.youtube.com/embed/placeholder2'
  },
  {
    id: 3,
    title: 'Google Maps',
    description: 'Navigate your city, find places, and get directions easily.',
    icon: '🗺️',
    category: 'navigation',
    videoUrl: 'https://www.youtube.com/embed/placeholder3'
  },
  {
    id: 4,
    title: 'Zoom Video Calls',
    description: 'Connect with family and friends through video calls.',
    icon: '📹',
    category: 'video-calls',
    videoUrl: 'https://www.youtube.com/embed/placeholder4'
  },
  {
    id: 5,
    title: 'Facebook Basics',
    description: 'Stay connected with friends and family on social media.',
    icon: '👥',
    category: 'social',
    videoUrl: 'https://www.youtube.com/embed/placeholder5'
  },
  {
    id: 6,
    title: 'Google Photos',
    description: 'Organize, share, and backup your precious memories.',
    icon: '📸',
    category: 'utilities',
    videoUrl: 'https://www.youtube.com/embed/placeholder6'
  }
];

const categories = [
  { id: 'all', name: 'All Tutorials' },
  { id: 'messaging', name: 'Messaging Apps' },
  { id: 'payments', name: 'Digital Payments' },
  { id: 'navigation', name: 'Navigation' },
  { id: 'video-calls', name: 'Video Calls' },
  { id: 'social', name: 'Social Media' },
  { id: 'utilities', name: 'Utilities' }
];

export default function Tutorials() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredTutorials = selectedCategory === 'all'
    ? tutorials
    : tutorials.filter(tutorial => tutorial.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Digital Tutorials
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn to use popular apps and tools with our easy-to-follow tutorials
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative p-8">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {tutorial.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tutorial.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tutorial.description}
                </p>
                {tutorial.videoUrl && (
                  <div className="aspect-w-16 aspect-h-9 mb-6 rounded-xl overflow-hidden shadow-md">
                    <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
                      <PlayCircleIcon className="h-16 w-16 text-primary-600 opacity-75" />
                    </div>
                  </div>
                )}
                <button className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md">
                  Start Learning
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 