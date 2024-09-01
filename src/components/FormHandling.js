import React from 'react'
import { useForm } from 'react-hook-form';
import { incrementFunction } from './IncCustomHook';

const FormHandling = () => {
 

  const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const mobileRegex = /^\+?[1-9]\d{1,14}$/;

  const {register,handleSubmit,formState:{errors}}=useForm()
  const data=(s)=>{
    console.log(s)
  }
  
  return (
    <form onSubmit={handleSubmit(data)}>
     
        <div>
            <label htmlFor='name'>name</label>
            <input id="name" name="name" type="text" {...register("name",{
              required:"name must required",
              pattern:{
                value:nameRegex,
                message:"enter correct name"
              }
            })}></input>
            {errors?.name && <span style={{color:"red"}}>{errors?.name?.message}</span>}

        </div>
        <div>
            <label htmlFor='email'>email</label>
            <input id="email" name="email" type="text" {...register("email",{
              required:"email must",pattern:{
                value:emailRegex,
                message:"give correct email"
              }
            })}></input>
            {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}
        </div>
        <div>
            <label htmlFor='password'>password</label>
            <input  id="password" name="password" type="text" {...register("password",{
              required:"password must",pattern:{
                value:passwordRegex,
                message:"give correct password"
              }
            })}></input>
            {errors.password && <span style={{color:"red"}}>{errors.password.message}</span>}

        </div>
        <div>
            <label htmlFor='mobile'>mobile</label>
            <input id="mobile" {...register("mobile",{
              required:"mobile must",
              pattern:{
                value:mobileRegex,
                message:"give correct mobile"
              }
            })} name="mobile" type="text"></input>
            {errors.mobile && <span style={{color:"red"}}>{errors.mobile.message}</span>}

        </div>
        <button type="submit">Submit</button>

    </form>
  )
}

export default FormHandling