import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Sports from './pages/Sports';

const App = () => {
  const [sports, setSports] = useState([])

  // Get list of all sports
  const listSports = async () => {
    try {
      const res = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/all_sports.php`)
      console.log(res.data.sports);
      setSports(res.data.sports)
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sports' render={(props) => <Sports listSports={listSports} sports={sports}/>} />
        </Switch>  
      </div>
    </Router>  
  );
}

export default App;