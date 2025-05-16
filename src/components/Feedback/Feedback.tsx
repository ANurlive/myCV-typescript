import React from "react";
import styles from "./Feedback.module.css";

type Author = {
  photoUrl: string;
  name: string;
  citeUrl: string;
};

type FeedbackItem = {
  feedback: string;
  author: Author;
};

type FeedbackProps = {
  data: FeedbackItem[];
};

const Feedback: React.FC<FeedbackProps> = ({ data }) => {
  return (
    //тут могу индекс использовать для id li, так как список не меняется(не фильтруется, не сортируется), элемент не интерактивные
    <ul className={styles.feedbackList}>
      {data.map((item, index) => (
        <li key={index} className={styles.feedbackItem}>
          <p className={`${styles.feedbackText}`}>{item.feedback}</p>
          <div className={`${styles.authorContainer}`}>
            <img
              src={item.author.photoUrl}
              alt={item.author.name}
              className={`${styles.authorPhoto}`}
            />
            <span className={`${styles.authorName} body-second-style`}>
              {item.author.name},{" "}
              <a
                href={item.author.citeUrl}
                className={`${styles.authorLink} body-second-style`}
              >
                {item.author.citeUrl}
              </a>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
