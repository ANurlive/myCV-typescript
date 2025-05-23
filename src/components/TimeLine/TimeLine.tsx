import React, { useEffect } from "react";
import styles from "./Timeline.module.css";
import { useDispatch, useSelector } from "react-redux";
import { type StoreDispatch, type RootState } from "@/store/rootReducer";
import { fetchEducationsThunk } from "@/store/educations/thunk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { EducationType } from "@/store/educations/types";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons/faSyncAlt";

const Timeline: React.FC = () => {
  const { educations, status } = useSelector(
    (state: RootState) => state.educations
  );
  const dispatch = useDispatch<StoreDispatch>();
  useEffect(() => {
    dispatch(fetchEducationsThunk());
  }, [dispatch]);

  if (status === "loading")
    return (
      <div className={styles.emptyContainer}>
        <FontAwesomeIcon icon={faSyncAlt} className={styles.spinnerIcon} />
      </div>
    );
  if (status === "rejected")
    return (
      <div className={styles.emptyContainer}>
        <p className={styles.errorMessage}>
          Something went wrong; please review your server connection!
        </p>
      </div>
    );

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.spinner}>
        <ul className={styles.timelineList}>
          {educations.length > 0 ? (
            educations.map(
              (item: EducationType, index: React.Key | null | undefined) => (
                <li key={index} className={styles.timelineItem}>
                  <div className={styles.date}>{item.date}</div>
                  <div className={styles.itemInfo}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.text}>{item.text}</p>
                  </div>
                </li>
              )
            )
          ) : (
            <p className={styles.emptyMessage}>No education records found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
