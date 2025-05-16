import React from "react";
import styles from "./Info.module.css";

type InfoProps = {
  text: string;
  className?: string;
};

const Info: React.FC<InfoProps> = ({ text, className = "" }) => {
  return <p className={`${styles.infoText} ${className}`}>{text}</p>;
};

export default Info;
