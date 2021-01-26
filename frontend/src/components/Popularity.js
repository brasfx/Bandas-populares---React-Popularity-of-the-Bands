import React from 'react';
const stars = {
  full: '★',
  empty: '☆',
};
const maxStars = 10;

export default function Popularity({ value }) {
  const fullStars = stars.full.repeat(value);
  const emptyStars = stars.empty.repeat(maxStars - value);
  return (
    <div style={stylePopularity.color}>
      {fullStars}
      {emptyStars}
    </div>
  );
}

const stylePopularity = {
  color: {
    color: '#FFD700',
    fontSize: '30px',
  },
};
