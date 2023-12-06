import React,{ useState } from "react";
import Boton from "./components/Boton/Boton.jsx";

import Pantalla from "./components/Pantalla/Pantalla.jsx";
import "./App.css";
import Styles from "./components/Estilos.js";

export default function App() {
  const [pantalla, setPantalla] = useState(["0"]);
  var [resultado, setResultado] = useState("");
  var [num1, setNum1] = useState(0);
  var [num2, setNum2] = useState(0);
  const [cambio, setCambio] = useState(false);
  const [error, setError] = useState("");
  var [operador, setOperador] = useState("");

  const cambioOper = (id) => {
    setCambio(true);
    setOperador(id.target.id);
    setPantalla(["0"]);
  };
  const agregar = (id) => {
    console.log(id.target.id);

    if (!cambio) {
      if (num1 === 0) {
        setNum1(id.target.id);
        setPantalla([id.target.id]);
      } else {
        setNum1(num1 + id.target.id);
        setPantalla([...pantalla, id.target.id]);
      }
    } else if (cambio) {
      if (num2 === 0) {
        setNum2(id.target.id);
        setPantalla([id.target.id]);
      } else {
        setNum2(num2 + id.target.id);
        setPantalla([...pantalla, id.target.id]);
      }
    }
  };

  const borrar = () => {
    setNum1(0);
    setNum2(0);
    setPantalla(["0"]);

    setResultado("");
    setOperador("");
  };
  const calcular = () => {
    console.log(num1);
    console.log(num2);
    console.log(operador);
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (num2 !== 0) {
      operador === "/"
        ? setResultado((parseFloat(num1) / parseFloat(num2)).toFixed(15))
        : null;
    } else {
      setError(
        <p
          style={{
            width: "100%",
            fontSize: "22px",
            //paddingLeft: "15px",
            textAlign: "left",
          }}
        >
          E
        </p>,
      );
      setTimeout(() => {
        setError("");
        setPantalla(["0"]);
        borrar();
      }, 4000);
    }
    operador === "+" ? setResultado(parseFloat(num1) + parseFloat(num2)) : null;
    operador === "-" ? setResultado(parseFloat(num1) - parseFloat(num2)) : null;
    operador === "*" ? setResultado(parseFloat(num1) * parseFloat(num2)) : null;

    return resultado, console.log(resultado), setCambio(false), setOperador("");
  };

  const classes = Styles();
  return (
    <div className="App">
      {/*<Header header={classes.header} h1={classes.h1} />*/}
      <div className={classes.calculadora}>
        <h4>hello</h4>
        <Pantalla
          estiloPantalla={classes.estiloPantalla}
          pantalla={
            !resultado && !error ? pantalla.slice(0, 16) : error || resultado
          }
        />
        <div>
          <Boton
            btnNum={classes.btnNum}
            num={1}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnNum={classes.btnNum}
            num={2}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnNum={classes.btnNum}
            num={3}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnOper={classes.btnOper}
            oper="+"
            cambioOper={(id) => cambioOper(id)}
          ></Boton>
        </div>
        <div>
          <Boton
            btnNum={classes.btnNum}
            num={4}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnNum={classes.btnNum}
            num={5}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnNum={classes.btnNum}
            num={6}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnOper={classes.btnOper}
            oper="-"
            cambioOper={(id) => cambioOper(id)}
          ></Boton>
        </div>
        <div>
          <Boton
            btnNum={classes.btnNum}
            num={7}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnNum={classes.btnNum}
            num={8}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnNum={classes.btnNum}
            num={9}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnOper={classes.btnOper}
            oper="*"
            cambioOper={(id) => cambioOper(id)}
          ></Boton>
        </div>
        <div>
          <Boton
            btnOper={classes.btnOper}
            oper="C"
            borrar={() => borrar()}
          ></Boton>
          <Boton
            btnNum={classes.btnNum}
            num={0}
            agregar={(id) => agregar(id)}
          ></Boton>
          <Boton
            btnOper={classes.btnOper}
            oper="="
            calcular={() => calcular()}
          ></Boton>
          <Boton
            btnOper={classes.btnOper}
            oper="/"
            cambioOper={(id) => cambioOper(id)}
          ></Boton>
        </div>
      </div>
    </div>
  );
}