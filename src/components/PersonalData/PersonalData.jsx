import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPersonalData } from "redux/modules/modulesApp";
import PropTypes from "prop-types";

import Avatar from "components/Avatar/Avatar";
import Content from "components/Content/Content";

import styles from "components/PersonalData/PersonalData.scss";

const propTypes = {
  fetchPersonalData: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired
};

export const PersonalData = ({ fetchPersonalData, data }) => {
  useEffect(() => {
    fetch("http://localhost:3000/personalData")
      .then(response => response.json())
      .then(response => fetchPersonalData(response));
  }, []);

  return (
    <div className={styles.wrapper}>
      <Avatar />
      <div className={styles.contentWrapper}>
        <Content data={data.personalData} />
      </div>
    </div>
  );
};

PersonalData.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    data: state.modulesApp
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPersonalData: personalData => dispatch(fetchPersonalData(personalData))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalData);
