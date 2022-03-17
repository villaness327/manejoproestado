import React from 'react';

//Creacion de un react hook de estado, mediante React.useState


function UseState({name}){

   const [error,setError]=React.useState(true);
   const [loading,setLoading]=React.useState(false);
   //Se crea el estado

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>
            {error && (<p>Error: El código es incorrecto</p>)}
            {loading && (<p>Loading...</p>)}
            <div><input placeholder="Codigo de seguridad"/><button onClick={()=>setLoading(!error)}>Comprobar</button></div> 
            
        </div>
    );  

}


export {UseState};