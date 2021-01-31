import React, { useState } from  'react';
import './App.css';
import UserForm from './components/UserForm';
import UserData from './components/UserData';


function App() {
  const [state, setState]= useState({
    firstName:"",
    lastName:"", 
    email:"",
    password:"",
    confirmPassword:"",
  });
  return (
    <div className="App">
    <UserForm inputs={state} setInputs={setState}></UserForm>
    <UserData data={state}/>
    </div>
  );
}

export default App;
