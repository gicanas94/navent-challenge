const searchStringReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_STRING_CHANGE':
      return action.payload.searchString;
    default:
      return state;
  }
};

export default searchStringReducer;
