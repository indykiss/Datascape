
import React, { Component } from 'react'

class Form extends Component {
    
    render() {
        const { handleOnChange, input, handleOnSubmit } = this.props
        console.log(this.props)
        return (
        <div>
            <form onSubmit={ handleOnSubmit }>
            <label>Name this scape</label>
            <input
                type='text'
                name="scape_name"
                value={input.scape_name}
                onChange={handleOnChange}
            />
            <label>Select a stock</label>
            <input
                type='text'
                name="stock_name"
                value={input.stock_name}
                onChange={ handleOnChange}
            />
            <label>Select start date</label>
            <input
                type='date'
                name="start_date"
                value={input.start_date}
                onChange={handleOnChange}
            />
            <label>Select end date</label>
            <input
                type='date'
                name="end_date"
                value={input.end_date}
                onChange={handleOnChange}
            />
            <input type="submit"/>
            </form>
        </div>
      )
    }
}

export default Form
