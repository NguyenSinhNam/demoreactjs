// detele then test
import React, {
  Component
} from 'react'
import './style.less'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PageTitle from '../layout/page-title'

class Services extends Component {
  render() {
    return (
      <div>
        <PageTitle pagetitle="Services" />
        <section className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="services-item center">
                            <div className="services-content">
                                <h5>Healthcare Services</h5>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="services-item center">
                            <div className="services-content">
                                <h5>Business Analysis</h5>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="services-item center">
                            <div className="services-content">
                                <h5>Investment Planning</h5>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="services-item center">
                            <div className="services-content">
                                <h5>Consulting Solutions</h5>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="services-item center">
                            <div className="services-content">
                                <h5>Finance Planning</h5>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="services-item center">
                            <div className="services-content">
                                <h5>Business Solutions</h5>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
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

export default Services
