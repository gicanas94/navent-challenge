import { combineReducers } from 'redux';

import appIsLoadingReducer from './appIsLoading';
import postOperationTypeFilterReducer from './postOperationTypeFilter';
import postsReducer from './posts';
import searchStringReducer from './searchString';

const rootReducer = combineReducers({
  appIsLoading: appIsLoadingReducer,
  postOperationTypeFilter: postOperationTypeFilterReducer,
  posts: postsReducer,
  searchString: searchStringReducer,
});

export default rootReducer;
