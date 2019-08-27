const initialState = {
  id: '',
  title: '',
  price: {
    currency: '',
    amount: '',
    decimals: '',
  },
  picture: '',
  condition: '',
  free_shipping: false,
  sold_quantity: '',
  description: '',
  categories: [],
  error: '',
  loading: true
}

const ItemDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DETAILS_REQUEST':
      return {
        ...state,
      };
    case 'DETAILS_SUCCESS':
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        picture: action.payload.picture,
        condition: action.payload.condition,
        free_shipping: action.payload.free_shipping,
        sold_quantity: action.payload.sold_quantity,
        description: action.payload.description,
        categories: action.payload.categories,
        error: '',
        loading: false
      };
    case 'DETAILS_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default ItemDetailsReducer;