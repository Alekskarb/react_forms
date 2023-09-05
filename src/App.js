import './App.css';
import {useRef, useState} from "react";

function App() {
    console.log('render')

    const formRef = useRef()

    const [inputs, setInputs] = useState({
    // const inputs = useRef({
    //     name: '',
    //     lastname: '',
    //     middname: '',
    });
    const handler = (e) => {
        // inputs.current = {
        //     ...inputs.current,
        //     [e.target.name]: e.target.value
        // }
        console.log('event: ', e)

        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const submit = (e) => {
        // console.log('submit: ', inputs.current)
        e.preventDefault()
        console.log('submit: ', inputs)
        formRef.current.reset()
        // reset()
    }
    const reset = () => {
        console.log('reset: ')
        setInputs({})
    }

    return (
    <div className="App">
      <header className="App-header">
          {/*<form action="http://amd.by">*/}
          <form ref={formRef} action="" onChange={handler}
                onSubmit={submit} onReset={reset}>
              <input placeholder='name' name='name' type="text" />
              <input placeholder='lastname' name='lastname' type="text"/>
              <input placeholder='middname' name='middname' type="text"/>
              {/*<button onClick={submit}>Submit</button>*/}
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
          </form>
      </header>
    </div>
  );
}

export default App;
