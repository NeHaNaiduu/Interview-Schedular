import React from 'react'
import { progressItems } from '../content/content'

const Progress = () => {
  return (
    <div className='progressbar'>
        <div className='progress'>
            {progressItems.map((item)=>(
                <div key={item.index} className='pItem'>
                    <div class='circle'>
                    {item.index === 0 && <i className='fas fa-check check'></i>}
                    </div>
                    <p>{item.name}</p>
                    {item.index<progressItems.length - 1 && <div className='line'></div>}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Progress