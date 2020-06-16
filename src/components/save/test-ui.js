import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-less/semantic.less';
import './style.less'
class Index extends Component {
  testClick = () => {
    console.log('test click')
  }
  render() {
    console.log('Props current : ', this.props)
    return (
      <div className="btn-test">
        <h1>This is view test</h1>
        <Button primary onClick={this.testClick}>Button Sematic</Button>
      </div>
    )
  }
}

export default Index