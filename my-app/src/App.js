//MAIN FILE
import './App.css';
import Title from './components/Title';
import Block1 from './components/Block1';
import UsingProps from './components/UsingProps';
import PhoneList from './components/PhoneList';
import React, { useState } from 'react';
import Button from './components/Button';
import Form from './components/Form';

const itemList={
  Name:"Jessica",
  Age: 20,
  Branch:"CSE"
}

 function App() {
   
   

  return (
    <div className='container'>
    <Title/>
    <Block1 />
    <UsingProps myItems={itemList} />
    <PhoneList />
    <br/>
    <Button/>
    <br/>
    <Form/>
    </div>
  );
}

export default App;
