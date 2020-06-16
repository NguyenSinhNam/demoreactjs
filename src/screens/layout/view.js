import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.less'
import { SideBarView } from './sidebar'
import { HeaderView } from './header'
import Footer from './footer'
import PageTitle from './page-title'
import TopBar from './topbar'
import About from '../about'
import Portfolio from '../portfolio'
import Support from '../support'
import Services from '../services'
import Blog from '../blog'
import Contact from '../contact'
import Index from '../index'
// import { RcBreadcrumb } from '../../components/rcbreadcrumb'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import HomeLayout from '../home'
class LayoutView extends Component {
  render() {
    return (
      <div>
        <div className="app__layout a">
          <TopBar />
          <HeaderView />
        </div>
        <div className="app_content">
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/support" component={Support}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/index" component={Index}/>
        </div>
        <div className="app_footer">
          <Footer />
        </div>
      </div>
    )
  }
}

export default LayoutView
