const initialState = {
  queryValue: '',
  categories: [],
  items: []
}

const QueryResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'QUERY_REQUEST':
      return {
        ...state,
      };
    case 'QUERY_SUCCESS':
      return {
        ...state,
        categories: action.payload.categories,
        items: action.payload.items,
        error: ''
      };
    case 'QUERY_ERROR':
      return {
        ...state,
        categories: [],
        items: [],
        error: action.payload
      };
    default:
      return state;
  }
}

export default QueryResultsReducer;