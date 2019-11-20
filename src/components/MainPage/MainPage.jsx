import React from 'react';

import WorkingData from 'components/WorkingData/WorkingData';
import PersonalData from 'components/PersonalData/PersonalData.jsx'

import styles from 'components/MainPage/MainPage.scss';

export const MainPage = () => (
    <div className={styles.wrapper}>
        <PersonalData />
        <WorkingData />
    </div>
);

export default MainPage;