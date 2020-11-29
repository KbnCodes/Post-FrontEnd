import React from "react";
import { startAddpost } from "../actions/postAction";
import {connect} from 'react-redux'

class PostForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "",
      post_name: "",
      description: ""
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: this.state.title,
      post_name: this.state.post_name,
      description: this.state.description,
    };
    const redirect = ()=>{
      return this.props.history.push('/posts/show')
  }
    this.props.dispatch(startAddpost(formData,redirect))

  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <div className="card">
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            className="form-control"
            name="title"
            onChange={this.handleChange}
            placeholder="Enter Post Title"
          />
          
          <input
            type="text"
            value={this.state.post_name}
            className="form-control"
            name="post_name"
            onChange={this.handleChange}
            placeholder="Enter Your Name"
          />
          <textarea
            value={this.state.description}
            name="description"
            className="form-control"
            onChange={this.handleChange}
            rows="5"
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          
          <button className="btn btn-primary">Post</button>
        </form>
        </div>
        
        
      </div>
    );
  }
}
export default connect()(PostForm);
