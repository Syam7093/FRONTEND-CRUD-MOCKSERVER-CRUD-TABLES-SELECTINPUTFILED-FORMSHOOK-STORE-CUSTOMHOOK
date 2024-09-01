import React, { useState } from 'react'
import "../App.css"

const Crud = () => {

 const [formdata,setformdata]=useState({name:"",email:"",password:""})
 const [formdata1,setformdata1]=useState({name1:"",email1:"",password1:""})
 const [visible,setvisible]=useState(false)
 const [item,setitem]=useState()

 const [show,setshow]=useState([])
 console.log(show,"show---")
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

 const handleSubmitData=()=>{
    setshow([...show,{...formdata}])
    setformdata({name:"",email:"",password:""})
 }

 const handleDelete=(s)=>{
    let data=show.filter((e)=>{
        return s!==e
    })
    setshow(data)

 }

 const udpatedata=(m)=>{
    console.log(m,"m-----")
    setformdata1({name1:m.name,email1:m.email,password1:m.password})
    setvisible(true)
    setitem(m)
 }

 const updateoneitmedata=()=>{
    let data={
        name:formdata1.name1,
        email:formdata1.email1,
        password:formdata1.password1
    }

    let some=show.map((e)=>{
        if(e==item)
        {
            return data
        }
        return e
    })
    setshow(some)
    setvisible(false)
 }

  return (
    <div>
        <div>
            <label>name</label>
            <input name="name" value={formdata.name} onChange={handleChange} type="text"></input>
        </div>
        <div>
            <label>email</label>
            <input name="email" value={formdata.email} onChange={handleChange} type="text"></input>
        </div>
        <div>
            <label>password</label>
            <input name="password" value={formdata.password} onChange={handleChange} type="text"></input>
        </div>
        <button onClick={handleSubmitData}>submit</button>

        <div>
            <table>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>password</th>
                    <th>action</th>
                </tr>
                {show.map((e)=>{
                    return(
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td><button onClick={()=>{udpatedata(e)}}>udpate</button><button onClick={()=>{handleDelete(e)}}>delete</button></td>

                        </tr>
                    )
                })}
            </table>
        </div>
        {visible==true && <div>
        <div>
            <label>name</label>
            <input name="name1" value={formdata1.name1} onChange={handleChange1} type="text"></input>
        </div>
        <div>
            <label>email</label>
            <input name="email1" value={formdata1.email1} onChange={handleChange1} type="text"></input>
        </div>
        <div>
            <label>password</label>
            <input name="password1" value={formdata1.password1} onChange={handleChange1} type="text"></input>
        </div>
        <button onClick={()=>{updateoneitmedata()}}>submit</button>
        </div>}
    </div>
  )
}

export default Crud