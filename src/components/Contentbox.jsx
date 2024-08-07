import React from 'react'
import Descbox from './Descbox'
import { Outlet } from 'react-router-dom'

const Contentbox = () => {
  return (
    <div className='contentbox-wrapper'>
        <div className='content'>
            <h4>Preview</h4>
            <p>You will be able to customize the fields in the later stage</p>
            <div className='mainbox-wrapper'>
                <div className='mainbox'>
                    <Descbox/>
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contentbox