import posts from '../../posts';

const postsReducer = (state = posts, action) => {
  switch (action.type) {
    case 'POSTS_SET': {
      return {
        ...posts,
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
