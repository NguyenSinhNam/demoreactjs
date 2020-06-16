import React, { Component } from 'react'
import './style.less'
import { Header } from 'semantic-ui-react'
import MainnavMenu from '../menu'
import logo from './logo.png';


class HeaderView extends Component {
  render() {
    return (
      <div className="header" id="header">
        <div className="container">
          <div className="logo">
            <a href="index.js">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <MainnavMenu />
        </div>
      </div>
    )
  }
}

export default HeaderView
