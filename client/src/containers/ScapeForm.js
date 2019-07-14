
import React, { Component } from 'react'
import App from '../App.css'
//import Chart from '../components/Chart'
import { connect } from 'react-redux'
import fetchAPI from '../actions/fetchAPI'
import fetchScapes from '../actions/fetchScapes'
import ScapeReducer from '../reducers/ScapeReducer'
import Form from '../components/Form'

// Ok so I have the BARE basics down 
// NEXT STEP:
// I called the API and that's working
// Need to parse the data
// Then need to display data

class ScapeForm extends Component {

  constructor(props) {
    super(props);
    self = this
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
        scape_name: '',
        stock_name: '',
        history: '',
        // need to say close price, not the others
        start_date: '',
        end_date: ''    
      };
  }

// My handle on submit is broken, since its not saving it to the store
// In between inputting all the data (which works) and hitting submit (broken)


  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit(event) {
    console.log(this.props.input)
    event.preventDefault();
    this.props.addScape(this.state)
    alert("meep")
    this.setState({
        scape_name: '',
        stock_name: '',
        start_date: '',
        end_date: ''
    })
    alert("Made a scape!")
  }

  render() {
    return(
      <div>
        <h1>Create a scape</h1>
        <Form input={this.state} handleOnSubmit={this.handleOnSubmit} handleOnChange={this.handleOnChange}/>
    </div>
  )}
}

const mapDispatchToProps = dispatch => {
  return {
    addScape: (scape) => dispatch((scape))
  }
}

export default connect(null, mapDispatchToProps)(ScapeForm)
