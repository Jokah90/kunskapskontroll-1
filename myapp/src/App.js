import React, { useState } from 'react';
import './App.css';
import Destination from './component/Destination';
import RadioButton from './component/radioButton';
import Tickets from './component/tickets';
import Titel from './component/titelDropDown';
import InputName from './component/inputNames';
import Checkbox from './component/checkBox';
import Confirmation from './component/confirm';


function App() {


  //Skapar useStates HOOKS

  //User input
  const [Inputname, setInputname] = useState ('');
  const [Lastname, setLast] = useState('');

  //Destination
  const [Trip, setTrip] = useState('');
  const [Arrive, setArrival] = useState('');

  //Klass 1 and Klass 2
  const [Trainclass, setTrainclass] = useState('');

  //Tickets
  const [Amounttickets, setAmountTickets] = useState('');

  //Title
  const [Title,setTitle] = useState('');

  //Check
  const [Check, setCheck] = useState('');

  //Confirm
  const [Confirm, setConfirm] = useState('');
  


  //Skapar Funktionella event
  const addTrip = (e) => {setTrip(e)}  
  const addArrival = (e) => {setArrival(e)}
  const chooseClass = (e) => {setTrainclass(e)}
  const chooseAmountTicket = (e) => {setAmountTickets(e)}
  const titleName = (e) => {setTitle(e)}
  const checkBox = (e) => {setCheck(e)}
  const confirmBtn = (e) => {console.log(
    ` ${Trip}, 
      ${Arrive},
      ${Trainclass},
      ${Amounttickets}, 
      ${Title}, 
      ${Check}
    `
    )}


  return (
    <section className="App">
      <h1>Tickets</h1>
      <Destination 
      changeTrip={addTrip}
      changeArrivalTrip={addArrival} 
      />
      <RadioButton 
      chooseClass = {chooseClass}
      />
      <Tickets 
      chooseAmountTicket = {chooseAmountTicket}
      />
      <Titel 
      titleName = {titleName}
      />
      <InputName setInputname={setInputname} name={Inputname} setLast={setLast} LastName={Lastname}/>
      <Checkbox
      checkBox = {checkBox}
      />
      <Confirmation 
      confirmBtn = {confirmBtn}
      />
    </section>
  );
}

export default App;
