import React from "react";
import styles from "./Home.module.css";
import PhotoBox from "@/components/PhotoBox/PhotoBox";
import Button from "@/components/Button/Button";
import { myData } from "@/constants/aboutMe";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <PhotoBox
          name={myData.name}
          title={myData.title}
          description={myData.description}
          avatar={myData.avatar}
          size="large"
        />
        <Button
          text="Know more"
          onClick={() => navigate("/inner")}
          className={styles.homeButton}
        />
      </div>
    </div>
  );
};
