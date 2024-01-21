import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName,setFirstName] = useState("");
  // const[lastName,setLastName] = useState("");


  // function changeFirstNameHandler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }


  const [formData, setFormData] = useState({ firstName: "", lastName: "", cmt: "", isVisible: false, mode: "", favCar:""});

  // console.log(formData);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }
function submitHandler(event){
event.preventDefault();

console.log("printing all data")
console.log(formData);
}
  return (
    <div className="App">

      <form onSubmit={submitHandler}>
        <input type="text"
          placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}
        />
        <br></br>
        <input type="text"
          placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <br></br>
        <textarea placeholder='comment'
          onChange={changeHandler}
          name='cmt'
          value={formData.cmt}
        />
        <br />
        <input type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am i Visible?</label>

        <br />
        <br />

        <fieldset>
          <legend>Mode:</legend>
          <input type="radio"
            onChange={changeHandler}
            name='mode'
            value="Online-mode"
            id='Online-mode'
            checked={formData.mode === "Online-mode"}
          />
          <label htmlFor='Online-mode'>Online Mode</label>

          <input type="radio"
            onChange={changeHandler}
            name='mode'
            value="Offline-mode"
            id='Offline-mode'
            checked={formData.mode === "Offline-mode"}
          />
          <label htmlFor='Offline-mode'>Offline Mode</label>

        </fieldset>

        <select name='favCar'
        onChange={changeHandler}
        value={formData.favCar}
        id='favCar'>

          <option value="scorpio">Scorpio</option>
          <option value="thar">Thar</option>
          <option value="fortuner">Fortuner</option>
          <option value="defender">Defender</option>
          <option value="legender">Legender</option>
        </select>
<br/>
<br/>

      <button onChange={submitHandler}>Submit</button>
      </form>

    </div>
  );
}

export default App;
