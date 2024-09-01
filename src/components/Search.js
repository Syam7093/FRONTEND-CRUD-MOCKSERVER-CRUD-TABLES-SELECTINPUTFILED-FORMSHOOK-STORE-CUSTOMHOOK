import React, { useState } from 'react'

const Search = () => {
    const [data,setdata]=useState([
        {id:"1",name:"syam",age:20,gender:"male",status:false},
        {id:"2",name:"ramesh",age:20,gender:"fmale",status:false},
        {id:"3",name:"somesh",age:20,gender:"male",status:false},
        {id:"4",name:"genesh",age:20,gender:"fmale",status:false},
        {id:"5",name:"paramesh",age:20,gender:"male",status:false},
        {id:"6",name:"suresh",age:20,gender:"male",status:false},])
        const tabs=['Table','FavouriteTable']
        const [table,settable]=useState("Table")
        // console.log(tabs,"table")

        let tabledata=table=="Table"?data:data.filter((e)=>{return e.status==true})

        const HELLO=(m)=>{
            let mainthing=data.map((e)=>{
                return e==m? {...e,status:!e.status}:e
            })
            setdata(mainthing)
        }

        const allcheck=()=>{
            let ssss=data.map((e)=>{
                // console.log({...e},"-----si")
                return {...e,status:true}
            })
            // console.log(ssss,"mioi")
            setdata(ssss)
        }

        const checone=tabledata.length&& tabledata.every((e)=>{
            return e.status
        })
  return (
    <div>
        <div>
            <div>
                {tabs.map((e)=>{
                    return (
                        <button onClick={()=>{
                            settable(e)
                        }}>{e}</button>
                    )
                })}
            </div>
            <table>
                <tr>
                    <th><input checked={checone} type="checkbox" onChange={allcheck}></input>slno</th>
                    <th>name</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>favourite</th>

                </tr>
                {tabledata.map((e)=>{
                    return(
                        <tr>
                            <td><input type="checkbox" checked={e.status} onChange={()=>{HELLO(e)}}></input>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.gender}</td>
                            <td onClick={()=>{HELLO(e)}}>{e.status==false?"off":"on"}</td>




                        </tr>
                    )
                })}
            </table>
        </div>
    </div>
  )
}

export default Search