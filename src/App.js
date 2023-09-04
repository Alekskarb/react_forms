import './App.css';
import {useRef, useState} from "react";

function App() {
    // const [inputs, setInputs] = useState({
    console.log('render')
    const inputs = useRef({
        name: '',
        lastname: '',
        middname: '',
    });

    const handler = (e) => {
            inputs.current = {
                ...inputs.current,
                [e.target.name]: e.target.value
            }
    }
    const submit = () => {
        console.log('submit: ', inputs.current)
    }

  return (
    <div className="App">
      <header className="App-header">
          <input placeholder='name' name='name' type="text" onChange={handler}/>
          <input placeholder='lastname' name='lastname' type="text" onChange={handler}/>
          <input placeholder='middname' name='middname' type="text" onChange={handler}/>
          <button onClick={submit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
