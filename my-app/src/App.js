import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import Block1 from './components/Block1';
import UsingProps from './components/UsingProps';
import PhoneList from './components/PhoneList';

const itemList={
  Name:"Jessica",
  Age: 20,
  Branch:"CSE"
}

 function App() {

  return (
    <>
    <Title/>
    <Block1 />
    <UsingProps myItems={itemList} />
    <PhoneList />
    </>
  );
}

export default App;
