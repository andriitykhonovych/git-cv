import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import { fetchPersonalData } from 'redux/modules/modulesApp';

import Avatar from 'components/Avatar/Avatar';
import Content from "components/Content/Content";

import styles from 'components/PersonalData/PersonalData.scss';

export const PersonalData = ({ fetchPersonalData }) => {
    const [data] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/personalData')
            .then(response => response.json())
            .then(response => fetchPersonalData(response))
    }, []);
    
  return (
      <div className={styles.wrapper}>
          <Avatar />
          <div className={styles.contentWrapper}>
              <Content data={data} />
          </div>
      </div>
  )
};

function mapStateToProps(state) {
    return {
        App: state.modulesApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPersonalData: (personalData) => dispatch(fetchPersonalData(personalData)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PersonalData);