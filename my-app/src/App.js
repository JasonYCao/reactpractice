import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  let temp = 5

  const add = (e) => {
    e += 5
    return e
  }

  useEffect(() => {
    temp += 5
  }, [temp])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='mt-10'>
          {temp}
        </p>
        <p>
          hello i am a p
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
