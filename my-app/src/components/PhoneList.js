//TASK3 = Use map function to display the data.

import React from 'react'

function PhoneList() {
  const data = [
    {
      id: 1,
      Name: "One plus Nord",
      price: 14999,
      colour: "Bahama Blue",
    },
    {
      id: 2,
      Name: "iPhone 13",
      price: 70000,
      colour: "Green",
    },
    {
      id: 3,
      Name: "Google pixel 6",
      price: 46000,
      colour: "Black",
    },
  ]
 

  return (
    <div>{
      data.map((myPhone)=>(
          <li> {myPhone.Name} </li>
      ))
      }
    </div>
  )
}

export default PhoneList