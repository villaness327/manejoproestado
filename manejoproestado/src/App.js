
import './App.css';
import {UseState} from './Components/UseState'; 
import {UseReducer} from './Components/UseReducer';
//Se importan los componentes



function App() {
  return (
    <div className="App">
 
      <UseState name="Use State"/> 
      <UseReducer name="UseReducer"/>
     
    </div>
  );
}

export default App;
