const postsLoaded = posts => {
  return {
    type: "POSTS_LOADED",
    payload: posts
  };
};

const createPost = newPost => {
  return {
    type: "CREATE_POST",
    payload: newPost
  };
};

const editPost = currentPost => {
  return {
    type: "EDIT_POST",
    payload: currentPost
  };
};

export { createPost, postsLoaded, editPost };
