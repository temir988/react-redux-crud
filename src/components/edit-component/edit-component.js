import React from "react";
import { connect } from "react-redux";
import PlaceholderService from "../../services/placeholder-service";

import "./edit-component.css";

class EditComponent extends React.Component {
  placeholderService = new PlaceholderService();

  handleSubmit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    this.placeholderService
      .updatePost(this.props.id, newTitle, newMessage)
      .then(res => {
        console.log(res);
        this.props.dispatch({ type: "UPDATE_POST", payload: res });
      });
  };
  cancelEdit = e => {
    this.props.dispatch({ type: "EDIT_POST", id: this.props.id });
  };
  render() {
    return (
      <div className="card border-secondary mb-3">
        <form onSubmit={this.handleSubmit}>
          <div className="card-header">Updating post</div>
          <div className="card-body">
            <div className="card-text">
              <div className="form-group">
                <input
                  className="form-control"
                  required
                  type="text"
                  ref={input => (this.getTitle = input)}
                  placeholder="Enter Post Title"
                  defaultValue={this.props.title}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  required
                  ref={input => (this.getMessage = input)}
                  rows="5"
                  cols="28"
                  placeholder="Enter Post"
                  defaultValue={this.props.body}
                />
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="buttons">
              <button className="btn btn-success mr-1 btn-sm">Update</button>
              <button
                className="btn btn-danger btn-sm"
                onClick={this.cancelEdit}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
