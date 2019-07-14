

import React, { Component } from 'react'
//import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
//import { Scape } from "./ScapeForm";
import App from '../App.css'
//import Chart from '../components/Chart'
import { connect } from 'react-redux'
import fetchScapes from '../actions/fetchScapes'
import ScapeReducer from '../reducers/ScapeReducer'

class ScapeShow extends Component {

    componentDidMount() {
      const scapeId = window.location.href.split('/')[5]
      this.props.fetchScape(scapeId)
    }
  
    render() { 
      return (
        <div>
          {this.props.scapes}
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => ({
    scapes: state.scapes.scape
  })
  
  const mapDispatchToProps = dispatch => {
    return {
        fetchScape: formData => dispatch({ type: 'FETCH_SCAPE', payload: formData })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ScapeShow)



    // const scape = props.scape.map((scape, index) => {
    //   return <li key={index}>{scape.start_date}{scape.end_date}</li>;
    // });

    // return (
    //     <div>
    //         <XYPlot
    //             width={300}
    //             height={300}>
    //             <VerticalGridLines />
    //             <HorizontalGridLines />
    //             <XAxis />
    //             <YAxis />
    //             <LineSeries
    //                 data={[
    //                     {x: 1, y: 4},
    //                     {x: 5, y: 2},
    //                     {x: 15, y: 6}
    //                 ]}/>
    //         </XYPlot>       
    //     </div>
    // );
    

    
