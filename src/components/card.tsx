import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface CardProps {
  backgroundImage?: string;
  backgroundColor?: string;
  id?: string;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ backgroundImage, backgroundColor, id, children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const customId = id ? `${id}` : '';
  const bgColor = backgroundColor ? `bg-${backgroundColor}` : '';
  const backgroundImageStyle = backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {};

  return (
    <div id={customId} ref={ref} className={`card ${bgColor} ${inView ? 'visible' : 'not-visible'}`} style={{ ...backgroundImageStyle }}>
      {children}
    </div>
  );
};

export default Card;
