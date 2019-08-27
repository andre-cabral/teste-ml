import { combineReducers } from 'redux'
import QueryFormReducer from './query-form/query-form-reducer'
import QueryResultsReducer from './query-results/query-results-reducer';

const rootReducer = combineReducers({
  queryForm: QueryFormReducer,
  queryResults: QueryResultsReducer
});

export default rootReducer;