import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  icon?: React.ReactNode;
  text?: string;
  className?: string;
  showText?: boolean;
  onClick?: () => void;
  isActive?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  className,
  showText = true,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={`
        ${styles.button}
        ${isActive ? styles.active : ""}
        ${className || ""}
      `}
      onClick={onClick}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {showText && text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default Button;
