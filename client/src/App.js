
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resources from './components/Resources'
import Form from './components/Form'
import Scapes from './components/Scapes'
import ScapeForm from './containers/ScapeForm'
import ScapeShow from './containers/ScapeShow'
import fetchAPI from './actions/fetchAPI'
import fetchScapes from './actions/fetchScapes'
import ScapeReducer from './reducers/ScapeReducer'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false, 
      scapes: []
    }
  }

  callAPI() {
    this.props.fetchAPI()
  }

  render() {
    return (
      <div className="App">
        <Router>
            <div>
              <Navbar/>
              <Switch>
                <Route path="/" render={props => <Home {...props} />} exact />
                <Route path="/scape/new" render={props => <ScapeForm {...props} />} exact />
                <Route path="/scapes/:scapeID" render={props => <ScapeShow {...props} />} exact  />
                <Route path="/about" render={props => <About {...props} />} exact />
                <Route path="/contact" render={props => <Contact {...props} />} exact />
                <Route path="/resources" render={props => <Resources {...props}  />} exact />
                <Route path="/scapes" render={(props) => <Scapes {...props} fetchScapes={this.props.fetchScapes} scapes={this.props.scapes} />} exact />
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scapes: state.scapes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchScapes: () => {
      dispatch(fetchScapes())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
