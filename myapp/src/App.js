import React, { useState } from 'react';
import './App.css';
import Destination from './component/Destination';
import RadioButton from './component/radioButton';
import Tickets from './component/tickets';
import Titel from './component/titelDropDown';
import InputName from './component/inputNames';
import Checkbox from './component/checkBox';
import Confirm from './component/confirm';



function App() {
  //Skapar useStates HOOKS
  const [Inputname, setInputname] = useState ('');
  const [Lastname, setLast] = useState('');
  const [Trip, setTrip] = useState('');
  const [Arrive, setArrival] = useState('');

  //Skapar Funktionella event
  const addTrip = (e) => {setTrip(e)}  
  const addArrival = (e) => {setArrival(e)}

  return (
    <section className="App">
      <h1>Tickets</h1>
      <Destination 
      changeTrip={addTrip}
      changeArrivalTrip={addArrival} 
      />

      <RadioButton />
      <Tickets />
      <Titel />
      <InputName setInputname={setInputname} name={Inputname} setLast={setLast} LastName={Lastname}/>
      <Checkbox />
      <Confirm />
    </section>
  );
}

export default App;
