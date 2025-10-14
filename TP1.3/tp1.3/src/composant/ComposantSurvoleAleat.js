import React, { useState } from 'react';

const ComposantSurvole = ({ couleur = '#000000' }) => {
  const [color, setColor] = useState(couleur);

  // Fonction qui génère une couleur aléatoire
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div 
      style={{ color, cursor: 'pointer' }}
      onMouseEnter={changeColor}
    >
      Je suis un composant
    </div>
  );
};

export default ComposantSurvole;
