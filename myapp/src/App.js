import './App.css';
import City from './component/city';
import RadioButton from './component/radioButton';
import Tickets from './component/tickets';
import Titel from './component/titelDropDown';
import InputName from './component/inputNames';
import Checkbox from './component/checkBox';

function App() {
  return (
    <section className="App">
      <h1>ÅKA TÅG</h1>
      <City />
      <RadioButton />
      <Tickets />
      <Titel />
      <InputName />
      <Checkbox />
    </section>
  );
}

export default App;
