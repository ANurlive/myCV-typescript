import React, { useEffect, useState } from "react";
import styles from "./Inner.module.css";
import Panel from "@/components/Panel/Panel";
import Box from "@/components/Box/Box";
import {
  aboutMe,
  educationData,
  experienceData,
  feedbackData,
} from "@/constants/aboutMe";
import Timeline from "@/components/TimeLine/TimeLine";
import Expertise from "@/components/Expertise/Expertise";
import Portfolio from "@/components/Portfolio/Portfolio";
import Address from "@/components/Address/Address";
import Feedback from "@/components/Feedback/Feedback";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Button from "@/components/Button/Button";
import onScrollToSection from "@/services/onScrollToSection";

export const Inner: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sideBarWidth, setSideBarWidth] = useState(250);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Состояния для отслеживания размера окна и отображения текста
  const [showText, setShowText] = useState<boolean>(true);
  const [sizeAvatar, setSizeAvatar] = useState<"small" | "medium" | "large">(
    "medium"
  );

  // Обработка изменения ширины окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setShowText(false); // Скрыть текст на маленьких экранах
        setSizeAvatar("small");
        setSideBarWidth(54);
      } else {
        setShowText(true); // Показать текст на больших экранах
        setSizeAvatar("medium");
        setSideBarWidth(250);
      }
    };

    // Инициализация проверки размера при монтировании компонента
    handleResize();

    // Добавление слушателя для изменения размера экрана
    window.addEventListener("resize", handleResize);

    // Очистка слушателя при размонтировании
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.innerPage}>
      <motion.div
        className={styles.sidebarContainer}
        animate={{
          x: sidebarOpen ? 0 : -sideBarWidth,
        }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.panel}>
          <Panel
            sidebarOpen={sidebarOpen}
            showText={showText}
            sizeAvatar={sizeAvatar}
          />
        </div>

        <button className={styles.burgerButton} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </motion.div>

      <motion.div
        className={styles.mainContent}
        animate={{ marginLeft: sidebarOpen ? sideBarWidth : 0 }}
        transition={{ duration: 0.4 }}
      >
        <Box id="about" title="About me" content={<p>{aboutMe}</p>} />
        <Box
          id="education"
          title="Education"
          content={<Timeline data={educationData} />}
        />
        <Box
          id="experience"
          title="Experience"
          content={<Expertise data={experienceData} />}
        />
        <Box id="skills" title="Skills" content={<p>Block with skills</p>} />
        <Box id="portfolio" title="Portfolio" content={<Portfolio />} />
        <Box id="contacts" title="Contacts" content={<Address />} />
        <Box
          id="feedbacks"
          title="Feedbacks"
          content={<Feedback data={feedbackData} />}
        />
        <Button
          className={styles.contentBottomButton}
          icon={<FontAwesomeIcon icon={faChevronUp} />}
          onClick={() => onScrollToSection("about")}
        />
      </motion.div>
    </div>
  );
};
