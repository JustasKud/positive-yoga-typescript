import React from "react";
import styled from "styled-components";
// https://github.com/import-js/eslint-plugin-import/issues/2266
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
/* eslint-enable import/no-unresolved */

// Components
import Review from "../components/Review";

// Data
import { clientReviews } from "../DummyData";

interface SuccessStoriesScreenProps {
  isDesktop: boolean;
}

const Container = styled.div<SuccessStoriesScreenProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isDesktop ? "989px" : "calc(100% - 32px)")};
  align-self: center;
  ${(props) => !props.isDesktop && "margin: 0 16px;"}
  margin-bottom: ${(props) => (props.isDesktop ? "40px" : "70px")};
`;

const Title = styled.h3<SuccessStoriesScreenProps>`
  align-self: center;
  font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
  line-height: ${(props) => (props.isDesktop ? "32px" : "28px")};
  margin: 0;
  margin-bottom: 24px;
`;

// https://stackoverflow.com/a/69767073
const ReviewContainer = styled.div<SuccessStoriesScreenProps>`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: space-between;
  ${(props) => !props.isDesktop && "width: 100vw;"}
  ${(props) => !props.isDesktop && "position: relative;"}
  ${(props) => !props.isDesktop && "left: -16px;"}
  ${(props) => !props.isDesktop && "overflow-y: visible;"}
  ${(props) => !props.isDesktop && "overflow-x: clip;"}
`;

const SuccessStoriesScreen: React.FC<SuccessStoriesScreenProps> = ({
  isDesktop,
}) => {
  return (
    <Container isDesktop={isDesktop}>
      <Title isDesktop={isDesktop}>Hear success stories from our clients</Title>

      {/* https://swiperjs.com/ */}
      {isDesktop ? (
        <ReviewContainer isDesktop={isDesktop}>
          {clientReviews.map((client) => (
            <Review
              nameNAge={client.nameNAge}
              location={client.location}
              rating={client.rating}
              image={client.image}
              content={client.content}
              key={client.id.toString()}
              isDesktop={isDesktop}
            />
          ))}
        </ReviewContainer>
      ) : (
        <ReviewContainer isDesktop={isDesktop}>
          <Swiper pagination modules={[Pagination]} className="mySwiper">
            {clientReviews.map((client) => (
              <SwiperSlide key={client.id.toString()}>
                <Review
                  nameNAge={client.nameNAge}
                  location={client.location}
                  rating={client.rating}
                  image={client.image}
                  content={client.content}
                  key={client.id.toString()}
                  isDesktop={isDesktop}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ReviewContainer>
      )}
    </Container>
  );
};

export default SuccessStoriesScreen;
