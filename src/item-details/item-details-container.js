import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { detailsRequest } from './item-details-actions';
import ItemDetails from './item-details-component';

const mapStateToProps = (state) => ({
  id: state.itemDetails.id,
  categories: state.itemDetails.categories
});

const mapDispatchToProps = (dispatch) => 
bindActionCreators({ detailsRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);