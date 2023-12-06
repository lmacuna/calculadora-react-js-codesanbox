import { makeStyles } from "@material-ui/core";

const Styles = makeStyles({
  calculadora: {
    marginTop: "30px",
    width: "22em",
    height: "29em",
    padding: "50px 0px 25px 0px",
    background: "white",
    border: "1px solid grey",
    margin: "auto",
  },
  header: {
    width: "100%",
    padding: "20px",
    display: "none",
    justifyContent: "center",
    alignItems: "center",
    background: "darkblue",
  },
  h1: {
    color: "white",
  },
  estiloPantalla: {
    padding: "10px",
    width: "80%",
    height: "50px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    border: "1px solid grey",
    borderRadius: "20px",
    fontWeight: "bold",
    margin: "auto",
    marginBottom: "40px !important",
    fontSize: "28px",
  },
  btnNum: {
    background: "black",
    color: "white",
    width: "60px",
    height: "60px",
    fontSize: "22px",
    border: "none",
    margin: "5px",
    fontWeight: "bold",
    borderRadius: "50%",
  },
  btnOper: {
    background: "orangered",
    color: "black",
    width: "60px",
    height: "60px",
    fontSize: "22px",
    border: "none",
    margin: "5px",
    fontWeight: "bold",
    borderRadius: "50%",
  },
});

export default Styles;
