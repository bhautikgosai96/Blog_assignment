const initialState = {
  posts: [],
  loadedPost: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_POST":
      return {
        ...state,
        posts: action.val
      };

    case "LOAD_POST":
      return {
        ...state,
        loadedPost: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
