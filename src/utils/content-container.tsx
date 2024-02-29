import React from 'react';

interface ContentContainerProps {
  children: React.ReactNode;
  width?: number;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, width }) => (
  <div className={`content-container w-${width}`}>
    {children}
  </div>
);

export default ContentContainer;
