import React from 'react';
//Creacion de un react hook de estado, mediante Clases


class ClassState extends React.Component{
//hereda todas las propiedades y metodos de React.Component


constructor(props){ 

    super(props); //Se envian las props a la clase que estamos heredando
    
        this.state={
        error:true,        
    }
    //Se genera un objeto, y cada estado que se quiera crear es un elemento del objeto
}
        render(){
                return (
                    <div>
                        <h2>Eliminar {this.props.name}</h2>
                        <p>Por favor, escribe el codigo de seguridad.</p>
                        {this.state.error && (<p>Error: El código es incorrecto</p>)}
                        <div><input placeholder="Codigo de seguridad"/><button onClick={()=>
            
                           // Forma 1: this.setState(prevState=>({error:!prevState.error}))}>Comprobar</button></div> 
                          
                           // Forma 2:
                            this.setState(()=>({error:!this.state.error}))}>Comprobar</button></div> 
                    </div>
                );            
        }  
  }
  
  
  export {ClassState};