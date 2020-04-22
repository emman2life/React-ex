import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import VidoePage from './VideoPage';


function App() {

  //render
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/VideoPage/:id" component={VidoePage}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
