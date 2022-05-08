import React,{useEffect,useState} from 'react'
import ReactDOM from 'react-dom/client'
import './Description.css' 
const Description = (props) => {
  // let classes='desc '+props.className;
  // useEffect(() => {
  //   return () => {
      
  //   }
  // }, [props.t])
  
  return (
    <div className='desc'>
        {props.children}
        <h3>Description</h3>
        <textarea className={props.d} name="textarea" id="textarea" value={props.Description} onChange={(e)=>props.setDescription(e.target.value)} cols="20" rows="4"></textarea>
    </div>
  )
}

export default Description