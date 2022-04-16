import React, { ReactElement } from "react";

// Components
import HighlightText from "./HighlightText";

// Style
import styles from "./Review.module.css";

interface ReviewProps {
  nameNAge: string;
  location: string;
  rating: ReactElement;
  image: string;
  content: string;
}

const Review: React.FC<ReviewProps> = ({
  nameNAge,
  location,
  rating,
  image,
  content,
}) => {
  return (
    <div className={styles.container}>
      <h5 className={styles.name}>{nameNAge}</h5>
      <span className={styles.location}>{location}</span>
      <div className={styles.rating}>{rating}</div>
      <div className={styles.image}>
        <img src={image} alt={nameNAge} />
      </div>
      <p className={styles.review}>
        <HighlightText highlightText="Positive Yoga" text={content} />
      </p>
    </div>
  );
};

export default Review;
