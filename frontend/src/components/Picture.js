import React from 'react';

export default function Picture({ imageSource, description }) {
  return (
    <div>
      <img
        style={stylePicture.picture}
        src={imageSource}
        alt={description}
        title={description}
      />
    </div>
  );
}

const stylePicture = {
  picture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginRight: '10px',
  },
};
