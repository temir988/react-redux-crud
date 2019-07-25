import React from "react";
import "./post.css";

const Post = props => {
  return (
    <div className="card border-secondary mb-3">
      <div className="card-header">{props.title}</div>
      <div className="card-body">
        <p className="card-text">{props.body}</p>
      </div>
      <div className="card-footer">
        <div className="buttons">
          <button className="btn btn-info btn-sm mr-1">Update</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
