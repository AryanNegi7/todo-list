import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'
// import { ReactDOM } from 'react'
import './Title.css'
import './content.css'
const Title = (props) => {
  // let classes='title '+props.className;
  return (

    <div className='title'>
        {/* {props.children} */}
        <strong>Title</strong>
        <input className={props.t} type="text" value={props.Title} placeholder='Enter text' onChange={(e)=>props.setTitle(e.target.value)} />
    </div>
  )
}

export default Title