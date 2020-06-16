// detele then test
import React, {
  Component
} from 'react'

import './style.less'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3 ft">
                  <div className="widget-footer">
                      <div className="widget-quicklink">
                          <div className="title-wd-ft">
                              <h4>QUICK <span>LINKS</span></h4>
                          </div>
                          <ul className="menu_ft">
                            <li>
                            <Link to={'/'}>
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
                  </div>
              </div>
              <div className="col-sm-6 col-lg-3 ft">
                  <div className="widget-footer">
                      <div className="widget-quicklink">
                          <div className="title-wd-ft">
                              <h4>SERVICES</h4>
                          </div>
                          <ul className="menu_ft">
                            <li>
                            <Link to={'/'}>
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
                  </div>
              </div>
              <div className="col-sm-6 col-lg-3 ft">
                  <div className="widget-footer">
                      <div className="widget-quicklink">
                          <div className="title-wd-ft">
                              <h4>SUPPORT</h4>
                          </div>
                          <ul className="menu_ft">
                            <li>
                            <Link to={'/'}>
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
                  </div>
              </div>
              <div className="col-sm-6 col-lg-3 ft">
                  <div className="widget-footer">
                      <div className="widget-quicklink">
                          <div className="title-wd-ft">
                              <h4>CONTACT</h4>
                          </div>
                          <ul className="menu_ft">
                            <li>
                            <Link to={'/'}>
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
                  </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright text-center">
                  Silic Coporation Business, @copyright 2020.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
