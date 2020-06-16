
import React, { Component } from 'react'
import { Select } from 'semantic-ui-react'

const sortbyname = [
  {
    id: 1,
    value: 'Tăng dần',
    text: 'Tăng dần'
  },
  {
    id: 2,
    value: 'Giảm dần',
    text: 'Giảm dần'
  }
]
const sortbyactive = [
  {
    id: 1,
    value: 'active',
    text: 'Active'
  },
  {
    id: 2,
    value: 'deactive',
    text: 'Deactive'
  }
]
class RcFilterSort extends Component {
  render() {
    const { type } = this.props
    if (type === 'sortbyname') {
      return (
        <Select
          placeholder="Chooses sort"
          options={sortbyname}
        />
      )
    }
    if (type === 'sortbyactive') {
      return (
        <Select
          placeholder="Chooses option active"
          options={sortbyactive}
        />
      )
    }
    else return null
  }
}

export default RcFilterSort