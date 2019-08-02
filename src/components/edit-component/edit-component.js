import React from "react";
import { connect } from "react-redux";
import { loadPost, editPost, updatePost, errorPost } from "../../actions";
import PlaceholderService from "../../services/placeholder-service";
import "./edit-component.css";
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";

class EditComponent extends React.Component {
  placeholderService = new PlaceholderService();

  handleSubmit = (e, id) => {
    e.preventDefault();
    this.props.dispatch(loadPost(id));
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    this.placeholderService
      .updatePost(id, newTitle, newMessage)
      .then(res => {
        this.props.dispatch(loadPost(id));
        this.props.dispatch(updatePost(res));
      })
      .catch(() => {
        this.props.dispatch(errorPost(id));
      });
  };
  cancelEdit = id => {
    this.props.dispatch(editPost(id));
  };
  render() {
    const { title, body, id, loading, error } = this.props.post;

    if (error) return <ErrorIndicator />;

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
                onClick={() => this.cancelEdit(id)}
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
