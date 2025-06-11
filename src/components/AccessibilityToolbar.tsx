import React, { useContext } from 'react';
import { AccessibilityContext } from '../App';
import { motion } from 'framer-motion';

export default function AccessibilityToolbar() {
  const {
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    language,
    setLanguage,
  } = useContext(AccessibilityContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 space-y-4 z-50"
    >
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setFontSize(Math.max(12, fontSize - 2))}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Decrease font size"
        >
          A-
        </button>
        <span className="text-sm">Font Size</span>
        <button
          onClick={() => setFontSize(Math.min(24, fontSize + 2))}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Increase font size"
        >
          A+
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => setHighContrast(!highContrast)}
          className={`p-2 rounded-lg ${
            highContrast ? 'bg-primary-600 text-white' : 'bg-gray-100'
          }`}
          aria-label="Toggle high contrast"
        >
          High Contrast
        </button>
      </div>

      <div className="flex items-center space-x-2">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="rounded-lg border border-gray-300 px-2 py-1 text-sm"
          aria-label="Select language"
        >
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
          <option value="ta">தமிழ்</option>
          <option value="te">తెలుగు</option>
          <option value="bn">বাংলা</option>
        </select>
      </div>

      <button
        onClick={() => {
          // TODO: Implement voice commands
          alert('Voice commands coming soon!');
        }}
        className="w-full p-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700"
        aria-label="Enable voice commands"
      >
        🎤 Voice Commands
      </button>
    </motion.div>
  );
} 