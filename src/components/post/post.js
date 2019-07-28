import React from "react";
import { connect } from "react-redux";
import PlaceholderService from "../../services/placeholder-service";
import "./post.css";

class Post extends React.Component {
  placeholderService = new PlaceholderService();

  deleteHandler = id => {
    this.placeholderService.deletePost(id).then(() => {
      this.props.dispatch({
        type: "DELETE_POST",
        id
      });
    });
  };

  render() {
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          <p className="card-text">{this.props.body}</p>
        </div>
        <div className="card-footer">
          <div className="buttons">
            <button className="btn btn-info btn-sm mr-1">Update</button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => this.deleteHandler(this.props.id)}
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
