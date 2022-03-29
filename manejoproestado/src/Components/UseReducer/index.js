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
                   
                  dispatch({type:'CONFIRM'});            
             
                 }else{
              
                  dispatch({type:'ERROR'});     
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
                                    dispatch({type:'WRITE', payload:event.target.value});           
                                
                                } }/>
                            <button onClick={()=>{
                            
                                    dispatch({type:'CHECK'});
                                }}>Comprobar</button>
                        </div> 
                        
                    </div>
                ); 


  }else if(state.confirm && !state.delete ){

        return(
          
          <React.Fragment>

          <p>Por favor, confirma, si deseas eliminar </p>
          <button onClick={()=>{

          dispatch({type:'DELETE'});

          }}>Sí, eliminar.</button>          
          
          <button  onClick={()=>{
            
          dispatch({type:'RESET'});
              
          }}  >No, no deseo eliminar.</button>
        </React.Fragment>
      
        );

  }else{

        return(

          <React.Fragment>

              <p>Eliminación con éxito</p>

               <button onClick={()=>{

                dispatch({type:'RESET'});

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

  //return implicito
  const reducerObject=(state,payload)=>({

        'CONFIRM':{            
        ...state,
        loading:false,
        error:false,
        confirm:true,
        },

        'ERROR':{
        ...state,
        loading:false,
        error:true,
        },

        'CHECK':{
        ...state,
        loading:true,
        },

        'WRITE':{
        ...state,
        value:payload,    
        },

        'DELETE':{
        ...state,//Estado anterior, para preparar su modificacion 
        delete:true,
        },

        'RESET':{
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
            
            return state;

        }
};

export {UseReducer};