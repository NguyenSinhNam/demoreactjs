// detele then test
import React, {
  Component
} from 'react'

import './style.less'

class TopBar extends Component {
  render() {
    return (
      <section className="header-top">
            <div className="container">
                <div className="row">
                    <div className="one-half">
                        <ul className="list-contact">
                            <li className="phone-number">
                                <span><i className="fa fa-phone" aria-hidden="true"></i> Call us: </span>
                                <a href="tel:0123456789" title="phone">0123 456 789</a>
                            </li>
                            <li className="email">
                                <span><i className="fa fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:abcdemo@gmail.com" title="">abcdemo@gmail.com</a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="one-half">
                        <div className="purchase">
                            <a href="" title="">purchase</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default TopBar
