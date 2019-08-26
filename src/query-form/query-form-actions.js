import { accessUrlWithQuery } from '../helpers/url-helper'

export const changeQueryInput = (queryInput) => {
  return (dispatch) => {
    dispatch(queryInputAction(queryInput));
  }
};

const queryInputAction = (queryInput) => {
  return {
    type: 'CHANGE_QUERY_INPUT',
    payload: queryInput
  };
};

export const querySubmit = (queryInput) => {
  return (dispatch) => {
    dispatch(querySubmitAction());
    accessUrlWithQuery('/items', queryInput);
  };
};

const querySubmitAction = () => {
  return {
    type: 'QUERY_SUBMIT'
  };
};