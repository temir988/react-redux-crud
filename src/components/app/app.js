import React from "react";
import AllPosts from "../all-posts";
import "./app.css";
import PostForm from "../post-form/post-form";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="mb-4">Hello world</h1>
              <AllPosts />
              <PostForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
