'use client'
import React, { useState, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface TabsProps {
  children: ReactNode;
  paddingBottom?: string;
  paddingTop?: string;
}

const Tabs: React.FC<TabsProps> = ({ children, paddingTop, paddingBottom }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const paddingdTopClass = paddingTop ? `padding-top-${paddingTop}` : 'padding-top-0';
  const paddingdBottomClass = paddingBottom ? `padding-bottom-${paddingBottom}` : 'padding-bottom-0';

  return (
    <>
      <div ref={ref} className={`tabs-container  ${inView ? 'visible' : 'not-visible'} ${paddingdTopClass} ${paddingdBottomClass}`}>
        <div className='tab-navigation'>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return (
              <div
                className={`tab ${index === activeTab ? 'active' : ''}`}
                onClick={() => handleTabClick(index)}
              >
                {child.props.label}
              </div>
            );
          }
          return null;
        })}
        </div>
        <div className='tab-content'>{React.Children.toArray(children)[activeTab]}</div>
      </div>
    </>
  );
};

export default Tabs;