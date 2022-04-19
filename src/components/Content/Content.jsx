import React, { Fragment } from "react";
import PropTypes from "prop-types";

import styles from "components/Content/Content.scss";

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      icon: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string
    })
  ).isRequired
};

export const Content = ({ data }) =>
  data &&
  data.map(dataItem => (
    <Fragment key={dataItem.id}>
      <div className={styles.title}>
        <i className={`fas fa-${dataItem.icon}`} />
        &nbsp;
        {dataItem.title}
      </div>
      {dataItem.content && (
        <div className={styles.content}>{dataItem.content}</div>
      )}
      {dataItem.contacts &&
        dataItem.contacts.map(contactItem => (
          <div key={contactItem.id} className={styles.contactItem}>
            <i className={`fas fa-${contactItem.icon}`} />
            &nbsp;
            {contactItem.item}
          </div>
        ))}
      {dataItem.hobbies &&
        dataItem.hobbies.map(hobbyItem => (
          <div key={hobbyItem.id} className={styles.hobbyItem}>
            <i className={`fas fa-${hobbyItem.icon}`} />
            &nbsp;
            {hobbyItem.item}
          </div>
        ))}
      {dataItem.employments &&
        dataItem.employments.map(employmentItem => (
          <div key={employmentItem.id} className={styles.employmentsWrapper}>
            <div className={styles.period}>{employmentItem.period}</div>
            <div className={styles.infoWrapper}>
              <div>{employmentItem.company}</div>
              <div>{employmentItem.position}</div>
              <div>{employmentItem.description}</div>
            </div>
          </div>
        ))}
      {dataItem.educations &&
        dataItem.educations.map(educationItem => (
          <div key={educationItem.id} className={styles.employmentsWrapper}>
            <div className={styles.period}>{educationItem.period}</div>
            <div className={styles.infoWrapper}>
              <div>{educationItem.company}</div>
              <div>{educationItem.position}</div>
              <div>{educationItem.description}</div>
            </div>
          </div>
        ))}
      {dataItem.skills &&
        dataItem.skills.map(skillItem => (
          <div key={skillItem.id} className={styles.skillsWrapper}>
            <div className={styles.skillItem}>{skillItem.item}</div>
            <div className={styles.skillItem}>
              <div className={styles.level}>{skillItem.level}</div>
            </div>
          </div>
        ))}
    </Fragment>
  ));

Content.propTypes = propTypes;

export default Content;
