import axios from 'axios';
import { pathOr } from 'ramda';

export const queryRequest = (queryValue) => {
  return (dispatch) => {

      dispatch(queryRequestAction());
      axios.get(`/api/items?q=${encodeURI(queryValue)}`)
        .then(
          (response) => {
            return dispatch(querySuccessAction({
              categories: pathOr([], ['data', 'categories'], response),
              items: pathOr([], ['data', 'items'], response)
            }));
          }
        )
        .catch( (error) => dispatch(queryErrorAction('Busca inválida')));
  };
};

const queryRequestAction = (queryData) => {
  return {
    type: 'QUERY_REQUEST',
    payload: queryData
  };
};

const querySuccessAction = (queryData) => {
  return {
    type: 'QUERY_SUCCESS',
    payload: queryData
  };
};

const queryErrorAction = (error) => {
  return {
    type: 'QUERY_ERROR',
    payload: error
  };
};