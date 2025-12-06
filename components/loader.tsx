import React from 'react';

interface LoaderProps {
  text?: string; // Optional text to display below the loader
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <img
          src="loader.gif" // Replace with the path to your loader GIF
          alt="Loading..."
          className="w-16 h-16 mx-auto animate-spin"
        />
        {text && <p className="text-center mt-2">{text}</p>}
      </div>
    </div>
  );
};

export default Loader;
