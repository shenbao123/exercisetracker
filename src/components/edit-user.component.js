import axios from 'axios'
import React, {Component} from 'react';


class EditUser extends Component {
  constructor(props){
    super(props);

    // can initialize state inside constructor, or without a constructor
    this.state = {
      username: '',
      users: []
    }

    // binding event handler
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount(){
    axios.get("http://localhost:5000/users/"+this.props.match.params.id)
      .then(response => {
        this.setState({
          username:response.data.username
        })
      })
      .catch((error) => {
        console.log(error)
      })

    axios.get("http://localhost:5000/users")
      .then(response => {
        if(response.data.length > 0){
          this.setState({
            users: response.data.map(user => user.username)
          })
        }
      })
  }

  onChangeUsername(e){
    this.setState({
      username: e.target.value
    });
  }
  onSubmit(e){
    e.preventDefault(); //will prevent normal html submit request, will prevent the page to reload when submit
    const user = {
      username: this.state.username
    }
    axios.patch("http://localhost:5000/users/"+this.props.match.params.id, user)
      .then(res => console.log(res.data))
    window.location = '/user/list';
  }

  render(){
    return(
      <div>
        <h3>Edit User Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input text="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername} />
          </div>
          <div className="form-group">
            <input type="submit" value="Edit User Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default EditUser;