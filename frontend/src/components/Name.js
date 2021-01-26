import React from 'react';

export default function Name({ children }) {
  return <div style={styleName.font}>{children}</div>;
}

const styleName = {
  font: {
    fontWeight: 'bold',
    fontSize: '15px',
  },
};
