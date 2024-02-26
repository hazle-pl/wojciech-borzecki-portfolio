import React, { ReactNode } from 'react';

interface HeroBannerProps {
  children?: ReactNode;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ children}) => {


  return (
    <div className={`hero-banner`}>
     {children}
    </div>
  );
};

export default HeroBanner;
