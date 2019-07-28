const reducer = (state = [], action) => {
  switch (action.type) {
    case "POSTS_LOADED":
      return action.payload;
    case "ADD_POST":
      return state.concat(action.payload);
    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
