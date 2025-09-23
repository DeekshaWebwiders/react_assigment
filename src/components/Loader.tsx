import React from 'react';

const Loader: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <span
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      border: '2px solid #ccc',
      borderTop: '2px solid #333',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      verticalAlign: 'middle'
    }}
  />
);

// Add keyframes for spin animation in your global CSS:
// @keyframes spin { 100% { transform: rotate(360deg); } }

export default Loader;
