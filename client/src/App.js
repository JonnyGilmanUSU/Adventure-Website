// File: src/App.js
import { useEffect, useState } from 'react';
import axiosInstance from './api/axiosInstance';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/hello'); 
        setMessage(response.data.message); 
      } catch (error) {
        setMessage('Error fetching data.');
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
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
