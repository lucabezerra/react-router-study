import React from 'react';


export const Meme = ({ url }) => {
  return (
    <div>
      <img alt="Some random meme." src={url} />
    </div>);
}

export default Meme;
