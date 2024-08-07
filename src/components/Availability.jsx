import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Availability = () => {

    const [formData, setFormData] = useState({
        email: '',
        location:'',
        date: '',
        time:'',
        zone: 'india',
        medium:'online'
    });
    const navigate=useNavigate();


    const handleChange = (e) => {
        e.preventDefault();
        const { id, value,type,name } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        if (type === 'select-one') {
            setFormData((prevData) => ({
              ...prevData,
              [name]: value,
            }));
          } else {
            setFormData((prevData) => ({
              ...prevData,
              [id]: value,
            }));
          }
    }
    const handleClick=()=>{
        navigate('/scheduled')
    }

  return (
    <div className='availwrapper'>
        <div className='avail'>
            <div className='avail-field'>
                <label htmlFor="email">
                    1. Email*
                </label>
                <input 
                id='email' 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder='Example - userid@gmail.com'/>
            </div>
            <div className='avail-field'>
                <label htmlFor="location">
                    2. Location
                </label>
                <input 
                id='location' 
                type='location' 
                value={formData.location}
                onChange={handleChange}
                placeholder='Search or enter your location'
                />
            </div>
            <div className='avail-field'>
                <label htmlFor="date">
                    3. Interview Date
                </label>
                <input 
                id='date' 
                type="date" 
                value={formData.date}
                onChange={handleChange}/>
            </div>
            <div className='avail-field'>
                <label htmlFor="time">
                    4. Interview Time
                </label>
                <input 
                id='time' 
                type="time"
                value={formData.time}
                onChange={handleChange} />
            </div>
            <div className='avail-field'>
                <label htmlFor="zone">
                    5. Time Zone
                </label>
                <select 
                name="zone" 
                id="zone"
                value={formData.zone}
                onChange={handleChange}>
                    <option value="india">India</option>
                    <option value="international">International</option>
                </select>
            </div>
            <div className='avail-field'>
                <label htmlFor="medium">
                    6. Interview Medium
                </label>
                <select 
                name="medium" 
                id="medium"
                value={formData.medium}
                onChange={handleChange}>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                </select>
            </div>
        </div>
        <button onClick={handleClick}>Next</button>
    </div>
  )
}

export default Availability