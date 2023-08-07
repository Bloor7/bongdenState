
import './App.css';
import { useState } from 'react';



  






function App() {
  const [color, setColor] = useState('yellow');
  
  function handleColor(e) {
    setColor(
      e.target.value 
    )
  }
  function handleOnOff() {
   color == 'yellow' || 'red '|| 'blue' ? setColor('#4b5c9c') : setColor('yellow')
    
    
  }
  
  console.log(color)
  return (
    <div>
    <div className="rope-container">
    </div>
    <div className="background" />
    <div className="lamp" style={{backgroundColor: color}}>
      <div className="lamp-reflection lamp-reflection-1" />
      <div className="lamp-body" style={{backgroundColor: color}}>
        <div className="lamp-body-bend-left" />
        <div className="lamp-body-bend-right" />
      </div>
      <div className="lamb-nozzle" />
      <div className="awesome">
      <div className='btn-color'>
        <label htmlFor="name">Chọn màu bóng đền: </label>
        <input type="button" name="name" value="blue"  onClick={handleColor} />
        <input type="button" name="name" value="red" onClick={handleColor} /> 
        <input type="button" name="name" value="yellow" onClick={handleColor}/>   
      </div>
      <input type="button" name="button" value="On/Off" onClick={handleOnOff}/> 
      
    </div>
    </div>
    
  </div>

  
  );
}

export default App;
