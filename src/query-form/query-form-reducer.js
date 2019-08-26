const initialState = {
  queryInput: ''
}

const QueryFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_QUERY_INPUT':
      return {
        ...state,
        queryInput: action.payload
      };
    case 'QUERY_SUBMIT':
      return {
        ...state
      };
    default:
      return state;
  }
}

export default QueryFormReducer;