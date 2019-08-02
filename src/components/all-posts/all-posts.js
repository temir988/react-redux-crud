import React from "react";
import Post from "../post";
import { connect } from "react-redux";
import { postsLoaded } from "../../actions";

import PlaceholderService from "../../services/placeholder-service";
import "./all-posts.css";
import EditComponent from "../edit-component/edit-component";
import Loader from "../loader";

class AllPosts extends React.Component {
  placeholderService = new PlaceholderService();
  loading = true;
  componentDidMount() {
    this.placeholderService
      .getPosts()
      .then(results => {
        this.loading = false;
        this.props.dispatch(postsLoaded(results));
      })
      .catch(() => {
        console.error("All posts error");
      });
  }

  renderPosts = el => {
    return el.editing ? (
      <EditComponent post={el} key={el.id} />
    ) : (
      <Post post={el} key={el.id} />
    );
  };

  render() {
    return this.loading ? (
      <Loader />
    ) : (
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
