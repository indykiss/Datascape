
import React, { Component } from 'react';
import App from '../App.css';
import Chart from '../components/Chart';


// Ok so I have the BARE basics down 
// I'm close to givng up on stock prices
// NEXT STEP:
// I called the API and that's working
// Need to parse the data
// Then need to pass the data into the vis

class Scape extends Component {

  constructor(props) {
    super(props)
    this.state = {
      stock_name: '',
      history: '',
      // need to say close price, not the others
      start_date: '',
      end_date: ''    };
  }

getURL = () => {
  //https://api.worldtradingdata.com/api/v1/history?symbol=AAPL&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz
  return (
    "https://api.worldtradingdata.com/api/v1/history?symbol=" + this.state.stock_name + "&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
  )
}

  callAPI() {
    fetch(this.getURL())
      .then(response => response.json())
      .then((responseData) => {
        this.setState({ stock_name: responseData.name,
          history: responseData.history
        });
      })
      .catch(error => this.setState({ error }));
      console.log(this)
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
        <form onSubmit = { (event) => this.handleOnSubmit(event) }>
        <label>Select a stock</label>
          <input
              type = 'text'
              name = "stock_name"
              value = {this.state.stock_name}
              onChange = { (event) => this.handleOnChange(event) }
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

// const mapDispatchToProps = dispatch => {
//   return {
//     addScape: formData => dispatch({ type: 'ADD_SCAPE', payload: formData })
//   }
// };

export default Scape;