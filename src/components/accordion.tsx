'use client'
import React, { useState } from 'react';
import RichText from '../utils/rich-text';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  paddingBottom?: string;
  paddingTop?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, paddingTop, paddingBottom}) => {
  const [isOpen, setIsOpen] = useState(false);
  const paddingdTopClass = paddingTop ? `padding-top-${paddingTop}` : 'padding-top-0';
  const paddingdBottomClass = paddingBottom ? `padding-bottom-${paddingBottom}` : 'padding-bottom-0';

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'active' : ''} ${paddingdTopClass} ${paddingdBottomClass}`}>
      <div className='accordion-header' onClick={handleToggle}>
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`}></i>
        <RichText>
          {title}
        </RichText>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
