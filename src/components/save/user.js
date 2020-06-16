import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        age: ''
    }
  }
 
  changeName = (name) => {
    this.setState({
      name 
    })
  }

  changeAge = (age) => {
    this.setState({
      age
    })
  }

  addUser = () => {
    this.props.dispatch({
      type: 'ADD',
      payload: {
        user: {
          name: this.state.name,
          age: this.state.age
        }
      }
    })
    this.setState({
      name: '',
      age: ''
    })
  }
  delete = (name) => {
    this.props.dispatch({
      type: 'DELETE',
      payload: {
        name
      }
    })
  }
  render() {
    console.log('Props current : ', this.props)
    return (
      <div>
        <h1>show list user</h1>
        {this.props.user.map((item, index) => {
          return (
            <div key={index}>
              <li>{item.name}</li>
              <button onClick={ () => {this.delete(item.name)}}>Delete</button>
            </div>
          )
        })}
        name: <input value={this.state.name} onChange={e => this.changeName(e.target.value)} />
        <br />
        age: <input value={this.state.age} onChange={e => this.changeAge(e.target.value)} />
        <br />
        <button onClick={this.addUser}>add new</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log('state: ', state)
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(User)