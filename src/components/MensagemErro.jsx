import React from 'react';
import './MensagemErro.css';

const MensagemErro = () => {
  return (
    <div className="error-message">
      <h1>Oh... Oh...</h1>
      <p>Something went wrong and we can't display the requested content right now. Please try again later.</p>
    </div>
  );
}

export default MensagemErro;