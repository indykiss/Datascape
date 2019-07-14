

// Add the external and internal fetchs here, then export and import 

// need another fetch API to connect to my rails API

import React, { Component } from 'react'
import ScapeForm from '../containers/ScapeForm'
import ScapeReducer from '../reducers/ScapeReducer'


export default function fetchAPI() {
    const getURL = () => {
        //https://api.worldtradingdata.com/api/v1/history?symbol=AAPL&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz
        return (
          "https://api.worldtradingdata.com/api/v1/history?symbol=" + this.state.stock_name + "&api_token=EDP0CVswPgdwU2XzgIfVhkhhMSB9wtvUuSa5zth0aIbIE856xVdrVyoqB1mz"
        )
      }

      return (dispatch) => {
        dispatch({type: 'LOADING_SCAPES'});

      return fetch(this.getURL())
            .then(response => response.json())
            .then((responseData) => {
              // instead of this.setState, dispatch to reducer
              // fetch post request to save it on the backend to the store; the store is the returned value from the reducer
              // dispatch to the reducer
              // saving into 2 places
              // this.setState({ stock_name: responseData.name,
              //   history: responseData.history
              // });

              const scapeScape = responseData
                  dispatch({type: "FETCH_SCAPES", payload: scapeScape})
              })
            .catch(error => this.setState({ error }));
      }
}


