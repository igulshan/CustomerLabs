import './App.css';
import {useState} from 'react';
import Addschema from './components/addschema';

function App() {
  const [show,setShow]=useState(false);
  return (
    <>
    <div className="App">
      <div className='head'>
        <p className='p1'>{'<'}</p>
        <p className='p1'>View Audience</p>
      </div>
      <button className='btn' type="submit" onClick={()=>setShow(!show)}>Save Segment</button>
      
      {show &&<Addschema reset={show} setReset={setShow}/>}
      
    </div>
    </>
  );
}

export default App;
