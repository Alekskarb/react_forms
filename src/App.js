import './App.css';
import {useState} from "react";


function App() {
    const [inputs, setInputs] = useState({
        name: '',
        lastname: '',
        middname: '',
    });

    const handler = (e) => {
        if (e.target.value.includes('a')) {
            setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: prevState[e.target.name] + '-'
            }))
        } else {
            setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }

    }
    const submit = () => {
        console.log('submit: ', inputs)
        setInputs({
            name: '',
            lastname: '',
            middname: '',
        });
    }

  return (
    <div className="App">
      <header className="App-header">
          <input value={inputs.name} placeholder='name' name='name' type="text" onChange={handler}/>
          <input value={inputs.lastname} placeholder='lastname' name='lastname' type="text" onChange={handler}/>
          <input value={inputs.middname} placeholder='middname' name='middname' type="text" onChange={handler}/>
          <button onClick={submit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
