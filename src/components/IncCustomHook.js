
import { useState } from "react"


export const IncrementFunction=()=>{
    let [number,setnumber]=useState(0)
    const inc=()=>{
        setnumber(number+1)
    }
    const dec=()=>{
        if(number>=1)
        {
            setnumber(number-1)
        }
        
    }
    return {number,inc,dec}
}