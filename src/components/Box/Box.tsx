import React from "react";
import styles from "./Box.module.css";

type BoxProps = {
  title: string;
  content: React.ReactNode;
  className?: string;
  id?: string;
};

const Box: React.FC<BoxProps> = ({ title, content, className, id }) => {
  return (
    <section id={id} className={`${styles.box} ${className || ""}`}>
      <h2 className={`${styles.title} body-title1-style`}>{title}</h2>
      <div className={styles.content}>{content}</div>
    </section>
  );
};

export default Box;
