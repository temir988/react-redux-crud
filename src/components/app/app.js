import React from "react";
import AllPosts from "../all-posts";
import "./app.css";
import PostForm from "../post-form/post-form";

class App extends React.Component {
  // componentDidMount() {
  //   // this.placeholderService.getPosts().then(results => {});
  // }

  // createHandler = () => {
  //   this.placeholderService
  //     .createPost("Custom post 1", "Somthing text")
  //     .then(result => {
  //       console.log(result);
  //     });
  // };
  // deleteHandler = id => {
  //   this.placeholderService.deletePost(id).then(res => {
  //     console.log(res);
  //   });
  // };
  // updateHandler = (id, title, body) => {
  //   this.placeholderService.updatePost(id, title, body).then(res => {
  //     console.log(res);
  //   });
  // };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="mb-4">Hello world</h1>

              <PostForm />
              <AllPosts />

              <button onClick={this.createHandler} className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
