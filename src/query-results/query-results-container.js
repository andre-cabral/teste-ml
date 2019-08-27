import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { queryRequest } from './query-results-actions';
import QueryResults from './query-results-component';

const mapStateToProps = (state) => ({
  categories: state.queryResults.categories,
  items: state.queryResults.items,
  error: state.queryResults.error,
  loading: state.queryResults.loading
});

const mapDispatchToProps = (dispatch) => 
bindActionCreators({ queryRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QueryResults);