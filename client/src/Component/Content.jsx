import {React,useState,useEffect} from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react'
import Title from './Title'
import Description from './Description'
import './Content.css'

const Content = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [t, setT] = useState('t')
  const [d, setD] = useState('d')
  // const [first, setfirst] = useState(second)
  const handleClick=()=>{
      if(title=='' || description=='')
      {
          console.log('afdsafs');
          setT('terror');
          setD('derror');
      }
      else
      {
        setT('t');
        setD('d');
        props.setOnsubmit('true');
        let info={
          'title':title,
          'description':description
        };
        // console.log(title);
        // console.log(description);
        let temp=props.data;
        temp.push(info)
        props.setData(temp);
      }
      console.log(props.data);
  };
  const clearClick=()=>{
    console.log('title');
    setT('t');
    setD('d');
    setTitle('');
    setDescription('');
    props.setData([]);
    props.setOnsubmit('true');
    // event.preventDefault;
  };
  return (
    <div className='content'>
      <Title title={title} setTitle={setTitle} t={t} />
      <Description description={description} setDescription={setDescription} d={d} />
      <button onClick={handleClick}>Add item</button>
      <button onClick={clearClick}>clear list</button>
    </div>
  )
}

export default Content