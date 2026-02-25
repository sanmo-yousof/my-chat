import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiAlertCircle } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="text-center">
        {/* Animated 404 text */}
        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold text-white/10 animate-pulse">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <FiAlertCircle className="text-6xl text-white/50" />
          </div>
        </div>

        {/* Error message */}
        <h2 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to home button */}
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 
                     backdrop-blur-sm border border-white/20 rounded-xl text-white 
                     font-medium transition-all duration-300 group"
        >
          <FiHome className="text-xl group-hover:scale-110 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;