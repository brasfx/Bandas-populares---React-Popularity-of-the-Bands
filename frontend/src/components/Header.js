import React from 'react';

export default function Header({ children }) {
  return <h1 style={styleHeader.position}>{children}</h1>;
}

const styleHeader = {
  position: {
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '12px',

    borderRadius: '10',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    backgroundColor: 'white',
    width: '1050px',
    height: '150px',
    paddingTop: '30px',
  },
};
