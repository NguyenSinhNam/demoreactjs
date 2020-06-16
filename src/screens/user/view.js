import React, { Component } from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { FilterView } from '../../components/filter'
import { loadData, addUser } from './redux/action'

const TableView = (users) => {
  return (
    <div className="app__table">
      <div className="column app__button-add">
        <Button className="ui primary button">Add</Button>
      </div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Active</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {users.user.map((item, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.age}</Table.Cell>
                <Table.Cell>{item.active ? 'Active' : 'Deactive'}</Table.Cell>
                <Table.Cell>
                  <Button>
                    <Icon name="edit" />
                  </Button>
                  ||
                  <Button>
                    <Icon name="delete" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  )
}
class User extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getListUser() {
    this.props.loadListUser({
      payload: {
        limit: 10
      }
    })
  }
  addNewUser() {
    const data = { name: 'thuan add new', age: '12', active: false }
    this.props.addUser({ payload: data })
  }
  componentDidMount() {
    this.getListUser()
  }

  render() {
    // console.log('Props current : ', this.props)
    return (
      <div>
        <Button onClick={() => this.addNewUser()} loading={this.props.isFetching} >ADD USER</Button>
        <FilterView />
        <TableView user={this.props.user} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  // console.log('state at mapStateToProps: ', state.user.get('isFetching'))
  // console.log('state at mapStateToProps1: ', state)
  // console.log('state at mapStateToProps2: ', state.user.toJS())
  return {
    // user: state.user
    user: state.user.toJS().data,
    isFetching: state.user.toJS().isFetching
    // user: state.user.get('data').get(0),
    // isFetching: state.user.get('isFetching')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadListUser: (payload) => dispatch(loadData(payload)),
    addUser: (data) => dispatch(addUser(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)