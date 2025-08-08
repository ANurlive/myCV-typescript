import React, { useEffect } from "react";
import styles from "./Skills.module.css";
import { useDispatch, useSelector } from "react-redux";
import { type StoreDispatch, type RootState } from "@/store/rootReducer";
import type { SkillType } from "@/store/skills/types";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { skillsIsOpenAction } from "@/store/skills/reducer";
import { SkillForm } from "./SkillForm/SkillForm";
import { getSkillsThunk } from "@/store/skills/thunk";

export const Skills: React.FC = () => {
  const dispatch = useDispatch<StoreDispatch>();
  const { skillsIsOpen, skills, status } = useSelector(
    (state: RootState) => state.skills
  );
  const handleEditClick = () => {
    dispatch(skillsIsOpenAction(true));
  };
  
  useEffect(() => {
    dispatch(skillsIsOpenAction(null));
    dispatch(getSkillsThunk());
  }, [dispatch]);

  if (status === "rejected")
    return (
      <div className={styles.emptyContainer}>
        <p className={styles.errorMessage}>
          Something went wrong; please review your server connection!
        </p>
      </div>
    );
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.header}>
        <Button
          text="Open edit"
          icon={
            <FontAwesomeIcon icon={faPencil} style={{ color: "inherit" }} />
          }
          className={styles.editButton}
          onClick={handleEditClick}
        />
      </div>
      {skillsIsOpen && <SkillForm />}
      {skills.length > 0 ? (
        <ul className={styles.skillBarList}>
          {skills.map((element: SkillType) => {
            return (
              <li
                style={{ width: `${element.skillRange}%` }}
                className={styles.skillBar}
                key={element.id}
              >
                {element.skillName}
              </li>
            );
          })}
        </ul>
      ) : null}

      <div className={styles.scale}>
        <div className={styles.scaleDividers}></div>
        <div className={styles.scaleDividers}></div>
        <div className={styles.scaleDividers}></div>
      </div>
      <div className={`${styles.labels} body-second-style`}>
        <div className={styles.labelText}>Beginner</div>
        <div className={styles.labelText}>Intermediate</div>
        <div className={styles.labelText}>Proficient</div>
        <div className={styles.labelText}>Master</div>
      </div>
    </div>
  );
};
