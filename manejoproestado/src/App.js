
import './App.css';
import {UseState} from './Components/UseState';
import {ClassState} from './Components/ClassState';


function App() {
  return (
    <div className="App">

      <UseState name="Use State"/>
      <ClassState name="Class State"/>
     
    </div>
  );
}

export default App;
