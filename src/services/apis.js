import axios from "axios"

export const userDatapost=async(users)=>{
    let data=await axios.post(`http://localhost:3434/users`,users)
    return data

}

export const getalldata=async()=>{
    let data=await axios.get(`http://localhost:3434/users`)
    return data
}

export const deleteitem=async(id)=>{
    let data=await axios.delete(`http://localhost:3434/users/${id}`)
    return data
}

export const updateuser=async({id,user})=>{
    let data=await axios.put(`http://localhost:3434/users/${id}`,user)
    return data
}
export const getproductData=async()=>{
    let data=await axios.get(`https://dummyjson.com/recipes`)
    return data
}
export const getproductData1=async()=>{
    let data=await axios.get(`https://fakestoreapi.com/products`)
    return data
}

export const onesss =async()=>{
    let data=await axios.get(`https://dummyjson.com/recipes`)
    let data1=await axios.get(`https://fakestoreapi.com/products`)
    let [s,m]=await Promise.all([data,data1])
    return {s,m}
    
}