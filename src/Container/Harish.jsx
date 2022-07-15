import React ,{useEffect,useState} from 'react';
import Axios from 'axios';

const Harish = () => {

const [inputData,setInputData]=useState([]);

useEffect(()=>{
    Axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f56b8410daba43bb90b72db4f6350b34`).then((e)=>{
        setInputData(e.data.articles);
    })
})
  return (
    <div className="supermain">
        {inputData.map((curElem)=>{
            return(
                <div className='main'>
                <div className="maintitle">{curElem.author}</div>
                <div className="maindesc"></div>
                </div>
            )
        })}
         
    </div>
  )
}

export default Harish;