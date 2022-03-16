import React from 'react';
//Creacion de un react hook de estado, mediante Clases


class ClassState extends React.Component{
//hereda todas las propiedades y metodos de React.Component

        render(){
                return (
                    <div>
                        <h2>Eliminar ClassState</h2>
                        <p>Por favor, escribe el codigo de seguridad.</p>
                        <input placeholder="Codigo de seguridad"/>
                        <button>Comprobar</button>
                    </div>
                );            
        }  
  }
  
  
  export {ClassState};