import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPen,
  faLocationArrow,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faComment, faGem } from "@fortawesome/free-regular-svg-icons";
import styles from "./Navigation.module.css";
import onScrollToSection from "@/utils/onScrollToSection";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "about", label: "About me", icon: faUser },
  { id: "education", label: "Education", icon: faGraduationCap },
  { id: "experience", label: "Experience", icon: faPen },
  { id: "skills", label: "Skills", icon: faGem },
  { id: "portfolio", label: "Portfolio", icon: faBriefcase },
  { id: "contacts", label: "Contacts", icon: faLocationArrow },
  { id: "feedbacks", label: "Feedbacks", icon: faComment },
];

interface NavigationProps {
  showText: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ showText }) => {
  const [activeId, setActiveId] = useState<string>("about"); // Тут выбирается id активной кнопки
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleClick = (id: string) => {
    setActiveId(id);
    onScrollToSection(id);
  };

  // Для автоматической смены активной кнопки при скролле
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observerRef.current = observer;

    const sections = document.querySelectorAll("section[id]"); // Только секции с id
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <div key={item.id} className={styles.navItem}>
          <Button
            icon={<FontAwesomeIcon icon={item.icon} />}
            text={item.label}
            showText={showText}
            onClick={() => handleClick(item.id)}
            isActive={activeId === item.id}
            className={styles.navButtons}
          />
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
