import React from 'react';

const Loader = ({ size = 'md', fullPage = false }) => {
  const loaderClass = `loader loader-${size}`;
  
  if (fullPage) {
    return (
      <div className="loader-container full-page">
        <span className={loaderClass} />
        <p>Loading...</p>
      </div>
    );
  }

  return <span className={loaderClass} />;
};

export default Loader;
