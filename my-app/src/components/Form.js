//TASK 4: to make a form and take name as input


import React,{useState} from 'react'

export default function Form() {
    const [name, setName]=useState("");
    const inputEvent=(event)=>{
        event.preventDefault();
        alert(`Hello ${name}`)
    }
  return (
    <div>
       <form onSubmit={inputEvent}>
         <label>
          <input type="text" value={name} placeholder='Enter your name' 
          onChange={(e)=>setName(e.target.value)}
          />
         </label>
         <input type="submit"/>
        </form> 

    </div>
  )
}
