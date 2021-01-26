import React from 'react';

export default function Position({ children }) {
  return <div style={stylePosition.position}>{children}</div>;
}
const stylePosition = {
  position: {
    marginRight: '10px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};
