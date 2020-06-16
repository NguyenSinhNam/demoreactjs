// detele then test
import React, {
  Component
} from 'react'
import './style.less'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react"
import PageTitle from '../layout/page-title'

class Contact extends Component {
  render() {
    return (
      <div>
        <PageTitle pagetitle="Contact" />
        <section className="contact-area">
          <div className="container">
              <div className="row">
                <div className="col-md-12">

                </div>
              </div>
          </div>
      </section>

      <section className="contact-form-area">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title-form text-center">How can we help you?</div>
                <form action="#" method="post">
                    <div className="row contact-field">
                        <div className="col-md-6 contact-name">
                            <input type="text" name="your-name" placeholder="Your name *" />
                        </div>
                        <div className="col-md-6 contact-email">
                            <input type="email" name="your-email" placeholder="Your email *" />
                        </div>
                    </div>
                    <div className="row contact-field">
                        <div className="col-md-6 contact-address">
                            <input type="text" name="your-address" placeholder="Your address *" />
                        </div>
                        <div className="col-md-6 contact-phone">
                            <input type="number" name="your-phone" placeholder="Your phone *" />
                        </div>
                    </div>
                    <div className="contact-field">
                        <textarea name="message" placeholder="Messagge *"></textarea>
                    </div>
                    <div className="button-submit text-center">
                        <button type="submit" className="read-more">SEND NOW</button>
                    </div>
                </form>
              </div>
            </div>
        </div>
    </section>
    <section className="support-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="title_sec">Get in touch</h2>
          </div>
          <div className="col-md-4">
            <div className="support-item">
              <div className="support-content">
                <h6>Contact support</h6>
                <p>Can’t find your answer here? Get in touch with our support team - we‘re here to help.</p>
                <Link to={"/contact"} className="more">
                  Contact support
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="support-item">
              <div className="support-content">
                <h6>Open a ticket</h6>
                <p>Do you need assistance with an expert? Create a ticket now</p>
                <Link to={"/services"} className="more">
                  Open a ticket
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="support-item">
              <div className="support-content">
                <h6>Join our Slack</h6>
                <p>Join our public Slack community to chat with us and hundreds of UXW users.</p>
                <Link to={"/contact"} className="more">
                  Join our Slack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    )
  }
}

export default Contact
