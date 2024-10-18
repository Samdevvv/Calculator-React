import React from "react";

const BotonLimpiar = (props) =>(
   
    <div className="botonlimpiar" onClick={props.limpiar} >
    {props.children}
    </div>

   
);

export default BotonLimpiar;