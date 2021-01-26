import React from 'react';

export default function Card({ children }) {
  return (
    <div className="card" style={styleCard.size}>
      {children}
    </div>
  );
}

const styleCard = {
  size: {
    padding: '10px',
    margin: '10px',
  },
};

//Poderia ter usado um module.css para estilizar e concatenar com o card
//sendo definido dentro do className
// EX: const classes = `card ${css.card}`
