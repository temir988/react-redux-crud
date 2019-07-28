import React from "react";
import Post from "../post";
import { connect } from "react-redux";
import { postsLoaded } from "../../actions";

import PlaceholderService from "../../services/placeholder-service";
import "./all-posts.css";

class AllPosts extends React.Component {
  placeholderService = new PlaceholderService();

  componentDidMount() {
    this.placeholderService.getPosts().then(results => {
      this.props.dispatch(postsLoaded(results));
    });
  }

  renderPosts = el => {
    return <Post title={el.title} body={el.body} key={el.id} id={el.id} />;
  };

  render() {
    return (
      <div className="list-group">{this.props.posts.map(this.renderPosts)}</div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(AllPosts);
