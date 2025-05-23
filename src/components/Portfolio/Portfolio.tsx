import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import styles from "./Portfolio.module.css";
import { portfolioItems } from "@/constants/portfolioData";

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isotopeInstance = useRef<Isotope | null>(null);
  //для подсветки выбранного фильтра
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    if (containerRef.current) {
      isotopeInstance.current = new Isotope(containerRef.current, {
        itemSelector: ".card",
        layoutMode: "fitRows",
      });
    }

    return () => {
      isotopeInstance.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({
        filter: filterKey === "*" ? "*" : `.${filterKey}`,
      });
    }
  }, [filterKey]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const filter = event.currentTarget.getAttribute("data-filter");
    console.log(filter);
    if (filter) setFilterKey(filter);
  };

  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${filterKey === "*" ? styles.active : ""}`}
          onClick={handleClick}
          data-filter="*"
        >
          All
        </button>
        <span>/</span>
        <button
          className={`${styles.button} ${filterKey === "code" ? styles.active : ""}`}
          onClick={handleClick}
          data-filter="code"
        >
          Code
        </button>
        <span>/</span>
        <button
          className={`${styles.button} ${filterKey === "ui" ? styles.active : ""}`}
          onClick={handleClick}
          data-filter="ui"
        >
          UI
        </button>
      </div>
      <div
        ref={containerRef}
        className={`${styles.cardsContainer} body-norm2-style`}
      >
        {portfolioItems.map((item) => (
          <div key={item.id} className={`card ${styles.card} ${item.category}`}>
            <div className={styles.cardContent}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.contentDefault}
              />

              <div className={styles.contentOverlay}>
                <h3 className={`${styles.cardTitle} body-title2-style`}>
                  {item.title}
                </h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <a href={item.link} className={styles.cardLink}>
                  View resource
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;
