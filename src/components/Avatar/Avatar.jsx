import React from 'react';
import styles from 'components/Avatar/Avatar.scss';

const name = 'Andrii Tykhonovych';
const job = 'Frontend Developer';

export const Avatar = () => (
    <div className={styles.wrapper}>
        <div className={styles.avatar}>
            <img
                alt="avatarImg"
                src="https://scontent.fiev25-2.fna.fbcdn.net/v/t31.0-8/22137322_1497481876999551_6447965847248463554_o.jpg?_nc_cat=111&_nc_ohc=eH_53A1aC1YAQlYW6H6FYgqHbGHcOA2cH26gcF4krR2OzukOoQyCqSAww&_nc_ht=scontent.fiev25-2.fna&oh=fa26deac4958385fee53cfddfc9fbb55&oe=5E4FA9CF"
                className={styles.avatarImg}
            />
        </div>
        <div className={styles.personalData}>
            {name}
            <div className={styles.separate} />
            {job}
        </div>
    </div>
);

export default Avatar;