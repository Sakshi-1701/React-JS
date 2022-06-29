//TASK 1= Creating components and exporting them to main app.js
//component 1
import React from 'react';

class Block1 extends React.Component {
  render() {
    return (
      <div>
     <h3> Happy Coding ! </h3>
     <img
  src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  alt="Girl in a jacket"
  width={500}
  height={400}
  
/>
     </div>
    );
  }
}


export default Block1;