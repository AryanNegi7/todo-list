import React ,{useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './Component/Header'
import Content from './Component/Content'
import Display from './Component/Display'
function App() {
  const [onsubmit, setOnsubmit] = useState('false');
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <Header />
      <Content onsubmit={onsubmit} setOnsubmit={setOnsubmit} data={data} setData={setData} />
      <Display onsubmit={onsubmit} setOnsubmit={setOnsubmit} data={data} setData={setData} />
    </div>  
  )
}

export default App
