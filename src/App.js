import React from 'react';
import axios from 'axios';


const axiosSave = () => {
  axios.get('http://192.168.11.7:3001/save', { withCredentials: true } )
    .then(res => {
      document.getElementById('message').innerHTML = res.data.message;
    })
    .catch(error => {
      document.getElementById('message').innerHTML = error.message;
    });
}

const axiosLoad = () => {
  axios.get('http://192.168.11.7:3001/load', { withCredentials: true } )
    .then(res => {
      document.getElementById('cookie').innerHTML = res.data.cookie;
      document.getElementById('session').innerHTML = res.data.session;
    })
    .catch(error => {
      document.getElementById('message').innerHTML = error.message;
    });
}

const fetchSave = () => {
  fetch('http://192.168.11.7:3001/save', { credentials: 'include' } )
    .then(res => {
      return res.json();
    })
    .then(json => {
      document.getElementById('message').innerHTML = json.message;
    })
    .catch(error => {
      document.getElementById('message').innerHTML = error;
    });
}

const fetchLoad = () => {
  fetch('http://192.168.11.7:3001/load', { credentials: 'include' } )
    .then(res => {
      return res.json();
    })
    .then(json => {
      document.getElementById('cookie').innerHTML = json.cookie;
      document.getElementById('session').innerHTML = json.session;
    })
    .catch(error => {
      document.getElementById('message').innerHTML = error;
    });
}

function App() {
  return (
    <div className="App">

      <button onClick={()=>axiosSave()}>axiosSave</button>
      <button onClick={()=>axiosLoad()}>axiosLoad</button>
      <button onClick={()=>fetchSave()}>fetchSave</button>
      <button onClick={()=>fetchLoad()}>fetchLoad</button>

      <div>
        message: <span id="message"></span>
      </div>
      <div>
        cookie: <span id="cookie"></span>
      </div>
      <div>
        session: <span id="session"></span>
      </div>

    </div>
  );
}

export default App;
