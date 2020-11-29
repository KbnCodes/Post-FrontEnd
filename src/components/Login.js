import React from "react";
import { connect } from "react-redux";
import { startLoginUser } from "../actions/userAction";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };
    const redirect = () => {
      return this.props.history.push("/");
    };
    this.props.dispatch(startLoginUser(formData, redirect));
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
        <div className="card " >
          <h5 className="card-header">Login</h5>
          <div className="card-body">
            <form className="form-group" onSubmit={this.handleSubmit}>
              <label htmlFor="email">email</label>
              <input
                id="email"
                type="text"
                className="form-control"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
              <br />
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br />
              <button type="submit"  className="btn btn-primary" >Login</button>
            </form>
          </div>
        </div>
        
      
    );
  }
}
export default connect()(Login);
