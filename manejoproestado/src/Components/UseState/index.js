import React from 'react';

//Creacion de un react hook de estado, mediante React.useState


function UseState({name}){

   const [error,setError]=React.useState(true);
   const [loading,setLoading]=React.useState(false);
   //Se crea el estado


   React.useEffect(()=>{

        console.log(loading);
        console.log("Empezando efecto useEffect");


        if (!!loading){ //Si Loading es True


            setTimeout(()=>{

                 console.log("Consulta la BackEnd");

                 console.log("Muestra de datos desde BackEnd");

            },3000); //Se espera 5 seg para ejecutarse
        }


        console.log("Terminando el efecto useEffect");



   },[loading]) //Se ejecuta solo cuando cambia el estado de Loading

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>
            {error && (<p>Error: El código es incorrecto</p>)}
            {loading && (<p>Cargando...</p>)}
            <div><input placeholder="Codigo de seguridad"/><button onClick={()=>setLoading(!loading)}>Comprobar</button></div> 
            
        </div>
    );  

}


export {UseState};