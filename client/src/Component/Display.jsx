import React,{useEffect,useState} from 'react'
import ReactDOM from 'react-dom/client'
import './Display.css'
const Display = (props) => {
  const [txt, setTxt] = useState();
  const handleDelete=(index)=>{
      let temp=props.data;
      console.log(index);
      temp.splice(index ,1);
      props.setData(temp);
      props.setOnsubmit('true');
  };
  useEffect(() => {
    const handleSubmit=() => {
        if(props.onsubmit=='true')
        {
            setTxt(props.data.map((element,index)=>
            <tr key={index}>
              <td>{index+1}</td>
              <td>{element.title}</td>
              <td>{element.description}</td>
              <td><button type='button' onClick={()=>handleDelete(index)} >Delete</button></td>
            </tr>
            ))
            props.setOnsubmit('false');
        }
    }
    handleSubmit();
  }, [props.onsubmit,props.setOnsubmit,props.data,props.setData ])
  
  return (
    <div className='display'>
        <h3>Your Items</h3>
        <table>
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Item title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {txt}
          </tbody>
        </table>
    </div>
  )
}

export default Display