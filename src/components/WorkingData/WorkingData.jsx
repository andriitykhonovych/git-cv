import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchWorkingData } from "redux/modules/modulesApp";
import PropTypes from "prop-types";

import Content from "components/Content/Content";

import styles from "components/WorkingData/WorkingData.scss";

const propTypes = {
  fetchWorkingData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export const WorkingData = ({ fetchWorkingData, data }) => {
  useEffect(() => {
    fetch("http://localhost:3000/workingData")
      .then(response => response.json())
      .then(response => fetchWorkingData(response));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Content data={data.workingData} />
    </div>
  );
};

WorkingData.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    data: state.modulesApp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWorkingData: workingData => dispatch(fetchWorkingData(workingData))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkingData);
