import React from "react";
import { connect } from "react-redux";
import PlaceholderService from "../../services/placeholder-service";
import "./post.css";
import Loader from "../loader";

class Post extends React.Component {
  placeholderService = new PlaceholderService();

  deleteHandler = id => {
    this.props.dispatch({
      type: "POST_LOAD",
      id
    });

    this.placeholderService.deletePost(id).then(() => {
      this.props.dispatch({
        type: "POST_LOAD",
        id
      });
      this.props.dispatch({
        type: "DELETE_POST",
        id
      });
    });
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
        <div className="card-header">{title}</div>
        <div className="card-body">
          <p className="card-text">{body}</p>
        </div>
        <div className="card-footer">
          <div className="buttons">
            <button
              className="btn btn-info btn-sm mr-1"
              onClick={() => this.props.dispatch({ type: "EDIT_POST", id })}
            >
              Update
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.deleteHandler(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Post);
