import { connect } from 'react-redux';
import App from 'app';
import {
  fetchPersonalData,
  fetchWorkingData,
} from 'redux/modules/modulesApp';

function mapStateToProps(state) {
  return {
    App: state.modulesApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPersonalData: (personalData) => dispatch(fetchPersonalData(personalData)),
    fetchWorkingData: () => dispatch(fetchWorkingData()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);