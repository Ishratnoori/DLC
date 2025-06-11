import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AccessibilityToolbar from './components/AccessibilityToolbar';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import Chat from './pages/Chat';
import Feedback from './pages/Feedback';

// Accessibility context
interface AccessibilityContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const AccessibilityContext = React.createContext<AccessibilityContextType>({
  fontSize: 16,
  setFontSize: () => {},
  highContrast: false,
  setHighContrast: () => {},
  language: 'en',
  setLanguage: () => {},
});

function App() {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        language,
        setLanguage,
      }}
    >
      <Router>
        <div 
          className={`min-h-screen bg-gray-50 ${highContrast ? 'contrast-150' : ''}`}
          style={{ fontSize: `${fontSize}px` }}
        >
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </main>
          <AccessibilityToolbar />
        </div>
      </Router>
    </AccessibilityContext.Provider>
  );
}

export default App; 