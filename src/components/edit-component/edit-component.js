import React from "react";
import { connect } from "react-redux";
import PlaceholderService from "../../services/placeholder-service";

import "./edit-component.css";
import Loader from "../loader";

class EditComponent extends React.Component {
  placeholderService = new PlaceholderService();

  handleSubmit = (e, id) => {
    e.preventDefault();
    this.props.dispatch({
      type: "POST_LOAD",
      id
    });
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    this.placeholderService.updatePost(id, newTitle, newMessage).then(res => {
      this.props.dispatch({
        type: "POST_LOAD",
        id
      });
      this.props.dispatch({ type: "UPDATE_POST", payload: res });
    });
  };
  cancelEdit = e => {
    this.props.dispatch({ type: "EDIT_POST", id: this.props.id });
  };
  render() {
    const { title, body, id, loading } = this.props.post;

    if (loading) {
      return (
        <div className="card border-secondary mb-3 p-4">
          <Loader />
        </div>
      );
    }

    return (
      <div className="card border-secondary mb-3">
        <form onSubmit={e => this.handleSubmit(e, id)}>
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
                  defaultValue={title}
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
                  defaultValue={body}
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
