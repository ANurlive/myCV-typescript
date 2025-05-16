import React from "react";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import PhotoBox from "../PhotoBox/PhotoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Panel.module.css";
import { useNavigate } from "react-router-dom";
import { myData } from "@/constants/aboutMe";

interface PanelProps {
  sidebarOpen?: boolean;
  showText: boolean;
  sizeAvatar: "small" | "medium" | "large";
}

const Panel: React.FC<PanelProps> = ({
  sidebarOpen = true,
  showText,
  sizeAvatar,
}) => {
  const navigate = useNavigate();

  return (
    <>
      {sidebarOpen && (
        <div className={styles.sidebar}>
          <PhotoBox
            name={myData.name}
            avatar={myData.avatar}
            size={sizeAvatar}
          />
          <Navigation showText={showText} />
          <div className={styles.bottomButton}>
            <Button
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Go back"
              showText={showText}
              onClick={() => navigate("/")}
              className={styles.goBackButton}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Panel;
