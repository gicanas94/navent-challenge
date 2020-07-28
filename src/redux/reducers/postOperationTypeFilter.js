import { INPUT_RADIO_LIST_OPTIONS } from '../../constants';

const postOperationTypeFilterReducer = (
  state = Number(localStorage.getItem('POST_OPERATION_TYPE_FILTER')) ||
    INPUT_RADIO_LIST_OPTIONS.POST_OPERATION_TYPE[3].ID,
  action,
) => {
  switch (action.type) {
    case 'POST_OPERATION_TYPE_FILTER_SET':
      localStorage.setItem('POST_OPERATION_TYPE_FILTER', action.payload.filter);
      return action.payload.filter;
    default:
      return state;
  }
};

export default postOperationTypeFilterReducer;
