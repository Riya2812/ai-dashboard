import React from 'react';
import './Card.css';

const Card = ({ title, value }) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
};

export default Card;
