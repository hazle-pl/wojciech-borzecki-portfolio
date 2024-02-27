import React, { ReactNode } from 'react';

interface CardProps {
  backgroundImage?: string;
  backgroundColor?: string;
  id?: string;
  children?: ReactNode;
  href?: string;
}

const Card: React.FC<CardProps> = ({ backgroundImage, backgroundColor, id, children, href }) => {

  const customId = id ? `${id}` : '';
  const bgColor = backgroundColor ? `bg-${backgroundColor}` : '';
  const backgroundImageStyle = backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {};

  return (
    <>
    {href? (
    <a href={href} target='_blank' id={customId} className={`card ${bgColor}`} style={{ ...backgroundImageStyle }}>
      {children}
    </a>):
    (<div id={customId} className={`card ${bgColor}`} style={{ ...backgroundImageStyle }}>
      {children}
    </div>)}
    </>
  );
};

export default Card;
