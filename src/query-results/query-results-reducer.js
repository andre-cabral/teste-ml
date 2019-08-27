const initialState = {
  queryValue: '',
  categories: [],
  items: [],
  loading: true
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
        error: '',
        loading: false
      };
    case 'QUERY_ERROR':
      return {
        ...state,
        categories: [],
        items: [],
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default QueryResultsReducer;