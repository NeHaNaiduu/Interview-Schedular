import React, { useState } from 'react'
import { documentItems } from '../content/content'
import {useNavigate} from 'react-router-dom'

const Documents = () => {

  const[formData,setFormData]=useState({})
  const navigate=useNavigate()

  const handleFileChange = (e) => {
    e.preventDefault();
    const { id, files } = e.target;
    setFileData((prevData) => ({
      ...prevData,
      [id]: files[0],
    }));
  };
  const handleNext=()=>{
    navigate('/purpose')
  }

  return (
    <div className='documents-wrapper'>
        <div className='documents-field'>
            {documentItems.map((item,index)=>(
                    <div key={index} className='list'>
                        <label htmlFor="" id={item.name}>{item.name}</label>
                        <input type="file" onChange={handleFileChange}/>
                    </div>
            ))}
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Documents