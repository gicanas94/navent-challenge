export const appIsLoadingSet = (appIsLoading) => ({
  type: 'APP_IS_LOADING_SET',
  payload: { appIsLoading },
});

export const postOperationTypeFilterSet = (filter) => ({
  type: 'POST_OPERATION_TYPE_FILTER_SET',
  payload: { filter },
});

export const searchStringChange = (searchString) => ({
  type: 'SEARCH_STRING_CHANGE',
  payload: { searchString },
});
