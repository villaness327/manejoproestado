import React from 'react';

//Creacion de un react hook de estado, mediante React.useState

const CODE_SEC="paradigma";

//Creacion de Estados compuestos en React.useState

function UseState({name}){

  const [state, setState]=React.useState({
    error:false,
    loading:false,
    value:'',
  });


//    const [error,setError]=React.useState(false);
//    const [loading,setLoading]=React.useState(false);
//    const [value,setValue]=React.useState('');
//    //Se crea el estado
    console.log(state);
    console.log(state.value);
    React.useEffect(()=>{      
     
        console.log("Empezando efecto useEffect");

        if (!!state.loading){ //Si Loading es True

            setTimeout(()=>{

                 console.log("Consulta al  BackEnd");

                 if(state.value === CODE_SEC){
                   
                   setState({
                    ...state,
                    loading:false,
                    error:false,
                   });                 
             
                 }else{
                    setState({
                        ...state,
                        loading:false,
                        error:true,
                       });
                 }               

            },3000); //Se espera 3 seg para ejecutarse
        }

        console.log("Terminando el efecto useEffect");

   },[state.loading]) //Se ejecuta solo cuando cambia el estado de Loading

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Por favor, escribe el codigo de seguridad.</p>
            {(state.error && !state.loading) &&(<p>Error: El código es incorrecto</p>)}
            {state.loading && (<p>Cargando...</p>)}
            <div><input placeholder="Codigo de seguridad" value={state.value} 
                onChange={(event)=>{
                
                    setState({
                        ...state,
                         value:event.target.value,
                       });                
                    
                     } }/>
                <button onClick={()=>{

                    setState({
                        ...state,
                        loading:true,                       
                       });  
                               
                    
                    }}>Comprobar</button>
            </div> 
            
        </div>
    );  
}
export {UseState};