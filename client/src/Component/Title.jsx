import React, { useState,useEffect } from 'react'
import { ReactDOM } from 'react'
import './Title.css'
const Title = (props) => {
  return (

    <div className='title'>
        <strong>Title</strong>
        <input type="text" value={props.Title} placeholder='Enter text' onChange={(e)=>props.setTitle(e.target.value)} />
    </div>
  )
}

export default Title