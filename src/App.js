import './App.css';
import Boton from './Components/boton';
import './styles/boton.css'
import Pantalla from './Components/pantalla';
import './styles/pantalla.css';
import BotonLimpiar from './Components/botonlimpiar';
import './styles/botonlimpiar.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  let [input, setInput] = useState("")
  
 const agregarValor=valor=>{
  setInput(input+ valor)
 }
 
 const calcularResultado =()=>{
 try {
  setInput(evaluate(input));
 } catch (error) {
  alert("Elija Un Numero Valido")
  setInput(input=" ")
 }
}

  return (
    <div className="App">
     <div className="calculator-container">
      <Pantalla
      input={input}
      />
     <div className="Fila">
      <Boton manejarclick={agregarValor}>1</Boton>
      <Boton manejarclick={agregarValor}>2</Boton>
      <Boton manejarclick={agregarValor}>3</Boton>
      <Boton manejarclick={agregarValor}>+</Boton>
     </div>
     <div className="Fila">
     <Boton manejarclick={agregarValor}>4</Boton>
      <Boton manejarclick={agregarValor}>5</Boton>
      <Boton manejarclick={agregarValor}>6</Boton>
      <Boton manejarclick={agregarValor}>-</Boton>
     </div>
     <div className="Fila">
     <Boton manejarclick={agregarValor}>7</Boton>
      <Boton manejarclick={agregarValor}>8</Boton>
      <Boton manejarclick={agregarValor}>9</Boton>
      <Boton manejarclick={agregarValor}>*</Boton>
     </div>
     <div className="Fila">
     <Boton manejarclick={calcularResultado}>=</Boton>
      <Boton manejarclick={agregarValor}>0</Boton>
      <Boton manejarclick={agregarValor}>.</Boton>
      <Boton manejarclick={agregarValor}>/</Boton>
     </div>
     <div className="Fila">
      <BotonLimpiar limpiar={() => setInput(" ")}> Clear</BotonLimpiar>
      
     </div>
     </div>
    </div>
  );
}

export default App;
