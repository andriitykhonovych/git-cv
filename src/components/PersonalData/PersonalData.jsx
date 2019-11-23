import React, { useState, useEffect }  from 'react';

import Avatar from 'components/Avatar/Avatar';
import Content from "components/Content/Content";

import styles from 'components/PersonalData/PersonalData.scss';

export const PersonalData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/personalData')
            .then(response => response.json())
            .then(response => setData(response))
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