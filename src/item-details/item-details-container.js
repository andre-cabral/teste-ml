import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { detailsRequest } from './item-details-actions';
import ItemDetails from './item-details-component';

const mapStateToProps = (state) => ({
  id: state.itemDetails.id,
  title: state.itemDetails.title,
  price: state.itemDetails.price,
  picture: state.itemDetails.picture,
  condition: state.itemDetails.condition,
  free_shipping: state.itemDetails.free_shipping,
  sold_quantity: state.itemDetails.sold_quantity,
  description: state.itemDetails.description,
  categories: state.itemDetails.categories
});

const mapDispatchToProps = (dispatch) => 
bindActionCreators({ detailsRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);