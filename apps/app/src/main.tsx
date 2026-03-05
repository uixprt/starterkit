import React from 'react';
import ReactDOM from 'react-dom/client';
import '@a/elements'; // Import and register custom elements FIRST
import App from './App';

// Debug: Check if custom elements are registered
console.log('Custom elements check:');
console.log('a-svg defined:', customElements.get('a-svg'));
console.log('a-button defined:', customElements.get('a-button'));

// Add a small delay to ensure registration completes
const mount = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

// Check if elements are defined, if not wait
if (customElements.get('a-svg') && customElements.get('a-button')) {
  mount();
} else {
  console.log('Waiting for custom elements to be defined...');
  Promise.all([
    customElements.whenDefined('a-svg'),
    customElements.whenDefined('a-button'),
  ]).then(() => {
    console.log('Custom elements are now defined!');
    mount();
  });
}
