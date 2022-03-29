import React from 'react';

//Creacion de un react hook de estado, mediante React.useState

const CODE_SEC="paradigma";

//Creacion de Estados compuestos en React.useState

function UseReducer({name}){
    
const [state,dispatch]=React.useReducer(reducer,initialState);
//Se asocia un reducer


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
                   
                  dispatch({type:actionTypes.confirm});            
             
                 }else{
              
                  dispatch({type:actionTypes.error});     
                 }               

            },3000); //Este bloque espera 3 segundos para ejecutarse
        }

        console.log("Terminando el efecto useEffect");

   },[state.loading]);//Se ejecuta solo cuando cambia el estado de Loading

 
if(!state.delete && !state.confirm){ //Pantallas iniciales

                 return (

                    <div>
                        <h2>Eliminar {name}</h2>
                        <p>Por favor, escribe el codigo de seguridad.</p>                      
                        {state.loading && (<p>Cargando, espere un momento...</p>)}
                        {(state.error && !state.loading) &&(<p>Error: El código es incorrecto</p>)}
                        <div><input placeholder="Codigo de seguridad" value={state.value} 
                            onChange={(event)=>{
                            
                                   // onWrite(event.target.value); 
                                    dispatch({type:actionTypes.write, payload:event.target.value});           
                                
                                } }/>
                            <button onClick={()=>{
                            
                                    dispatch({type:actionTypes.check});
                                }}>Comprobar</button>
                        </div> 
                        
                    </div>
                ); 


  }else if(state.confirm && !state.delete ){

        return(
          
          <React.Fragment>

          <p>Por favor, confirma, si deseas eliminar </p>
          <button onClick={()=>{

          dispatch({type:actionTypes.delete});

          }}>Sí, eliminar.</button>          
          
          <button  onClick={()=>{
            
          dispatch({type:actionTypes.reset});
              
          }}  >No, no deseo eliminar.</button>
        </React.Fragment>
      
        );

  }else{

        return(

          <React.Fragment>

              <p>Eliminación con éxito</p>

               <button onClick={()=>{

                dispatch({type:actionTypes.reset});

               }}>No!!!, deseo volver atrás!!!.</button>
         </React.Fragment>

        );
  }
}

const initialState={
    value:'',
    error:false,
    loading:false, 
    delete:false,
    confirm:false,
  }


    const actionTypes={

    confirm:'CONFIRM',
    error:'ERROR',
    check:'CHECK',
    write:'WRITE',
    delete:'DELETE',
    reset:'RESET',
    }


  //return implicito
  const reducerObject=(state,payload)=>({

        [actionTypes.confirm]:{            
        ...state,
        loading:false,
        error:false,
        confirm:true,
        },

        [actionTypes.error]:{
        ...state,
        loading:false,
        error:true,
        },

        [actionTypes.check]:{
        ...state,
        loading:true,
        },

        [actionTypes.write]:{
        ...state,
        value:payload,    
        },

        [actionTypes.delete]:{
        ...state,//Estado anterior, para preparar su modificacion 
        delete:true,
        },

        [actionTypes.reset]:{
        ...state,
        confirm:false,
        delete:false,
        value:'',

        }
  });

const reducer=(state,action)=>{

        if(reducerObject(state)[action.type]){ //Si existe el action.type

            return reducerObject(state,action.payload)[action.type];

        }else{
            
            return state; //Si no encuentra el Action Type retorna el estado.

        }
};

export {UseReducer};