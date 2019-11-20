import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from 'components/Content/Content.scss';

const propTypes = {
    data: PropTypes.array.isRequired,
};

export const Content = ({ data }) => (
    data.map((dataItem) =>
        <Fragment key={dataItem.id}>
            <div className={styles.title}>
                <i className={`fas fa-${dataItem.icon}`} />
                &nbsp;
                {dataItem.title}
            </div>
            {dataItem.content && <div className={styles.content}>{dataItem.content}</div>}
            {dataItem.contacts &&
            dataItem.contacts.map((contactItem) =>
                <div key={contactItem.id} className={styles.contactItem}>
                    <i className={`fas fa-${contactItem.icon}`} />
                    &nbsp;
                    {contactItem.item}
                </div>
            )}
            {dataItem.hobbies && dataItem.hobbies.map((hobbyItem) =>
                <div key={hobbyItem.id} className={styles.hobbyItem}>
                    <i className={`fas fa-${hobbyItem.icon}`} />
                    &nbsp;
                    {hobbyItem.item}
                </div>
            )}
            {dataItem.employments && dataItem.employments.map((employmentItem) =>
                <Fragment key={employmentItem.id}>
                    <div>{employmentItem.period}</div>
                    <div>{employmentItem.company}</div>
                    <div>{employmentItem.position}</div>
                    <div>{employmentItem.description}</div>
                </Fragment>
            )}
            {dataItem.educations && dataItem.educations.map((educationItem) =>
                <Fragment key={educationItem.id}>
                    <div>{educationItem.period}</div>
                    <div>{educationItem.company}</div>
                    <div>{educationItem.position}</div>
                    <div>{educationItem.description}</div>
                </Fragment>
            )}
            {dataItem.skills && dataItem.skills.map((skillItem) =>
                <Fragment key={skillItem.id}>
                    <div>{skillItem.item}</div>
                    <div>{skillItem.level}</div>
                </Fragment>
            )}
        </Fragment>
    )
);

Content.propTypes = propTypes;

export default Content;