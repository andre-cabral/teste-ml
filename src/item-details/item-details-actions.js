import axios from 'axios';
import { pathOr } from 'ramda';

export const detailsRequest = (productId) => {
  return (dispatch) => {

      dispatch(detailsRequestAction());
      axios.get(`/api/items/${productId}`)
        .then(
          (response) => {
            console.log(response)
            return dispatch(detailsSuccessAction({
              id: pathOr('', ['data', 'item', 'id'], response),
              title: pathOr('', ['data', 'item', 'title'], response),
              price: pathOr({currency: '', amount: '', decimals: ''}, ['data', 'item', 'price'], response),
              picture: pathOr('', ['data', 'item', 'picture'], response),
              condition: pathOr('', ['data', 'item', 'condition'], response),
              free_shipping: pathOr(false, ['data', 'item', 'free_shipping'], response),
              sold_quantity: pathOr('', ['data', 'item', 'sold_quantity'], response),
              description: pathOr('', ['data', 'item', 'description'], response),
              categories: pathOr([], ['data', 'item', 'categories'], response)
            }));
          }
        )
        .catch( (error) => dispatch(detailsErrorAction('Produto inválido')));
  };
};

const detailsRequestAction = () => {
  return {
    type: 'DETAILS_REQUEST'
  };
};

const detailsSuccessAction = (detailsData) => {
  return {
    type: 'DETAILS_SUCCESS',
    payload: detailsData
  };
};

const detailsErrorAction = (error) => {
  return {
    type: 'DETAILS_ERROR',
    payload: error
  };
};