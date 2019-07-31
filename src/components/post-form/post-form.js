import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions";
import PlaceholderService from "../../services/placeholder-service";
import "./post-form.css";

class PostForm extends Component {
  placeholderService = new PlaceholderService();
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const body = this.getMessage.value;
    this.placeholderService.createPost(title, body).then(result => {
      this.props.dispatch(createPost(result));
      this.getTitle.value = "";
      this.getMessage.value = "";
    });
  };
  render() {
    return (
      <div className="card border-secondary mb-3">
        <form onSubmit={this.handleSubmit}>
          <div className="card-header">Creating post</div>
          <div className="card-body">
            <div className="card-text">
              <div className="form-group">
                <input
                  className="form-control"
                  required
                  type="text"
                  ref={input => (this.getTitle = input)}
                  placeholder="Enter Post Title"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  required
                  rows="5"
                  cols="28"
                  ref={input => (this.getMessage = input)}
                  placeholder="Enter Post"
                />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="buttons">
              <button className="btn btn-success mr-1 btn-sm">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
