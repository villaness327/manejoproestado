import React from 'react';
//Creacion de un react hook de estado, mediante Clases

import {Loading} from  '../Loading'; //Se importa el componente

const CODE_SEC="paradigma";

class ClassState extends React.Component{
//hereda todas las propiedades y metodos de React.Component


constructor(props){ 

    super(props); //Se envian las props a la clase que estamos heredando
    
        this.state={
        value:'',    
        error:false,
        loading:false,        
    }
    //Se genera un objeto, y cada estado que se quiera crear es un elemento del objeto
}



/* Metodos del Ciclo de Vida, se ejecutan en este orden:

    1.- componentWillMount---> Este metodo ya no se utilizara más , React cambio el nombre como UNSAFE_componentWillMount
        Se ejecuta antes de renderizar los componentes, la primera vez    
   
    2.- componentWillUnmount: Se ejecuta si se desrenderiza un componente

    3.- componentDidMount: Se ejecuta despues de haber renderizado  

    4.- componentDidUpdate: Se ejecuta cada vez que el estado cambia, vendria siendo lo mismo que React.useEffect
  
    
    */

    // UNSAFE_componentWillMount(){

    //   console.log('componentWillMount');
    // }


   
    // componentDidMount(){
    //     console.log('componentDidMount');


    // }

    componentDidUpdate(){

        console.log('Actualizacion');

        if(!!this.state.loading){ // Si loading es true

           setTimeout(()=>{

                console.log('haciendo validacion');

                if(CODE_SEC===this.state.value){
                   this.setState({loading:false,error:false});

                }else{
                    this.setState({loading:false,error:true});                
                }

              
                console.log('Terminando la validación');

           },3000)

        }
    }
     
        render(){
            console.log(this.state.value);
                return (
                    <div>
                        <h2>Eliminar {this.props.name}</h2>
                        <p>Por favor, escribe el codigo de seguridad.</p>
                        {(this.state.error && !this.state.loading) && (<p>Error: El código es incorrecto</p>)}
                                            
                        {this.state.loading && (<Loading/>)}
                        <div><input placeholder="Codigo de seguridad"
                        onChange={(event)=>{
                            this.setState({value:event.target.value});
                          //En esta parte se activa el mensaje de actualizacion de componentDidUpdate
                          //por q se esta actualizando un estado (value).
                        }}                        
                        /><button onClick={()=>            
                           // Forma 1: this.setState(prevState=>({error:!prevState.error}))}>Comprobar</button></div> 
                           // Forma 2:
                            //this.setState(()=>({error:!this.state.error}))}>Comprobar</button></div> 
                            this.setState(()=>(
                                
                                {
                                loading:true                             
                                
                                }))}>Comprobar</button></div>
                    </div>
                );            
        }  
  }
  
  
  export {ClassState};