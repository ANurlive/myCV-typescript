import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  icon?: React.ReactNode;
  text?: string;
  className?: string;
  showText?: boolean;
  onClick?: () => void;
  isActive?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  className,
  showText = true,
  onClick,
  isActive,
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`
        ${styles.button}
        ${isActive ? styles.active : ""}
        ${className || ""}
      `}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {showText && text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default Button;
