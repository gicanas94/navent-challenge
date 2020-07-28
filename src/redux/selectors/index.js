const searchStringSelector = (state) =>
  state.posts.filter(
    (post) =>
      post.location.address
        .toUpperCase()
        .includes(state.searchString.toUpperCase().trim()) ||
      post.location.zone
        .toUpperCase()
        .includes(state.searchString.toUpperCase().trim()) ||
      post.location.city
        .toUpperCase()
        .includes(state.searchString.toUpperCase().trim()),
  );

export default searchStringSelector;
