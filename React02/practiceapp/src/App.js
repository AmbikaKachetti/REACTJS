
import './App.css';
import Effect from './Components/Hooks/Effect';
import State from './Components/Hooks/State';
import ComponentA from './Components/Props/ComponentA';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* <State/> */}
      {/* <ComponentA count = {count}/> */}
      <Effect/>
    </div>
  );
}

export default App;
