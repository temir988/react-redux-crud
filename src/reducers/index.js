const reducer = (state = [], action) => {
  switch (action.type) {
    case "POSTS_LOADED":
      return action.payload;
    case "LOAD_POST":
      return state.map(post =>
        post.id === action.id ? { ...post, loading: !post.loading } : post
      );
    case "ADD_POST":
      return state.concat(action.payload);
    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);
    case "EDIT_POST":
      return state.map(post =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE_POST":
      return state.map(post => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
            body: action.payload.body,
            editing: action.payload.editing
          };
        } else return post;
      });
    case "ERROR_POST":
      return state.map(post =>
        post.id === action.id ? { ...post, error: !post.error } : post
      );
    default:
      return state;
  }
};

export default reducer;
