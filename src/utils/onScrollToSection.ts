import styles from "../pages/Inner/Inner.module.css";

const onScrollToSection = (id: string) => {
  const scrollingContainer = document.querySelector(`.${styles.mainContent}`);
  const element = scrollingContainer?.querySelector(`#${id}`) as HTMLElement;
  console.log(scrollingContainer);
  console.log(element);
  if (element) {
    const top = element?.getBoundingClientRect().top! + window.scrollY;
    // element.scrollIntoView({ behavior: "smooth", block: "start" });
    scrollingContainer?.scrollTo({ top, behavior: "smooth" });
  }
};

export default onScrollToSection;
