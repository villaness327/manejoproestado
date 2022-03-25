import React from 'react';

//Creacion de un react hook de estado, mediante React.useState

const CODE_SEC="paradigma";

//Creacion de Estados compuestos en React.useState

function UseState({name}){

    const [state, setState]=React.useState({
    error:false,
    loading:false,
    value:'',
    delete:false,
    confirm:false,
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

                 console.log("Consulta al BackEnd");

                 if(state.value === CODE_SEC){
                   
                   setState({
                    ...state,
                    loading:false,
                    error:false,
                    confirm:true,
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

   },[state.loading]);//Se ejecuta solo cuando cambia el estado de Loading

 
  if(!state.delete && !state.confirm){ //Pantallas iniciales

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


  }else if(state.confirm && !state.delete ){

        return(
          
          <React.Fragment>

          <p>Por favor, confirma, si deseas eliminar </p>
          <button onClick={()=>{

              setState({
                 ...state,//Estado anterior, para preparar su modificacion 
                 delete:true,
                 }
              )
          }}>Sí, eliminar.</button>          
          
          <button  onClick={()=>{

              setState({
                ...state,
                confirm:false,
                value:'',
              })
          }}  >No, no deseo eliminar.</button>
        </React.Fragment>
      
        );

  }else{

        return(

          <React.Fragment>

              <p>Eliminación con éxito</p>

               <button onClick={()=>{

                  setState({
                    ...state,
                    confirm:false,
                    delete:false, 
                    value:'',                
                  })
               }}>No!!!, deseo volver atrás!!!.</button>
         </React.Fragment>

        );
  }
}
export {UseState};