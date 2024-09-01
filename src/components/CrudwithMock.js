import React, { useEffect, useMemo, useState } from 'react'
import "../App.css"
import { deleteitem, getalldata, userDatapost,updateuser } from '../services/apis'




const CrudwithMock = () => {
    const [formdata,setformdata]=useState({item:"",price:""})
    const [formdata1,setformdata1]=useState({item1:"",price1:""})
    const [visible,setvisible]=useState(false)
    const [item,setitem]=useState()

    const [show,setshow]=useState([])
    const handleChange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })

    }
    const handleChange1=(e)=>{
        setformdata1({
            ...formdata1,
            [e.target.name]:e.target.value
        })

    }

    const handlesubmititemsdata=async()=>{

        let data={
            item:formdata.item,
            price:formdata.price
        }
       let main=await userDatapost(data)
       setformdata({item:"",price:""})
       getallusersdata()

    }
    useEffect(()=>{
        getallusersdata()
    },[])

    const getallusersdata=async()=>{
        let data=await getalldata()
        setshow(data.data)
}
const deleteoneuser=async(m)=>{
    let data=await deleteitem(m)
    let one=show.filter((e)=>{
        return e.id!==data?.id
    })

    setshow(one)
    getallusersdata()
}

const updateoneuser=(s)=>{
    console.log(s,"suam")
    setitem(s)
    setvisible(true)
    setformdata1({item1:s.item,price1:s.price})


}

const handleoneuseupdaone=async()=>{
    let nam={
        item:formdata1.item1,
        price:formdata1.price1
    }
    let data=await updateuser({id:item.id,user:nam})
    getallusersdata()
    setvisible(false)
    
}

const [currentpage,setcurrentpage]=useState(1)
const itemperpage=5
const lastindex=currentpage*itemperpage
const firstindex=lastindex-itemperpage
const showpages=show.slice(firstindex,lastindex)

const numbers=[]
for(let i=1;i<=(show.length/itemperpage);i++)
{
    numbers.push(i)
}


const [one,setone]=useState([1,2,3,4])
const deleitemmain=()=>{
    let mm=one.slice(1)
    mm.push(one[0]+one.length)
    setone(mm)

}

const PREVONE=()=>{
    if(currentpage>=1)
    {
        setcurrentpage(currentpage-1)
    }
}

const NECT=()=>{
    if(currentpage<numbers.length)
    {
        setcurrentpage(currentpage+1)
    }
}

  return (
    <div>
        {one.map((e)=>{
            return (
                <button >{e}</button>
            )
        })}
        <button onClick={()=>{deleitemmain()}}>SUBMIT</button>
        <div>
            <div>
                <label>item</label>
                <input name="item" value={formdata.item} onChange={handleChange} type="text"></input>
            </div>
            <div>
                <label>price</label>
                <input name="price" value={formdata.price} onChange={handleChange} type="text"></input>
            </div>
            <button onClick={()=>{
                handlesubmititemsdata()
            }}>submit</button>
        </div>
        <div>
            <table>
                <tr>
                    <th>item</th>
                    <th>price</th>
                    <th>action</th>
                     </tr>
                     {showpages.map((e)=>{
                        return(
                            <tr>
                                <td>{e.item}</td>
                                <td>{e.price}</td>
                                <td><button onClick={()=>{updateoneuser(e)}}>update</button><button onClick={()=>{deleteoneuser(e?.id)}}>delete</button></td>

                            </tr>
                        )
                     })}
            </table>
        </div>
       {visible==true && <div>
        <div>
            <div>
                <label>item</label>
                <input name="item1" value={formdata1.item1} onChange={handleChange1} type="text"></input>
            </div>
            <div>
                <label>price</label>
                <input name="price1" value={formdata1.price1} onChange={handleChange1} type="text"></input>
            </div>
            <button onClick={()=>{
                // handlesubmititemsdata()
                handleoneuseupdaone()
            }}>submit</button>
        </div>
        </div>}
        <div>
            <button  onClick={()=>{PREVONE()}}>prev</button>
            {numbers.map((num)=>{
                return(
                    <button disabled={currentpage==num} onClick={()=>{setcurrentpage(num)}}>{num}</button>
                )
            })}
            <button disabled={currentpage==numbers.length} onClick={()=>{NECT()}}>next</button>
        </div>
    </div>
  )
}

export default CrudwithMock