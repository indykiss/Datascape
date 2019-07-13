
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
                <Route exact path='/' component={Home}/>
                <Route exact path='/scape/new' component={ScapeForm}/>
                <Route path='/scapes/:scapeID' component={ScapeShow}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/resources' component={Resources}/>
                <Route exact path='/scapes' component={Scapes}/>
              </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

//? ?    see_the_scape: state.stock_name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAPI: () => {
      dispatch(fetchAPI())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)
