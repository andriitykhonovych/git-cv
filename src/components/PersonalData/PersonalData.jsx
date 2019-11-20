import React from 'react';

import Avatar from 'components/Avatar/Avatar';
import Content from "components/Content/Content";

import styles from 'components/PersonalData/PersonalData.scss';

const data = [
    {
        id: 0,
        title: 'Profile',
        icon: 'user',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores autem blanditiis debitis dolor doloribus ex exercitationem fugiat illo inventore labore, magnam natus nihil porro saepe sint tempora! Nisi, veritatis.'
    },
    {
        id: 1,
        title: 'Contact',
        icon: 'address-card',
        contacts: [
            {
                id: 10,
                item: '063 131 00 10',
                icon: 'phone'
            },
            {
                id: 11,
                item: 'andrey.tihonovi4@gmail.com',
                icon: 'envelope'
            }
        ],
    },
    {
        id: 2,
        title: 'Hobby',
        icon: 'heartbeat',
        hobbies: [
            {
                id: 20,
                item: 'swimming',
                icon: 'swimming-pool'
            },
            {
                id: 21,
                item: 'snowboarding',
                icon: 'snowboarding'
            },
            {
                id: 22,
                item: 'clip making',
                icon: 'video'
            }
        ],
    },
];

export const PersonalData = () => (
    <div className={styles.wrapper}>
        <Avatar />
        <div className={styles.contentWrapper}>
            <Content data={data} />
        </div>
    </div>
);

export default PersonalData;