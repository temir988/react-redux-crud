const postsLoaded = posts => {
  return {
    type: "POSTS_LOADED",
    payload: posts
  };
};

const loadPost = id => {
  return {
    type: "LOAD_POST",
    id
  };
};

const createPost = newPost => {
  return {
    type: "ADD_POST",
    payload: newPost
  };
};

const deletePost = id => {
  return {
    type: "DELETE_POST",
    id
  };
};

const editPost = id => {
  return {
    type: "EDIT_POST",
    id
  };
};

const updatePost = post => {
  return {
    type: "UPDATE_POST",
    payload: post
  };
};

export { createPost, postsLoaded, editPost, updatePost, deletePost, loadPost };
