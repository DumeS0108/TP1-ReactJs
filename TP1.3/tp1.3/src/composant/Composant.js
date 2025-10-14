import React, { useState } from 'react';

const ComposantSurvole = ({ couleur = 'red' }) => {
  const [color, setColor] = useState(couleur);


  const colors = ['red', 'blue', 'green'];

 
  const changeColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div>
      <div 
        style={{ color, cursor: 'pointer' }}
        onMouseEnter={changeColor}>
        Je suis un composant
      </div>
    </div>
  );
};

export default ComposantSurvole;
