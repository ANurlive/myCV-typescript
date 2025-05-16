import React from "react";
import styles from "./PhotoBox.module.css";

interface PhotoBoxProps {
  name: string;
  title?: string;
  description?: string;
  avatar: string;
  theme?: "dark" | "light";
  size?: "small" | "medium" | "large";
}

const PhotoBox: React.FC<PhotoBoxProps> = ({
  name,
  title,
  description,
  avatar,
  theme = "dark",
  size = "medium",
}) => {
  return (
    <div
      className={`${styles.photoBox} ${theme === "light" ? styles.light : styles.dark} ${styles[size]}`}
    >
      <div className={styles.avatarContainer}>
        <img src={avatar} alt={name} className={styles.avatar} />
      </div>
      <h2 className={styles.name}>{name}</h2>
      {title && <h3 className={styles.title}>{title}</h3>}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default PhotoBox;
