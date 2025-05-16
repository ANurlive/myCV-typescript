import React from "react";
import PortfolioInfo from "../PortfolioInfo/PortfolioInfo";
import styles from "./PortfolioItem.module.css";

interface PortfolioItemProps {
  title: string;
  description: string;
  link: string;
  backgroundImage: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  description,
  link,
  backgroundImage,
}) => {
  return (
    <div
      className={styles.portfolioItem}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <PortfolioInfo title={title} description={description} link={link} />
    </div>
  );
};

export default PortfolioItem;
