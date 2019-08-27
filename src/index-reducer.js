import { combineReducers } from 'redux';
import QueryFormReducer from './query-form/query-form-reducer';
import QueryResultsReducer from './query-results/query-results-reducer';
import ItemDetailsReducer from './item-details/item-details-reducer';

const rootReducer = combineReducers({
  queryForm: QueryFormReducer,
  queryResults: QueryResultsReducer,
  itemDetails: ItemDetailsReducer
});

export default rootReducer;