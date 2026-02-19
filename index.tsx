import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18n'; // Initialize i18next

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen bg-[#05050A] text-white">
          Loading...
        </div>
      }>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);