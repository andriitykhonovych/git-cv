import React, { useState, useEffect }  from 'react';
import { connect } from 'react-redux';
import { fetchWorkingData } from 'redux/modules/modulesApp';

import Content from 'components/Content/Content';

import styles from 'components/WorkingData/WorkingData.scss';

export const WorkingData = ({ fetchWorkingData }) => {
    const [data] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/workingData')
            .then(response => response.json())
            .then(response => fetchWorkingData(response))
    }, []);

    return (
        <div className={styles.wrapper} >
            <Content data={data} />
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
        fetchWorkingData: (workingData) => dispatch(fetchWorkingData(workingData)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorkingData);