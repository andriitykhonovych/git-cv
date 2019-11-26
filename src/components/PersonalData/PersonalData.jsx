import React, { useState, useEffect }  from 'react';
import { fetchPersonalData } from 'redux/modules/modulesApp';

import Avatar from 'components/Avatar/Avatar';
import Content from "components/Content/Content";

import styles from 'components/PersonalData/PersonalData.scss';

export const PersonalData = () => {
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

export default PersonalData;