import { useState } from 'react';
import Button from './components/Button'
import './App.css';

function App() {
  const [color,setColor] = useState('red');

  const changeColor = () => {
    color==='red'?setColor('blue'):setColor('red');
  }

  return (
    <div className="App" style={{backgroundColor:color}}>
      <Button color={color} changeColor={changeColor}/>
    </div>
  );
}

export default App;
