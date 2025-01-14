
import './App.css';
import State from './Components/Hooks/State';
import ComponentA from './Components/Props/ComponentA';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* <State/> */}
      <ComponentA count = {count}/>
    </div>
  );
}

export default App;
