import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Details = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dob: '',
        contact: '',
    });
    const navigate=useNavigate()


    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }
    const handleNext=()=>{
        navigate('/documents')
    }

  return (
    <div className='details-wrapper'>
        <div className='details'>
            <div className="fields">
                <label htmlFor="name">1. Name*</label>
                <input
                id='name' 
                type="text" 
                placeholder='Example - userid'
                required
                value={formData.name}
                onChange={handleChange}/>
            </div>
            <div className="fields">
                <label htmlFor="email">2. Email*</label>
                <input 
                id='email'
                type="text" 
                placeholder='Example - userid@gmail.com'
                required
                value={formData.email}
                onChange={handleChange}/>
            </div>
            <div className="fields">
                <label htmlFor="contact">3. Contact no</label>
                <input 
                id='contact'
                type='phone' 
                placeholder='Enter your 10 digit contact no'
                required
                value={formData.contact}
                onChange={handleChange}/>
            </div>
            <div className="fields">
                <label htmlFor="dob">4. Date of Birth</label>
                <input 
                id='dob'
                type="date" 
                value={formData.dob}
                onChange={handleChange}/>
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Details