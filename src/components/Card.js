
import { useEffect, useState } from 'react';
import '../App.css'; 

const Card = ({ show }) => {
    const [search,setsearch]=useState('')
    const [debounce,setdebounce]=useState('')
    const[currentpage,setcurrentpage]=useState(1)
    const itemperpage=12
    const last=currentpage*itemperpage
    const first=last-itemperpage
    

    useEffect(()=>{
        let timeer=setTimeout(()=>{
            setdebounce(search)
        },1000)

        return ()=>{
            clearTimeout(timeer)
        }
    },[search])
    const filterdata=show.filter((e)=>{
        let name= e.name && e.name.toLowerCase().includes(debounce.toLowerCase())
        let title= e.title && e.title.toLowerCase().includes(debounce.toLowerCase())
        return title || name

    })
    const mainpage=filterdata.slice(first,last)
    const numbers=[]
    for(let i=1;i<=Math.ceil(filterdata.length/itemperpage);i++)
    {
        numbers.push(i)
    }

    
 
  return (
    <div>
        <div className="search-container">
      <div className="search-box">
        <input onChange={(e)=>{setsearch(e.target.value);setcurrentpage(1)}} type="search" placeholder="Search..." className="search-input" />
      </div>
    </div>
       {mainpage.length>0 ?
        <div className="card-container">
        {mainpage.map((e, index) => (
          <div key={index} className="card">
            <img src={e.image} alt={e.name || e.title} className="card-image" />
            <h5 className="card-title">{e.name || e.title}</h5>
          </div>
        ))}
      </div>:<h1>no data found...</h1>
       }
       <div>
        {numbers.map((e)=>{
            return(
                <button onClick={()=>{setcurrentpage(e)}}>{e}</button>
            )
        })}
       </div>
    </div>
  );
};

export default Card;
