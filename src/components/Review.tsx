import React, { ReactElement } from "react";
import styled from "styled-components";

// Components
import HighlightText from "./HighlightText";

interface ReviewProps {
  nameNAge: string;
  location: string;
  rating: ReactElement;
  image: string;
  content: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(319px - 32px);
  height: calc(607px - 32px);
  padding: 16px;
  box-shadow: 0px 16px 32px rgba(57, 53, 60, 0.08);
  border-radius: 16px;
`;

const Name = styled.h5`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
`;

const Location = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #22222c;
  opacity: 0.64;
`;

const Rating = styled.div`
  margin: 18px 0;
`;

const ReviewText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #22222c;
`;

const Review: React.FC<ReviewProps> = ({
  nameNAge,
  location,
  rating,
  image,
  content,
}) => {
  return (
    <Container>
      <Name>{nameNAge}</Name>
      <Location>{location}</Location>
      <Rating>{rating}</Rating>
      <div>
        <img src={image} alt={nameNAge} />
      </div>
      <ReviewText>
        <HighlightText highlightText="Positive Yoga" text={content} />
      </ReviewText>
    </Container>
  );
};

export default Review;
