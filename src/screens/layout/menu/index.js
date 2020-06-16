// detele then test
import React, {
  Component
} from 'react'
import './style.less'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MainnavMenu extends Component {
  render() {
    return (
      <div className="mainnav">
        <ul>
          <li>
          <Link to={'/index'}>
              HOME
          </Link>
          </li>
          <li>
          <Link to={'/about'}>
              ABOUT
          </Link>
          </li>
          <li>
          <Link to={'/services'}>
              SERVICES
          </Link>
          </li>
          <li>
          <Link to={'/portfolio'}>
              PORTFOLIO
          </Link>
          </li>
          <li>
          <Link to={'/support'}>
              SUPPORT
          </Link>
          </li>
          <li>
          <Link to={'/blog'}>
              BLOG
          </Link>
          </li>
          <li>
          <Link to={'/contact'}>
              CONTACT
          </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default MainnavMenu
