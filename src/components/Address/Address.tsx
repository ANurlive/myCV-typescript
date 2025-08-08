import React from "react";
import ContactItem from "./ContactItem/ContactItem";
import styles from "./Address.module.css";

const Address: React.FC = () => {
  return (
    <div className={styles.contactList}>
      <ContactItem icon="phone" text="+7 775 759 31 36" />
      <ContactItem icon="email" text="kozhbanova.23@gmail.com" />
      <ContactItem
        icon="linkedin"
        text="kozh-assel"
        title="Linkedin"
      />
    </div>
  );
};

export default Address;
