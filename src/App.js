import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([])

  // useEffect(() => {
  //   fetch('/books')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('data', data)
  //       setBooks(data)
  //     })

  // }, [])

  useEffect(() => {
    axios.get('/books')
      .then(response => {
        setBooks(response.data)
        console.log(response);
      })
  }, [])
   
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {JSON.stringify(books)}
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
