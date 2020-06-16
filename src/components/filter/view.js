import React, { Component } from 'react'
import RcFilterSearch from './filter-search'
import RcFilterSort from './filter-sort'
import './style.less'

class FilterView extends Component {
  render() {
    return (
      <div className="app__filter">
        <div className="ui three column grid">
          <div className="filter__item">
            <h4>Search by name:</h4>
            <RcFilterSearch />
          </div>
          <div className="filter__item">
            <h4>Sort by name:</h4>
            <RcFilterSort type="sortbyname"/>
          </div>
          <div className="filter__item">
            <h4>User active:</h4>
            <RcFilterSort type="sortbyactive"/>
          </div>
        </div>
      </div>
    )
  }
}

export default FilterView