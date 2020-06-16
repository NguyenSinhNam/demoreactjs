// detele then test
import React, {
  Component
} from 'react'
import './style.less'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PageTitle from '../layout/page-title'

class Support extends Component {
  render() {
    return (
      <div>
        <PageTitle pagetitle="Support" />
        <section className="support-area">
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                    <div className="support-item">
                      <div className="support-content">
                        <h6>How to start with Woo-Commerce?</h6>
                        <p>It's easy to start with Woo-Commerce in 5 steps Choose Hosting  You need to be running WordPress on a self-hosted site We have partnered with Bluehost to offer you a custom ...</p>
                        <Link to={"/services"} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="support-item">
                      <div className="support-content">
                        <h6>Need Woo-Commerce helps?</h6>
                        <p>HERE ARE 7 TIPS FOR FINDING THE BEST SUPPORT Looking to run your own online store? WordPress might seem a strange choice, given its popular use as a ...</p>
                        <Link to={"/services"} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="support-item">
                      <div className="support-content">
                        <h6>How Do I Install Woo-Commerce?</h6>
                        <p>If you’ve ever added a plugin to your WordPress site, then you already know installing this one is easy Before you install, ensure you have: Hosting set up A ...</p>
                        <Link to={"/services"} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="support-item">
                      <div className="support-content">
                        <h6>Fatal Error: Allowed Memory Size Exhausted</h6>
                        <p>It’s very common to get fatal error messages about memory; ‘Fatal Error : Memory Size Exhausted’ This can happen when you install themes, plugins or upgrade to the latest ...</p>
                        <Link to={"/services"} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="support-item">
                      <div className="support-content">
                        <h6>How Can I Customize WooCommerce?</h6>
                        <p>There are four different ways you can customize your online store with Woo-Commerce You can choose a theme and add plugins or extensions An extension is just like a ...</p>
                        <Link to={"/services"} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="support-item">
                      <div className="support-content">
                        <h6>How to fix 500 Internal Server Error?</h6>
                        <p>If you just installed WordPress, a WordPress plugin, or a theme for your site and out of nowhere your site returns a 500 Internal Server Error, please read the ...</p>
                        <Link to={"/services"} className="read-more">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <Link to={"/about"} className="read-more">
                    EXPLORE ALL ARTICLES
                  </Link>
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

export default Support
