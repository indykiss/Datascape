
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resources from './components/Resources';
import ScapeForm from './containers/ScapeForm';
import ScapeShow from './containers/ScapeShow';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Navbar/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/scape/new' component={ScapeForm}/>
                <Route path='/scapes/:scapeID' component={ScapeShow}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/resources' component={Resources}/>
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
