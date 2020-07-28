import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { INPUT_RADIO_LIST_OPTIONS } from '../../constants';
import Post from './Post';
import searchStringSelector from '../../redux/selectors';

const StyledWrapper = styled.div`
  > *:not(*:last-of-type) {
    margin-bottom: 20px;
  }r
`;

const Posts = ({ postOperationTypeFilter, posts }) => {
  const [favoritePosts, setFavoritePosts] = useState(
    JSON.parse(localStorage.getItem('FAVORITE_POSTS')) || [],
  );

  const heartIconClickHandler = (clickedPostId) =>
    setFavoritePosts(
      favoritePosts.includes(clickedPostId)
        ? favoritePosts.filter(
            (favoritePostId) => favoritePostId !== clickedPostId,
          )
        : [...favoritePosts, clickedPostId],
    );

  useEffect(() => {
    localStorage.setItem('FAVORITE_POSTS', JSON.stringify(favoritePosts));
  }, [favoritePosts]);

  return (
    <StyledWrapper>
      {posts.map(
        (post) =>
          (post.operation_type.operation_type_id === postOperationTypeFilter ||
            postOperationTypeFilter ===
              INPUT_RADIO_LIST_OPTIONS.POST_OPERATION_TYPE[3].ID) && (
            <Post
              favorite={favoritePosts.includes(post.id)}
              heartIconClickHandler={heartIconClickHandler}
              key={post.id}
              post={post}
            />
          ),
      )}
    </StyledWrapper>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  postOperationTypeFilter: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  postOperationTypeFilter: state.postOperationTypeFilter,
  posts: state.posts && searchStringSelector(state),
});

export default connect(mapStateToProps)(Posts);
