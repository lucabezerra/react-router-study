import React from 'react';


export const Meme = ({ url }) => {
  console.log(':::: url:', url);
  return (
    <div>
      <img src={url} />
    </div>);
}

export default Meme;
