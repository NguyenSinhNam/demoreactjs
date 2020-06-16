import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from './list'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  changeCount = (count) => {
    this.setState({
      count
    })
  }
  // changeAge = (age) => {
  //   this.setState({
  //     user: {
  //       age
  //     }
  //   })
  // }
  addNew = () => {
    this.props.dispatch({
      type: 'ADD',
      payload: {
        count: this.state
      }
    })
    console.log('dispatch add new')
  }
  render() {
    return (
      <div>
        <div>
          name: <input value={this.state.count} onChange={e => this.changeCount(e.target.value)} />
          {/* age: <input value={this.state.user.age} onChange={e => this.changeAge(e.target.value)} /> */}
        </div>
        <button onClick={this.addNew}>ADD</button>
        <List />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {  
    // map state in store to props number at this component.
    number: state.counter.number
  }
}
// export default Home
export default connect(mapStateToProps)(Home)