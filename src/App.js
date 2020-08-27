import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import Main from './Pages/landing';
import Add from './Pages/add';
import Delete from './Pages/delete';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/add" component={Add}></Route>
        <Route exact path="/delete" component={Delete}></Route>
        {/* <Route></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
