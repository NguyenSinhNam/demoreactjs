import React, { Component } from 'react'
import { connect } from 'react-redux'
class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      number: ''
    }
  }
  addNew = () => {
    this.props.dispatch({
      type: 'ADD',
      // payload: {
      //   number: this.state.number
      // }
    })
  }
  minus = () => {
    this.props.dispatch({
      type: 'MINUS'
    })
  }
  onchangeNumber = (number) => {
    this.setState({
      number
    })
  }
  render() {
    return (
      <div>
        <input value={this.state.number} onChange={e => this.onchangeNumber(e.target.value)}/>
        {/* <h1>{arrNumber.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>
            </div>
          )
        })}</h1> */}
        <h1>{this.props.number.number}</h1>
        <button onClick={this.addNew}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}
export default connect(mapStateToProps)(List)