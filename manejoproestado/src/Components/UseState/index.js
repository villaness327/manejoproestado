import React from 'react';

//Creacion de un react hook de estado, mediante React.useState

const CODE_SEC="paradigma";

function UseState({name}){

   const [error,setError]=React.useState(false);
   const [loading,setLoading]=React.useState(false);
   const [value,setValue]=React.useState('');
   //Se crea el estado


   React.useEffect(()=>{

  
        console.log("Empezando efecto useEffect");


        if (!!loading){ //Si Loading es True

            setTimeout(()=>{

                 console.log("Consulta al  BackEnd");

                 if(value === CODE_SEC){
                    setLoading(false);   
                    setError(false);
                 }else{
                    setLoading(false);
                    setError(true);
                 }
               

            },3000); //Se espera 3 seg para ejecutarse
        }

        console.log("Terminando el efecto useEffect");

   },[loading]) //Se ejecuta solo cuando cambia el estado de Loading

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>
            {(error && !loading) &&(<p>Error: El código es incorrecto</p>)}
            {loading && (<p>Cargando...</p>)}
            <div><input placeholder="Codigo de seguridad" value={value} 
                onChange={(event)=>setValue(event.target.value)}/>
                <button onClick={()=>{
                    setLoading(true);               
                    
                    }}>Comprobar</button>
            </div> 
            
        </div>
    );  
}


export {UseState};