import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

// component
const Users = props => (
  <tr>
    <td>{props.users.username}</td>
    <td><Link to={"edit/"+props.users._id}>edit</Link> | <a href="#" onClick={() => {props.deleteUser(props.users._id)}}>delete</a></td>
  </tr>
)

// component
class UserList extends Component {
  constructor(props){
    super(props)

    this.deleteUsers = this.deleteUsers.bind(this);
    this.state = {users: []};
  }

  componentDidMount(){
    axios.get('http://localhost:5000/users')
      .then(response => {
        this.setState({
          users: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteUsers(id){
    axios.delete('http://localhost:5000/users/'+id)
      .then(res => console.log(res.data))
    this.setState({
      users: this.state.users.filter(el => el._id !== id)
    })
  }

  UserList() {
    return this.state.users.map(userList => {
      return <Users users={userList} deleteUser={this.deleteUsers} key={userList._id} />
    })
  }

  render(){
    return(
      <div>
        <h3>Logged Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.UserList()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserList;