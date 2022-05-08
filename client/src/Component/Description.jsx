import React from 'react'
import './Description.css' 
const Description = (props) => {
  return (
    <div className='desc'>
        <h3>Description</h3>
        <textarea name="textarea" id="textarea" value={props.Description} onChange={(e)=>props.setDescription(e.target.value)} cols="20" rows="4"></textarea>
    </div>
  )
}

export default Description