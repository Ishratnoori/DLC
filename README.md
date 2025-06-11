# Digital Literacy Course (DLC) Website

[![Deployment Status](https://vercel.com/api/v1/deployments/digital-literacy-course/status)](https://vercel.com/mini-project/digital-literacy-course)

A modern web application designed to help parents and elderly users learn digital tools easily. The website provides interactive tutorials, an AI chatbot assistant, and accessibility features to make digital learning accessible to everyone.

## Features

- 📱 **Interactive Tutorials**: Step-by-step guides for popular apps like WhatsApp, Paytm, and Google Maps
- 🤖 **AI Chatbot (DigiBuddy)**: Get instant help and answers to your digital literacy questions
- 🌐 **Accessibility Features**: 
  - Adjustable font sizes
  - High contrast mode
  - Multi-language support
  - Voice commands (coming soon)
- 📝 **Feedback System**: Share your thoughts and suggestions to help improve the platform

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Headless UI
- Hero Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ishratnoori/DLC.git
cd DLC/dlc-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
dlc-website/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML template
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Accessibility Features

- Adjustable font sizes
- Voice command support
- High contrast mode
- Screen reader friendly
- Keyboard navigation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [Heroicons](https://heroicons.com/)
- UI Components by [Headless UI](https://headlessui.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
