// import React, { useState } from 'react'
// import "../App.css"

// const Tables = () => {
//   const [formdata,setformdata]=useState({name:"",mobile:"",email:"",password:""})
//   const [error,seterror]=useState({name:"",mobile:"",email:"",password:""})
//   const handleChange=(e)=>{
//     setformdata({
//       ...formdata,
//       [e.target.name]:e.target.value
//     })

//   }
//   const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   const mobileRegex = /^\+?[1-9]\d{1,14}$/;

//   const handleonesubmitthihg=()=>{
//     if(formdata.name.trim()=="")
//     {
//        seterror((error)=>({...error,name:"enter name must...."}))
//     }
//     else if(!nameRegex.test(formdata.name))
//     {
//       seterror((error)=>({...error,name:"enter correct name...."}))
//     }
//     else{
//       seterror((error)=>({...error,name:""}))
//     }
//     if(formdata.email.trim()=="")
//       {
//          seterror((error)=>({...error,email:"enter email must...."}))
//       }
//       else if(!emailRegex.test(formdata.email))
//       {
//         seterror((error)=>({...error,email:"enter correct email...."}))
//       }
//       else{
//         seterror((error)=>({...error,email:""}))
//       }

//       if(formdata.mobile.trim()=="")
//         {
//            seterror((error)=>({...error,mobile:"enter mobile must...."}))
//         }
//         else if(!mobileRegex.test(formdata.mobile))
//         {
//           seterror((error)=>({...error,mobile:"enter correct mobile...."}))
//         }
//         else{
//           seterror((error)=>({...error,mobile:""}))
//         }


//         if(formdata.password.trim()=="")
//           {
//              seterror((error)=>({...error,password:"enter password must...."}))
//           }
//           else if(!passwordRegex.test(formdata.password))
//           {
//             seterror((error)=>({...error,password:"enter correct password...."}))
//           }
//           else{
//             seterror((error)=>({...error,password:""}))
//           }

        
      
    
//   }


//   return (
//     <div>
//       <div>
//         <label>name</label>
//         <input name="name" onChange={handleChange} type="text"></input>
//         <span style={{color:"red"}}>{error.name}</span>
//       </div>
//       <div>
//         <label>mobile</label>
//         <input name="mobile" onChange={handleChange} type="text"></input>
//         <span style={{color:"red"}}>{error.mobile}</span>
//       </div>
//       <div>
//         <label>email</label>
//         <input name="email" onChange={handleChange} type="text"></input>
//         <span style={{color:"red"}}>{error.email}</span>
//       </div>
//       <div>
//         <label>password</label>
//         <input name="password" onChange={handleChange} type="text"></input>
//         <span style={{color:"red"}}>{error.password}</span>
//       </div>
//       <button onClick={handleonesubmitthihg}>submit</button>
//     </div>
//   )
// }

// export default Tables


import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "../App.css";
import { IncrementFunction } from './IncCustomHook';

const Tables = () => {
  const {number,inc,dec}=IncrementFunction()
  const { register, handleSubmit, formState: { errors } } = useForm();

 

  // Regex patterns
  const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const mobileRegex = /^\+?[1-9]\d{1,14}$/;

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data,"sssfdsfs---");
    
  };
  useEffect(()=>{
    console.log(errors,"ramu---")
  })

  return (
    <div>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>

      <button>{number}</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            {...register('name', {
              required: 'Name is required',
              pattern: {
                value: nameRegex,
                message: 'Enter a valid name'
              }
            })}
          />
          
          {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            name="mobile"
            type="text"
            {...register('mobile', {
              required: 'Mobile is required',
              pattern: {
                value: mobileRegex,
                message: 'Enter a valid mobile number'
              }
            })}
          />
          {errors.mobile && <span style={{ color: "red" }}>{errors.mobile.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: emailRegex,
                message: 'Enter a valid email address'
              }
            })}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: passwordRegex,
                message: 'Enter a valid password'
              }
            })}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Tables;
