import React from 'react';
import './App.css';
import Customer from './components/Customer';


const customer = {
  "id" : 1
  , "name" : "Cunho"
  , "birthDay": "1988-09-20"
  , "gender" : "20200114"
  , "imageURL" : "http://placeimg.com/64/64/any"
}


function App() {
  return (
    <Customer 
      id={customer.id} 
      name={customer.name} 
      birthDay={customer.birthDay} 
      gender={customer.gender} 
      imageURL={customer.imageURL} />
  );
}

export default App;
