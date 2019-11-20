import React from 'react';
import styles from 'components/Avatar/Avatar.scss';

const name = 'Andrii Tykhonovych';
const job = 'Frontend Developer';

export const Avatar = () => (
    <div className={styles.wrapper}>
        <div className={styles.avatar}>
            <img alt="avatarImg" className={styles.avatarImg} />
        </div>
        <div className={styles.personalData}>
            <div>
                {name}
            </div>
            <div className={styles.separate} />
            <div>
                {job}
            </div>
        </div>
    </div>
);

export default Avatar;