import React from 'react';
import {useState} from 'react';
import './dropdown.css';

function Dropdown(prop){
    const {listed} = prop;
    const [value,setValue]= useState(listed);
    const userTraits=['first_name','last_name','gender','age'];
    return(
        <>
        <div className="formdiv2">
        <div className={userTraits.includes(value) ? 'greencircle':'redcircle'}></div>
        <select className="dropbox" value={value} onChange={(e)=>setValue(e.target.value)}>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="gender">Gender</option>
          <option value="age">Age</option>
          <option value="account_name">Account Name</option>
          <option value="city">City</option>
          <option value="state">State</option>
        </select>
        <div  className='remove'>-</div>
      </div>

      </>
    )
}

export default Dropdown;