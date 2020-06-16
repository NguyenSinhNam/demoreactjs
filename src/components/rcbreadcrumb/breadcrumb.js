import React, { Component } from 'react'

class RcBreadcrumb extends Component {
  render() {
    return (
      <div class="ui breadcrumb">
        <a class="section">Home</a>
        <i class="right angle icon divider"></i>
        <a class="section">Store</a>
        <i class="right angle icon divider"></i>
        <div class="active section">T-Shirt</div>
      </div>
    )
  }
}

export default RcBreadcrumb