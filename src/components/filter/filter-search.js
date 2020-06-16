import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

class RcFilterSearch extends Component {
  render() {
    return (
        <Search 
          loading={true}
          value="thuan-demo"
        />
    )
  }
}

export default RcFilterSearch