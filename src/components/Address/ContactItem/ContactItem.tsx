import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSkype,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./ContactItem.module.css";

interface ContactItemProps {
  icon: "email" | "phone" | "linkedin" | "facebook" | "skype";
  title?: string;
  text: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, title }) => {
  const handleClick = () => {
    let uri = "";
    switch (icon) {
      case "email":
        uri = `mailto:${text}`;
        break;
      case "phone":
        uri = `tel:${text}`;
        break;
      case "linkedin":
        uri = `https://linkedin.com/in/${text}`;
        break;
      case "facebook":
        uri = `https://www.facebook.com/${text}`;
        break;
      case "skype":
        uri = `skype:${text}`;
        break;
      default:
        break;
    }
    window.open(uri, "_blank");
  };

  const getIcon = () => {
    switch (icon) {
      case "email":
        return faEnvelope;
      case "phone":
        return faPhone;
      case "linkedin":
        return faLinkedinIn;
      case "facebook":
        return faFacebook;
      case "skype":
        return faSkype;
      default:
        return faPhone;
    }
  };

  return (
    <div className={styles.contactItem} onClick={handleClick}>
      <FontAwesomeIcon icon={getIcon()} className={styles.icon} />
      <div className={styles.infoContainer}>
        {title && <p className={styles.contactTitle}>{title}</p>}
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
};

export default ContactItem;
