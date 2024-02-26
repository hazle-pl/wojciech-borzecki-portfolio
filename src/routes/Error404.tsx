import React from 'react';
import RichText from '../utils/rich-text';



const Error404: React.FC = () => {

  return (
    <div className="error-404">
      <RichText>
        <h1>Ooops!</h1>
        <h3>404- PAGE NOT FOUND</h3>
        <a href="#about" className="primary-btn">Wróć na stronę główną<i className="fa-solid fa-arrow-right"></i></a>
      </RichText>
    </div>
  );
};

export default Error404;
