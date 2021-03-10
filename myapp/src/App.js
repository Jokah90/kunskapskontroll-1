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
  const [Inputname, setInputname] = useState ('');
  const [Lastname, setLast] = useState ('');
  const [Check, setCheckbox] = useState('');
  const [Trip, setTrip] = useState('');

  return (
    <section className="App">
      <h1>Tickets</h1>
      <Destination setTrip={setTrip} Trip={Trip}/>
      <RadioButton />
      <Tickets />
      <Titel />
      <InputName setInputname={setInputname} name={Inputname} setLast={setLast} LastName={Lastname}/>
      <Checkbox  setCheckbox={setCheckbox} Check={Check}/>
      <Confirm />
    </section>
  );
}

export default App;
