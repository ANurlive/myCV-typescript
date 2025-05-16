import React from "react";
import styles from "./Timeline.module.css";

interface TimelineItem {
  date: number;
  title: string;
  text: string;
}

interface TimelineProps {
  data: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.spinner}>
        <ul className={styles.timelineList}>
          {data.map((item, index) => (
            <li key={index} className={styles.timelineItem}>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.itemInfo}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
