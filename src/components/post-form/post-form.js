import React, { Component } from "react";
import { connect } from "react-redux";
import PlaceholderService from "../../services/placeholder-service";
import "./post-form.css";

class PostForm extends Component {
  placeholderService = new PlaceholderService();
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const body = this.getMessage.value;
    let editing = false;
    this.placeholderService.createPost(title, body).then(result => {
      this.props.dispatch({
        type: "ADD_POST",
        payload: result
      });
      this.getTitle.value = "";
      this.getMessage.value = "";
    });
  };
  render() {
    return (
      <div className="mb-4">
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
          <br />
          <br />
          <textarea
            required
            ref={input => (this.getMessage = input)}
            rows="5"
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button className="btn btn-success">Create</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
