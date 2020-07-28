const appIsLoadingReducer = (state = true, action) => {
  switch (action.type) {
    case 'APP_IS_LOADING_SET':
      return action.payload.appIsLoading;
    default:
      return state;
  }
};

export default appIsLoadingReducer;
