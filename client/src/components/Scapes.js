

import React, {Component} from 'react';
import '../App.css'


export default class ScapesContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            scapes: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/scapes')
            .then(response => response.json())
            .then((responseData) => {
            this.setState({scapes: responseData})
        }).catch(error => console.log(error))
    }

    render() {
        return (
          <div>
            {console.log(this.state)}
            {this.state.scapes.map((scape) => {
              return(
                <div className="tile" key={scape.id} >
                <h4> {scape.scape_name}</h4>
                <ul> {scape.stock_name} 
                {scape.history} 
                {scape.start_date} 
                {scape.end_date} 
                </ul>
                </div>
              )       
            })}
          </div>
        );
      }

}

