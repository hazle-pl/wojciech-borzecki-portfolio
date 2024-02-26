import React from 'react';

const Loader: React.FC = () => {


  return (
    <div className="loading-overlay">
      <div className="loader">
        <div className="bar"/>
      </div>
    </div>
  );
};

export default Loader;
