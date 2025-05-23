import React from "react";
import styles from "./Expertise.module.css";

// ОПЫТ РАБОТЫ

export type ExperienceItem = {
  date: string;
  info: {
    company: string;
    job: string;
    description: string;
  };
};

type ExpertiseProps = {
  data: ExperienceItem[];
};

const Expertise: React.FC<ExpertiseProps> = ({ data }) => {
  return (
    <div className={styles.expertise}>
      {data.map((item, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={styles.leftColumn}>
            <h3 className={`${styles.company} body-title2-style`}>
              {item.info.company}
            </h3>
            <span className={`${styles.date} body-norm2-style`}>
              {item.date}
            </span>
          </div>
          <div className={styles.rightColumn}>
            <h3 className={`${styles.job} body-title2-style`}>
              {item.info.job}
            </h3>
            <p className={`${styles.description}`}>{item.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
