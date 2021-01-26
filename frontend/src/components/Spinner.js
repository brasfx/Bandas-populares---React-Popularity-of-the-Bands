import React from 'react';

export default function Spinner({ description }) {
  return (
    <div>
      <div className="container center" style={styleSpiner.flexRow}>
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div style={styleSpiner.text}>{description}</div>
      </div>
    </div>
  );
}

const styleSpiner = {
  flexRow: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: '20px',
    fontSize: '25px',
    color: 'white',
  },
};
