import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './style.less'

class SideBarView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true
    }
  }
  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    const { children } = this.props
    return (
      <div className="app__siderbar">
        <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
          <Link to={'/user'}>
            <Menu.Item name='user'>
              <Icon name='user' />
              User
                </Menu.Item>
          </Link>
          <Link to={'/note'}>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
                </Menu.Item>
          </Link>
        </Sidebar>
        <Sidebar.Pusher className="app__content">
          <div className="ui one column grid app__content--button">
            <div className="column">
              <Button icon onClick={this.toggleVisibility} >
                <Icon name='align justify' />
              </Button>
            </div>
          </div>
          <Segment basic>
            {children}
          </Segment>
        </Sidebar.Pusher>
      </div >
    )
  }
}

export default SideBarView
