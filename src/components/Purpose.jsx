import React, { useState } from 'react'
import { purposeItems } from '../content/content'
import {useNavigate} from 'react-router-dom'

const Purpose = () => {

  const[formData,setFormData]=useState({})
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const handleNext=()=>{
    navigate('/available')
  }

  return (
    <div className='purpose-wrapper'>
        <div className='purpose'>
            {purposeItems.map((item,index)=>(
                <div className='purposes' key={item.id}>
                    <label htmlFor={item.id}>{item.ques}</label>
                    <input 
                    id={item.id}
                    type="text" 
                    maxLength="300"
                    placeholder='Enter a description for the long answer'
                    value={formData[item.id] || ''}
                    onChange={handleChange} />
                </div>
            ))}
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Purpose