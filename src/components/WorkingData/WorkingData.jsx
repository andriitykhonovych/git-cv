import React, { useState, useEffect }  from 'react';

import Content from 'components/Content/Content';

import styles from 'components/WorkingData/WorkingData.scss';

export const WorkingData = ( ) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/workingData')
            .then(response => response.json())
            .then(response => setData(response))
    }, []);

    return (
        <div className={styles.wrapper} >
            <Content data={data} />
        </div>
    )
};

export default WorkingData;