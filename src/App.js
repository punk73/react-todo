import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Todos from './components/Todos';
// import Axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';
import Registration from './components/registration';
import NavBar from './components/Navbar';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" >
          <Todos />      
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
