import React from 'react';
//Creacion de un react hook de estado, mediante Clases


class Loading extends React.Component{
//hereda todas las propiedades y metodos de React.Component

componentWillUnmount(){

 console.log('componentWillUnmount');
 //Metodo de ciclo de vida, que se ejecuta cuando de desmonta un componente   

}
        render(){
                return (
                 <p>Cargando...</p>
                
                );            
        }  
  }
  
  
  export {Loading};