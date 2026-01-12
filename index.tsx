import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Dynamic Injection to ensure "Visual Aesthetics" while keeping index.html clean as requested.
// This allows the app to function in a raw preview environment without build steps,
// while strictly adhering to the user's constraint of "Zero Scripts in index.html".
const injectStyles = () => {
  if (document.getElementById('tailwind-script')) return;

  // Inject Google Fonts (Oswald)
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=Pretendard:wght@300;400;600&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  // Inject Tailwind
  const script = document.createElement('script');
  script.src = 'https://cdn.tailwindcss.com';
  script.id = 'tailwind-script';
  script.onload = () => {
    // @ts-ignore
    window.tailwind.config = {
      theme: {
        extend: {
          colors: {
            'neon-green': '#39FF14',
            'deep-black': '#000000',
            'off-white': '#F5F5F5',
          },
          fontFamily: {
            serif: ['Oswald', 'sans-serif'],
            sans: ['Pretendard', 'sans-serif'],
          },
          letterSpacing: {
            tighter: '-0.05em',
            widest: '0.15em',
          }
        },
      },
    };
  };
  document.head.appendChild(script);
};

injectStyles();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);