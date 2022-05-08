import {React,useState,useEffect} from 'react'
import ReactDOM from 'react'
import Title from './Title'
import Description from './Description'
import './Content.css'

const Content = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  // const [first, setfirst] = useState(second)
  var data;
  const handleClick=()=>{
      if(title=='' || description=='')
      {
          
      }
      data={
          'title':title,
          'description':description
      };
  };
  return (
    <div className='content'>
      <Title title={title} setTitle={setTitle} />
      <Description description={description} setDescription={setDescription} />
      <button onClick={handleClick()}>Add item</button>
      <button >clear list</button>
    </div>
  )
}

export default Content