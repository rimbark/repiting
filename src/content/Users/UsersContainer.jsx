import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Users from './Users'
import {
  loadUsers,
  setFollow,
  setPage,
  setTotalUsersCount,
  setUnFollow
} from '../../redux/usersReducer'

class UsersContainer extends React.Component {
  componentDidMount () {
    debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
        .then(response => {
          this.props.loadUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }

  changePage = (pageNumber) => {
    this.props.setPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
        .then(response => {
          this.props.loadUsers(response.data.items)
    })
  }

  render () {
    return (
        <Users {...this.props} changePage={this.changePage}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    totalUsersCount: state.usersReducer.totalUsersCount,
    currentPage: state.usersReducer.currentPage,
    pageSize: state.usersReducer.pageSize
  }
}

export default connect(mapStateToProps,
    {loadUsers, setFollow, setUnFollow, setPage, setTotalUsersCount})(
    UsersContainer)