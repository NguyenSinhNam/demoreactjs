// detele then test
import React, {
  Component
} from 'react'

import './style.less'

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <h1>{this.props.pagetitle}</h1>
        <p>We're here to help 24/7, 365 days a year.</p>
      </div>
    )
  }
}

export default PageTitle
