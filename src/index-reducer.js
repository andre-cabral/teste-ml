import { combineReducers } from 'redux'
import QueryFormReducer from './query-form/query-form-reducer'

const rootReducer = combineReducers({
  queryForm: QueryFormReducer,
});

export default rootReducer;