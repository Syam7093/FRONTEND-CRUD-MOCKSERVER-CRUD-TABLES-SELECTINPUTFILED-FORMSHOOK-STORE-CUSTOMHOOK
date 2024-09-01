import React, { useEffect, useState } from 'react'
import "../App.css"
import { getproductData,getproductData1 } from '../services/apis'
import Card from './Card'

const Filter = () => {
  const [show,setshow]=useState([])
  useEffect(()=>{
    alldataoftow()
  
  },[])

  

  const alldataoftow=async()=>{
    let [one,two]=await Promise.all([getproductData(),getproductData1()])
    let combines=[...one.data.recipes,...two.data]
    setshow(combines)
    
  }
  return (
    <div>
      <div>
      </div>
      
      <Card show={show}></Card>
       </div>
  )
}

export default Filter