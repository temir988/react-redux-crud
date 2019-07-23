import React from "react";
import PlaceholderService from "../../services/placeholder-service";
import "./app.css";

class App extends React.Component {
  placeholderService = new PlaceholderService();

  componentDidMount() {
    this.posts = this.placeholderService.getPosts();
    console.log(this.posts);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Hello world</h1>
        </div>
      </div>
    );
  }
}

export default App;
