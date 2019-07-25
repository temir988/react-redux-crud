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

export { createPost, postsLoaded };
