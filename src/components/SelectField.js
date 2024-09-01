import  { useState } from 'react'

const SelectField = () => {
    const [data,setdata]=useState([
        {id:1,name:"syam",age:45,gender:"male"},
        {id:1,name:"raju",age:35,gender:"female"},
        {id:1,name:"janu",age:45,gender:"female"},
        {id:1,name:"ravi",age:34,gender:"male"},
        {id:1,name:"jam",age:56,gender:"female"},
        {id:1,name:"praveen",age:67,gender:"male"},
        {id:1,name:"syam",age:35,gender:"female"},
        {id:1,name:"raju",age:45,gender:"female"},
        {id:1,name:"janu",age:45,gender:"female"},
        {id:1,name:"ravi",age:34,gender:"male"},
        {id:1,name:"jam",age:56,gender:"female"},
        {id:1,name:"praveen",age:67,gender:"male"},
    ])
    // console.log(data,'dat==')
    const [gender,setgender]=useState('')
    const [age,setage]=useState()
    // console.log(gender,"gender")
    const [search,setarch]=useState('')

    const filterData = data.filter((e) => {
        const genderMatch =gender? e.gender === gender :true
        const ageMatch = age? e.age >= age:true
        const sssssss = e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())

        return genderMatch && ageMatch && sssssss;
    });
  return (
    <div>
        <div>

            <input type="text" onChange={(e)=>{setarch(e.target.value)}}></input>
            <select onChange={(e)=>{
                setgender(e.target.value)
            }}>
                <option>gender</option>
                <option>male</option>
                <option>female</option>


            </select>

            <select onChange={(e)=>{
                setage(e.target.value)
            }}>
                <option>age</option>
                <option>40</option>
                <option>30</option>


            </select>
           <table>
            <tr>
                <th>name</th>
                <th>age</th>
                <th>gender</th>
            </tr>
            {filterData.map((e)=>{
                return(
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.gender}</td>
                        <td>{e.age}</td>


                    </tr>
                )
            })}
           </table>
        </div>
    </div>
  )
}

export default SelectField