
//Estado compuesto
const initialState={

        error:false,
        loading:false,
        value:'',
        delete:false,
        confirm:false,
};


//1era forma de crear un reducer, uso de IF

const reducerIF =(state,action)=>{
    if(action.type==='ERROR'){
        
        return{ //Retorna un objeto

            ...state,
            loading:false,
            error:true,
        };

    }else if(action.type==='CHECK'){

         return{ //Retorna un objeto

            ...state,
            loading:true,
         };
    }else{ //Valor por default

       return{ //Retorna un objeto
         ...state,
       };

    }    
}


//2da  forma de crear un reducer, uso de Switch

const reducerSwitch=(state,action)=>{

        switch(action.type){

            case 'ERROR':

                return{
                    ...state,
                    loading:false,
                    error:true,
                };
            
            case 'CHECK':
                
                return{
                    ...state,
                    loading:true,
                };

            default:
                
                return{
                   ...state,

                }
        }
}

//3era forma de crear un reducer mediante object

const reducerObject=(state,action)=>{

    return{
        'ERROR':{
            ...state,
            loading:false,
            error:true,
        },

        'CHECK':{
            ...state,
            loading:true,
        }
    }

}

//Reducer
    const reducer=(state,action)=>{
        if(reducerObject(state)[action.type]){//Se valida si existe
                return reducerObject(state)[action.type];
        }else{

            return state;    

        };
    }