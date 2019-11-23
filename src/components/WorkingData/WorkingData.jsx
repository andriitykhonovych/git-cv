import React from 'react';

import Content from 'components/Content/Content';

import styles from 'components/WorkingData/WorkingData.scss';

const data = [
    {
        id: 0,
        title: 'Employment',
        icon: 'suitcase',
        employments: [
            {
                id: 10,
                period: '2016 - until now',
                company: 'PMLAB',
                position: 'Frontend developer',
                description: 'qwerty'
            },
            {
                id: 11,
                period: '1991',
                company: '123',
                position: '123',
                description: '123'
            }
        ],
    },
    {
        id: 1,
        title: 'Education',
        icon: 'graduation-cap',
        educations: [
            {
                id: 20,
                period: '1990',
                company: 'qwerty',
                position: 'qwerty',
                description: 'qwerty'
            },
            {
                id: 21,
                period: '1991',
                company: '123',
                position: '123',
                description: '123'
            }
        ],
    },
    {
        id: 2,
        title: 'Skill',
        icon: 'star',
        skills: [
            {
                id: 30,
                item: 'HTML',
                level: '70%'
            },
            {
                id: 31,
                item: 'CSS',
                level: '70%'
            },
            {
                id: 32,
                item: 'JS',
                level: '70%'
            }
        ],
    },
];

export const WorkingData = () => (
    <div className={styles.wrapper} >
        <Content data={data} />
    </div>
);

export default WorkingData;