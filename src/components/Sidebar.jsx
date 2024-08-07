import React, { useState } from 'react'
import { sidebarItems } from '../content/content'
import { Link,NavLink } from 'react-router-dom'

const Sidebar = () => {


  return (
    <div className='sidebar'>
        <div>   
            <div className='new-form card'>
                <div className='greybox'></div>
                <div>
                    <h4>New Form</h4>
                    <p className="hide-intro">Start creating a new form with the wide options of fields available</p>
                </div>
            </div>
            <p>Explore the following Templates :</p>
            {sidebarItems.map((item,index)=>(
                <NavLink to={item.path} key={index} className='card' >
                    <div className='greybox'></div>
                    <div className='info'>
                        <h4>{item.heading}</h4>
                        <p>{item.text}</p>
                    </div>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default Sidebar