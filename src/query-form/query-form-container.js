import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { querySubmit, changeQueryInput } from './query-form-actions';
import QueryForm from './query-form-component';

const mapStateToProps = (state) => ({
  queryInput: state.queryForm.queryInput,
});

const mapDispatchToProps = (dispatch) => 
bindActionCreators({ querySubmit, changeQueryInput }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(QueryForm);