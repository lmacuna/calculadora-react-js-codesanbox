import React from 'react';

const Pantalla = ({ pantalla, estiloPantalla }) => {
    return <div className={estiloPantalla}>{pantalla}</div>;
  };
  
  export default Pantalla;