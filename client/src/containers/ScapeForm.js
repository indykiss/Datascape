
import React, { Component } from 'react'
import App from '../App.css'
//import Chart from '../components/Chart'
import fetchAPI from '../actions/fetchAPI'

// Ok so I have the BARE basics down 
// NEXT STEP:
// I called the API and that's working
// Need to parse the data
// Then need to display data

export default class ScapeForm extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      scape_name: this.props.scape_name,
      stock_name: this.props.stock_name,
      history: this.props.history,
      // need to say close price, not the others
      start_date: this.props.start_date,
      end_date: this.props.end_date    };
  }


  // I need to get the selected start and end dates close price

  handleOnChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.setState({
        scape_name: this.scape_name,
        stock_name: this.state.stock_name,
        start_date: this.state.start_date,
        end_date: this.state.end_date
    })
    this.callAPI(this.state.stock_name);
  }

  render() {
    return(
      <div>
        <h1>Create a scape</h1>
        <form onSubmit={ (event) => this.handleOnSubmit(event) }>
        <label>Name this scape</label>
        <input
              type='text'
              name="scape_name"
              value={this.state.scape_name}
              onChange={ (event) => this.handleOnChange(event) }
          />
          <label>Select a stock</label>
          <input
              type='text'
              name="stock_name"
              value={this.state.stock_name}
              onChange={ (event) => this.handleOnChange(event) }
          />
        <label>Select start date</label>
          <input
            type='date'
            name="start_date"
            value={this.state.start_date}
            onChange={ (event) => this.handleOnChange(event) }
          />
        <label>Select end date</label>
          <input
            type='date'
            name="end_date"
            value={this.state.end_date}
            onChange={ (event) => this.handleOnChange(event) }
          />
        <input type="submit" />
      </form>
    </div>
  )}
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addScape: formData => dispatch({ type: 'ADD_SCAPE', payload: formData })
//   }
// };
