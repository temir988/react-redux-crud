const reducer = (state = [], action) => {
  switch (action.type) {
    case "POSTS_LOADED":
      return action.payload;
    case "CREATE_POST":
      console.log(state.concat(action.payload));
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default reducer;
