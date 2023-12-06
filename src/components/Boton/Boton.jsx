import React from "react";
const Boton = ({
    num,
    oper,
    agregar,
    cambioOper,
    borrar,
    calcular,
    btnOper,
    btnNum,
  }) => {
    return (
      <button
        className={btnOper ? btnOper : btnNum}
        id={oper ? oper : num}
        onClick={
          agregar || borrar || calcular
            ? agregar || borrar || calcular
            : cambioOper
        }
      >
        {oper ? oper : num}
      </button>
    );
  };
  
  export default Boton;