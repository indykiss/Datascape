
import React, { Component } from 'react';
import App from '../App.css';
import Chart from '../components/Chart';

const API_URL = "https://api.worldtradingdata.com/api/v1/forex_history&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"


// NOTHING WORKS
// Ok so I have the BARE basics down 
// I'm close to givng up on stock prices
// NEXT STEP IS 

class Scape extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stock: '',
      // need to say close price, not the others
      start_date: '',
      end_date: ''    };
  }

getURL = () => {
  return (
    "https://api.worldtradingdata.com/api/v1/history?symbol=" + this.state.stock + "&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
  )
}

  callAPI() {
    fetch(API_URL)
      .then(response => response.json())
      .then((responseData) => {
        alert(responseData)
        this.setState({ author: responseData});
      })
      .catch(error => this.setState({ error }));
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.setState({
        stock: this.state.stock,
        start_date: this.state.start_date,
        end_date: this.state.end_date
    })
    .callAPI(this.state.stock);
  }

  render() {
    return(
      <div>
        <h1>Create a scape</h1>
        <form onSubmit = { (event) => this.handleOnSubmit(event) }>
        <label>Select a stock</label>
          <input
              type = 'text'
              name = "stock"
              value = {this.state.stock}
              onChange = {this.handleOnChange}
          />
        <label>Select start date</label>
          <input
            type = 'date'
            name = "start_date"
            value = {this.state.start_date}
            onChange = { (event) => this.handleOnChange(event) }
          />
        <label>Select end date</label>
          <input
            type = 'date'
            name = "end_date"
            value = {this.state.end_date}
            onChange = { (event) => this.handleOnChange(event) }
          />
        <input type = "submit" />
      </form>
    </div>
  )}
}

export default Scape;
