import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

interface FeedbackForm {
  name: string;
  email: string;
  feedbackType: 'suggestion' | 'bug' | 'praise' | 'other';
  message: string;
  rating: number;
}

export default function Feedback() {
  const [formData, setFormData] = useState<FeedbackForm>({
    name: '',
    email: '',
    feedbackType: 'suggestion',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual API call to save feedback
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitSuccess(true);
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      feedbackType: 'suggestion',
      message: '',
      rating: 5
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
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
            <StarIcon className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Share Your Feedback
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Help us improve your digital literacy experience
          </p>
        </motion.div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-16 px-8"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                    <CheckCircleIcon className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Thank You for Your Feedback!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Your input helps us make the Digital Literacy Course better for everyone.
                    We appreciate your time and valuable suggestions.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="p-8 space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-900">
                      Feedback Type
                    </label>
                    <select
                      name="feedbackType"
                      id="feedbackType"
                      required
                      value={formData.feedbackType}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow duration-200"
                    >
                      <option value="suggestion">Suggestion</option>
                      <option value="bug">Bug Report</option>
                      <option value="praise">Praise</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-900">
                      How would you rate your experience?
                    </label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <button
                          key={rating}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, rating }))}
                          className={`p-1 rounded-lg transition-colors duration-200 ${
                            formData.rating >= rating
                              ? 'text-yellow-400 hover:text-yellow-500'
                              : 'text-gray-300 hover:text-gray-400'
                          }`}
                          aria-label={`Rate ${rating} stars`}
                        >
                          <StarIcon className="h-8 w-8" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow duration-200 resize-none"
                      placeholder="Share your thoughts, suggestions, or concerns..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center px-8 py-3 rounded-xl text-white font-medium transition-all duration-200 ${
                        isSubmitting
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-primary-600 hover:bg-primary-700 shadow-sm hover:shadow-md'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Submit Feedback'
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
} 