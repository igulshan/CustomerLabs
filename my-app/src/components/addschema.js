import './addschema.css';
import {useState} from 'react';
import Dropdown from './dropdown';
import axios from 'axios';

function Addschema(prop) {
  const {reset,setReset}=prop;
  const [value,setValue] = useState('select');
  const [list,setlist]= useState([]);
  const[name,setName] = useState('');
  const userTraits=['first_name','last_name','gender','age'];
  const dict = {'first_name':'First Name','last_name':'Last Name','gender':'Gender','age':'Age',
  'account_name':'Account Name','state':'State','city':'City'};

  var showdata = function(){
    console.log(name);
    const datalist =[]
    list.map(data=>datalist.push({data:dict.data}))
    const schema ={'segment_name':name,'schema':datalist}
    axios.post('https://webhook.site/91a58008-f290-42cd-b0c5-d32691a051e7',name)
    // fetch('https://webhook.site/91a58008-f290-42cd-b0c5-d32691a051e7',{
    //   method:'POST',
    //   mode:'cors',
    //   headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify(name)
    // }).then(()=>{
    //   console.log('data sent')
    // })
    setlist([])
    setName('')
  }

  var updatelist =function(){
    const clonelist = [...list];
    clonelist.push(value);
    setlist(clonelist);
    setValue('select');
  }
  return (
    <>
    <div className='blur'></div>
    <div className="Add">
    <div className="head2">
        <p className="p2">{"<"}</p>
        <p className="p2">Saving Segment</p>
    </div>
    <form className="formdiv">
      <p className="p3">Enter The Name Of The Segment</p>
      <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Name of the segment"/>
      <br/>
      <p className="p3">To save your segment,You need to add the schemas to build your query </p>
      <div className='circlecontent'>
      <div className='circle1'></div>
      <label>- User Traits</label>
      <div className='circle2'></div>
      <label>- Group Traits</label>
      </div>

    <div className='choosen'>
      {list.map(data=><Dropdown listed={data}/>)}
    </div>
    {value==='select' && <div className='circle'></div>}
    {(value!=='select' && userTraits.includes(value)===false) && <div className='circle2'></div>}
    {userTraits.includes(value) && <div className='circle1'></div>}
      <select className="dropbox" value={value} onChange={(e)=>setValue(e.target.value)}>
      <option value="select">Add schema to segment </option>
        {list.includes('first_name')===false &&<option value="first_name">First Name</option>}
        {list.includes('last_name')===false &&<option value="last_name">Last Name</option>}
        {list.includes('gender')===false &&<option value="gender">Gender</option>}
        {list.includes('age')===false &&<option value="age">Age</option>}
        {list.includes('account_name')===false &&<option value="account_name">Account Name</option>}
        {list.includes('city')===false &&<option value="city">City</option>}
        {list.includes('state')===false &&<option value="state">State</option>}
      </select>
    </form>
    <br/>
    <a className='link' onClick={updatelist}href='#'>+ Add new schema</a>
    <div className='foot'>
      <button className="save" onClick={showdata}>Save the Segment</button>
      <button className="cancel" onClick={()=>setReset(!reset)}>cancel</button>
    </div>
    </div>
    </>
  );
}

export default Addschema;