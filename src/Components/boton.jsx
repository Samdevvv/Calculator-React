import React from "react";

function Boton(props){
   const esOperador =valor=>{
    
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
   }


   
    return(
  <div className={`boton-contenedor ${esOperador(props.children) ? 'operador': null}`} onClick={() =>props.manejarclick(props.children)} >
    {props.children}
  </div>

   );

}

export default Boton;