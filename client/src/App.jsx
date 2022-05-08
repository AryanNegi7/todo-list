import React ,{useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './Component/Header'
import Content from './Component/Content'
import Display from './Component/Display'
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Display />
    </div>  
  )
}

export default App
