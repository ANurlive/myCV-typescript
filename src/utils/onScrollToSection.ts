import styles from "../pages/Inner/Inner.module.css";

const onScrollToSection = (id: string) => {
  const scrollingContainer = document.querySelector(`.${styles.mainContent}`);
  const element = scrollingContainer?.querySelector(`#${id}`) as HTMLElement;
  console.log(scrollingContainer);
  console.log(element);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default onScrollToSection;
